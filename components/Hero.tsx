import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft Stripe-style gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/60 via-white to-white pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-br from-indigo-200/50 to-violet-200/30 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-14 sm:pt-24 pb-16 sm:pb-28 text-center">
        <div className="inline-flex items-center gap-2 bg-white/90 border border-slate-200 rounded-full px-3 py-1 text-xs font-medium text-slate-600 shadow-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Notary-ready in under 10 minutes
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.05]">
          Legal documents,
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
            {" "}done in minutes
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-xl mx-auto">
          From powers of attorney to custom statements — guided, plain-English, and
          notary-ready.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="#documents"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-slate-900/10 hover:shadow-xl transition text-base sm:text-lg"
          >
            Choose a document →
          </Link>
          <Link
            href="#how"
            className="w-full sm:w-auto text-slate-700 hover:text-slate-900 font-medium px-6 py-4 rounded-xl transition"
          >
            See how it works
          </Link>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          No account needed to start · Free preview · Plain English
        </p>
      </div>
    </section>
  );
}