import Link from "next/link";

export default function NotarySection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100/80 rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center">
              <svg
                className="w-6 h-6 text-indigo-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Need it notarized? We can help.
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed max-w-xl">
                Once your document is ready, connect with a licensed online notary right from
                the app — or download and bring it to any notary of your choice.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-indigo-600 font-medium hover:text-indigo-700 transition"
              >
                Learn about notary options
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}