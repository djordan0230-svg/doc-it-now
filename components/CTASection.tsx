import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.28),_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(139,92,246,0.15),_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Ready when you are.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-md mx-auto">
          Most people finish in under 10 minutes. No signup required to start.
        </p>
        <Link
          href="/form"
          className="mt-8 inline-block w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 font-semibold px-8 py-4 rounded-xl text-base sm:text-lg shadow-xl transition"
        >
          Start Document →
        </Link>
      </div>
    </section>
  );
}