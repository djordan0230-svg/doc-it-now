import Link from "next/link";

// TODO — DOC TYPES:
// Add new document types to this array as new flows are built. Each entry
// maps to a route under /form/... and renders as a card on the homepage.
const docTypes = [
  {
    href: "/form",
    badge: "Most popular",
    title: "Financial Power of Attorney",
    desc: "Name someone you trust to handle financial, real estate, tax, or legal matters on your behalf.",
    time: "~8 minutes",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2zM9 7a3 3 0 016 0v2H9V7z" />
      </svg>
    ),
  },
  {
    href: "/form/custom-statement",
    badge: "New",
    title: "Custom Notarized Statement",
    desc: "Write a clear, formal statement of facts — useful for insurance, court, HR, or personal records.",
    time: "~5 minutes",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

export default function DocTypesSection() {
  return (
    <section id="documents" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            Pick a document
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            What would you like to create today?
          </h2>
          <p className="mt-4 text-slate-600">
            Choose a document type below. Each one walks you through a short, guided
            series of questions.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
          {docTypes.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition flex flex-col"
            >
              {d.badge && (
                <span className="absolute top-5 right-5 text-[10px] font-semibold uppercase tracking-wide text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full">
                  {d.badge}
                </span>
              )}
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                {d.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{d.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed flex-1">{d.desc}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-slate-500">{d.time}</span>
                <span className="text-indigo-600 font-medium text-sm group-hover:text-indigo-700 transition">
                  Start →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          More document types coming soon.
        </p>
      </div>
    </section>
  );
}