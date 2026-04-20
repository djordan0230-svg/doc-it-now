const steps = [
  {
    num: "01",
    title: "Answer a few simple questions",
    desc: "We walk you through what you need, one question at a time. No jargon.",
  },
  {
    num: "02",
    title: "We generate your document",
    desc: "Your answers turn into a clean, professionally formatted legal document.",
  },
  {
    num: "03",
    title: "Download and notarize",
    desc: "Download your PDF, sign, and notarize. We can connect you to a notary if needed.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-28 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            How it works
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            From blank page to notary-ready in three steps
          </h2>
        </div>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition"
            >
              <div className="text-sm font-semibold text-slate-400 tracking-wide">{s.num}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}