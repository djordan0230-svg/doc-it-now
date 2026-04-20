const trust = [
  {
    title: "No legal experience needed",
    desc: "Plain-English questions, no confusing forms. If you can fill out an online order, you can do this.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "Step-by-step guidance",
    desc: "One question at a time, with tips where you need them. No overwhelming blank templates.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
      </svg>
    ),
  },
  {
    title: "Clear, easy-to-understand language",
    desc: "Documents written in plain language while still meeting standard legal requirements.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.39 7.35H22l-6.2 4.5 2.39 7.35L12 16.7 5.81 21.2l2.39-7.35L2 9.35h7.61L12 2z" />
      </svg>
    ),
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            Why people trust Doc It Now
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Built for regular people, not lawyers
          </h2>
        </div>

        <div className="grid gap-10 sm:gap-8 sm:grid-cols-3">
          {trust.map((t) => (
            <div key={t.title} className="text-center sm:text-left">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto sm:mx-0">
                {t.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{t.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}