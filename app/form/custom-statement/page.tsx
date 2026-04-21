"use client";

import { useState } from "react";
import Link from "next/link";

type FormData = {
  topic: string;
  parties: string;
  statement: string;
  date: string;
  location: string;
  details: string; // optional
};

const TOTAL_STEPS = 6;

export default function CustomStatementFormPage() {
  const [step, setStep] = useState(0);
  const [generated, setGenerated] = useState(false);
  const [data, setData] = useState<FormData>({
    topic: "",
    parties: "",
    statement: "",
    date: "",
    location: "",
    details: "",
  });

  // Details step (index 5) is optional — all others require input.
  const canContinue = () => {
    if (step === 0) return data.topic.trim().length > 0;
    if (step === 1) return data.parties.trim().length > 0;
    if (step === 2) return data.statement.trim().length > 0;
    if (step === 3) return data.date.trim().length > 0;
    if (step === 4) return data.location.trim().length > 0;
    if (step === 5) return true; // optional
    return true;
  };

  const next = () => {
    if (canContinue() && step < TOTAL_STEPS) setStep(step + 1);
  };
  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  const reset = () => {
    setData({
      topic: "",
      parties: "",
      statement: "",
      date: "",
      location: "",
      details: "",
    });
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
              Your statement is ready.
            </h2>
            <p className="mt-3 text-slate-600">
              We've drafted your custom statement based on your answers. Review it
              carefully before signing.
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
                    Custom_Statement_{(data.topic || "document").slice(0, 30).replace(/\s+/g, "_")}.pdf
                  </div>
                  <div className="text-xs text-slate-500">Ready to download · ~1 page</div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                // TODO: Replace with real PDF download once the AI statement generation API is wired up.
                alert("Download placeholder — this will connect to AI-generated statement output.");
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
              Start a new statement
            </button>

            {/*
              TODO — AI + NOTARY NOTES:
              Replace these two notes with your final product copy once the AI
              generation pipeline and notary partner flow are integrated.
            */}
            <div className="mt-8 space-y-3 text-xs text-slate-500 max-w-md mx-auto">
              <div className="flex items-start gap-2 p-3 rounded-lg bg-indigo-50/60 border border-indigo-100 text-left">
                <span className="text-indigo-600 font-semibold shrink-0">Note</span>
                <p>
                  In the final version, this statement will be generated by an AI writer
                  trained on your answers to produce clean, clear legal-style language.
                </p>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50/60 border border-amber-100 text-left">
                <span className="text-amber-700 font-semibold shrink-0">Notarization</span>
                <p>
                  Depending on how you plan to use this statement (court, insurance, HR,
                  etc.), it may need to be notarized. We can connect you to a notary from
                  the homepage when you're ready.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Question steps */}
        {!generated && step === 0 && (
          <Question
            label="What do you need to document?"
            hint="A short phrase describing the subject of your statement."
          >
            <TextInput
              autoFocus
              placeholder="e.g. Vehicle damage on Oct 3, 2025"
              value={data.topic}
              onChange={(v) => setData({ ...data, topic: v })}
              onEnter={next}
            />
          </Question>
        )}

        {!generated && step === 1 && (
          <Question
            label="Who is involved?"
            hint="List the people or parties mentioned in your statement. Full names if possible."
          >
            <TextArea
              autoFocus
              placeholder="e.g. Jane A. Smith (myself), John R. Doe, ABC Insurance Co."
              value={data.parties}
              onChange={(v) => setData({ ...data, parties: v })}
              rows={3}
            />
          </Question>
        )}

        {!generated && step === 2 && (
          <Question
            label="What happened? What are you stating?"
            hint="Describe the facts in your own words. We'll clean it up into a formal statement."
          >
            <TextArea
              autoFocus
              placeholder="Explain what occurred in plain language..."
              value={data.statement}
              onChange={(v) => setData({ ...data, statement: v })}
              rows={6}
            />
          </Question>
        )}

        {!generated && step === 3 && (
          <Question
            label="When did it happen?"
            hint="A specific date, or a date range if it occurred over time."
          >
            <TextInput
              autoFocus
              placeholder="e.g. October 3, 2025 at approximately 2:30 PM"
              value={data.date}
              onChange={(v) => setData({ ...data, date: v })}
              onEnter={next}
            />
          </Question>
        )}

        {!generated && step === 4 && (
          <Question
            label="Where did it happen?"
            hint="Address, city, or general location."
          >
            <TextInput
              autoFocus
              placeholder="e.g. 500 W Madison St parking garage, Chicago, IL"
              value={data.location}
              onChange={(v) => setData({ ...data, location: v })}
              onEnter={next}
            />
          </Question>
        )}

        {!generated && step === 5 && (
          <Question
            label="Any additional details?"
            hint="Optional. Add anything else a reader should know — witnesses, context, supporting facts."
          >
            <TextArea
              autoFocus
              placeholder="Leave blank to skip..."
              value={data.details}
              onChange={(v) => setData({ ...data, details: v })}
              rows={5}
            />
            <p className="mt-3 text-xs text-slate-400">This step is optional.</p>
          </Question>
        )}

        {/* Review screen */}
        {isReview && (
          <div>
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
                Review your statement
              </h2>
              <p className="mt-3 text-slate-600">
                Double-check each answer below. You can jump back and edit anything.
              </p>
            </div>

            <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl divide-y divide-slate-200 text-sm">
              <ReviewRow label="Subject" value={data.topic} onEdit={() => setStep(0)} />
              <ReviewRow label="People involved" value={data.parties} onEdit={() => setStep(1)} />
              <ReviewRow label="What happened" value={data.statement} onEdit={() => setStep(2)} />
              <ReviewRow label="When" value={data.date} onEdit={() => setStep(3)} />
              <ReviewRow label="Where" value={data.location} onEdit={() => setStep(4)} />
              <ReviewRow
                label="Additional details"
                value={data.details || "(none)"}
                onEdit={() => setStep(5)}
              />
            </div>

            <button
              type="button"
              onClick={() => setGenerated(true)}
              className="mt-8 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl text-base sm:text-lg transition"
            >
              Generate my statement
            </button>
            <button
              type="button"
              onClick={back}
              className="mt-3 w-full text-slate-600 hover:text-slate-900 font-medium py-2 transition"
            >
              ← Back
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
              {step === TOTAL_STEPS - 1 ? "Review" : step === 5 && !data.details ? "Skip" : "Continue"} →
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

/* ---------- Small helpers (local to this flow) ---------- */

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

function TextArea({
  value,
  onChange,
  placeholder,
  rows = 4,
  autoFocus,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  autoFocus?: boolean;
}) {
  return (
    <textarea
      autoFocus={autoFocus}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full text-lg sm:text-xl bg-transparent border-b-2 border-slate-200 focus:border-indigo-500 outline-none py-3 placeholder-slate-300 resize-none transition-colors"
    />
  );
}

function ReviewRow({
  label,
  value,
  onEdit,
}: {
  label: string;
  value: string;
  onEdit?: () => void;
}) {
  return (
    <div className="p-4 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
            {label}
          </div>
          <div className="mt-1.5 text-slate-900 whitespace-pre-wrap break-words">
            {value || "—"}
          </div>
        </div>
        {onEdit && (
          <button
            type="button"
            onClick={onEdit}
            className="text-indigo-600 hover:text-indigo-700 text-sm font-medium shrink-0"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}