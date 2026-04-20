"use client";

import { useState } from "react";
import Link from "next/link";

type FormData = {
  fullName: string;
  address: string;
  agentName: string;
  powers: string[];
};

// Financial Power of Attorney — healthcare intentionally excluded (belongs in a
// separate Healthcare POA / Advance Directive flow).
const POWERS = [
  { id: "financial", label: "Financial matters", desc: "Banking, bills, investments" },
  { id: "real_estate", label: "Real estate", desc: "Buy, sell, manage property" },
  { id: "taxes", label: "Tax matters", desc: "File returns, respond to the IRS" },
  { id: "legal", label: "Legal claims", desc: "Sign legal documents on your behalf" },
];

const TOTAL_STEPS = 4;

export default function FormPage() {
  const [step, setStep] = useState(0);
  const [generated, setGenerated] = useState(false);
  const [data, setData] = useState<FormData>({
    fullName: "",
    address: "",
    agentName: "",
    powers: [],
  });

  const canContinue = () => {
    if (step === 0) return data.fullName.trim().length > 0;
    if (step === 1) return data.address.trim().length > 0;
    if (step === 2) return data.agentName.trim().length > 0;
    if (step === 3) return data.powers.length > 0;
    return true;
  };

  const next = () => {
    if (canContinue() && step < TOTAL_STEPS) setStep(step + 1);
  };
  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  const togglePower = (id: string) => {
    setData((d) => ({
      ...d,
      powers: d.powers.includes(id)
        ? d.powers.filter((p) => p !== id)
        : [...d.powers, id],
    }));
  };

  const reset = () => {
    setData({ fullName: "", address: "", agentName: "", powers: [] });
    setStep(0);
    setGenerated(false);
  };

  const progress = generated
    ? 100
    : step >= TOTAL_STEPS
    ? 100
    : (step / TOTAL_STEPS) * 100;
  const isReview = step === TOTAL_STEPS && !generated;

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Top bar with progress */}
      <header className="sticky top-0 bg-white/90 backdrop-blur border-b border-slate-100 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">D</span>
            </div>
            <span className="font-semibold text-slate-900 text-sm">Doc It Now</span>
          </Link>
          {!isReview && !generated && (
            <span className="text-xs font-medium text-slate-500">
              Step {step + 1} of {TOTAL_STEPS}
            </span>
          )}
        </div>
        <div className="h-1 bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <div className="flex-1 flex flex-col justify-center max-w-xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Success screen */}
        {generated && (
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Your document is ready.
            </h2>
            <p className="mt-3 text-slate-600">
              We've prepared your document based on your answers. You can download it now,
              or continue to notarization.
            </p>

            <div className="mt-8 bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-2xl p-6 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    Power_of_Attorney_{(data.fullName || "document").replace(/\s+/g, "_")}.pdf
                  </div>
                  <div className="text-xs text-slate-500">Ready to download · ~2 pages</div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                // TODO: Replace with real PDF download once the generation API is wired up.
                alert("Download placeholder — connect your document generation API here.");
              }}
              className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl text-base sm:text-lg transition"
            >
              Download PDF
            </button>

            <button
              type="button"
              onClick={reset}
              className="mt-3 w-full text-slate-600 hover:text-slate-900 font-medium py-2 transition"
            >
              Start a new document
            </button>

            {/* TODO: Replace the success-screen notice below with your attorney-approved language before launch. */}
            <p className="mt-8 text-xs text-slate-400">
              This is a sample preview. Review your document carefully before signing or notarizing.
            </p>
          </div>
        )}

        {/* Question steps */}
        {!generated && step === 0 && (
          <Question
            label="What's your full legal name?"
            hint="As it appears on your government-issued ID."
          >
            <TextInput
              autoFocus
              placeholder="e.g. Jane A. Smith"
              value={data.fullName}
              onChange={(v) => setData({ ...data, fullName: v })}
              onEnter={next}
            />
          </Question>
        )}

        {!generated && step === 1 && (
          <Question
            label="What's your current address?"
            hint="Street, city, state, and ZIP code."
          >
            <textarea
              autoFocus
              placeholder="123 Main St, Chicago, IL 60601"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
              rows={3}
              className="w-full text-lg sm:text-xl bg-transparent border-b-2 border-slate-200 focus:border-indigo-500 outline-none py-3 placeholder-slate-300 resize-none transition-colors"
            />
          </Question>
        )}

        {!generated && step === 2 && (
          <Question
            label="Who do you want to name as your agent?"
            hint="The person you're giving authority to act on your behalf."
          >
            <TextInput
              autoFocus
              placeholder="e.g. John R. Smith"
              value={data.agentName}
              onChange={(v) => setData({ ...data, agentName: v })}
              onEnter={next}
            />
          </Question>
        )}

        {!generated && step === 3 && (
          <Question
            label="What powers would you like to grant?"
            hint="Select all that apply. You can adjust these later."
          >
            <div className="space-y-2.5 mt-2">
              {POWERS.map((p) => {
                const selected = data.powers.includes(p.id);
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => togglePower(p.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition flex items-start gap-3 ${
                      selected
                        ? "border-indigo-500 bg-indigo-50/60"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-md shrink-0 mt-0.5 flex items-center justify-center border-2 transition ${
                        selected
                          ? "bg-indigo-600 border-indigo-600"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {selected && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{p.label}</div>
                      <div className="text-sm text-slate-500">{p.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Question>
        )}

        {/* Review screen */}
        {isReview && (
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-indigo-50 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              You're all set, {data.fullName.split(" ")[0] || "friend"}.
            </h2>
            <p className="mt-3 text-slate-600">
              Review your answers and we'll generate your document.
            </p>
            <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 text-left text-sm space-y-3">
              <ReviewRow label="Name" value={data.fullName} />
              <ReviewRow label="Address" value={data.address} />
              <ReviewRow label="Agent" value={data.agentName} />
              <ReviewRow
                label="Powers"
                value={
                  data.powers
                    .map((id) => POWERS.find((p) => p.id === id)?.label)
                    .filter(Boolean)
                    .join(", ") || "—"
                }
              />
            </div>
            <button
              type="button"
              onClick={() => setGenerated(true)}
              className="mt-8 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl text-base sm:text-lg transition"
            >
              Generate my document
            </button>
            <button
              type="button"
              onClick={back}
              className="mt-3 w-full text-slate-600 hover:text-slate-900 font-medium py-2 transition"
            >
              ← Edit answers
            </button>
          </div>
        )}

        {/* Navigation buttons (hidden on review and success screens) */}
        {!generated && !isReview && (
          <div className="mt-10 flex items-center gap-3">
            {step > 0 && (
              <button
                type="button"
                onClick={back}
                className="px-5 py-3 rounded-xl text-slate-700 font-medium hover:bg-slate-100 transition"
              >
                ← Back
              </button>
            )}
            <button
              type="button"
              onClick={next}
              disabled={!canContinue()}
              className="flex-1 sm:flex-none sm:ml-auto bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-xl transition"
            >
              {step === TOTAL_STEPS - 1 ? "Review" : "Continue"} →
            </button>
          </div>
        )}

        {!generated && !isReview && (
          <p className="mt-6 text-center text-xs text-slate-400">
            Press{" "}
            <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px]">
              Enter
            </kbd>{" "}
            to continue
          </p>
        )}
      </div>
    </main>
  );
}

/* ---------- Small helpers ---------- */

function Question({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
        {label}
      </h1>
      {hint && <p className="mt-2 text-slate-500">{hint}</p>}
      <div className="mt-8">{children}</div>
    </div>
  );
}

function TextInput({
  value,
  onChange,
  onEnter,
  placeholder,
  autoFocus,
}: {
  value: string;
  onChange: (v: string) => void;
  onEnter?: () => void;
  placeholder?: string;
  autoFocus?: boolean;
}) {
  return (
    <input
      autoFocus={autoFocus}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && onEnter) onEnter();
      }}
      placeholder={placeholder}
      className="w-full text-xl sm:text-2xl bg-transparent border-b-2 border-slate-200 focus:border-indigo-500 outline-none py-3 placeholder-slate-300 transition-colors"
    />
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-slate-500 shrink-0">{label}</span>
      <span className="font-medium text-slate-900 text-right">{value || "—"}</span>
    </div>
  );
}