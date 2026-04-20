import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="font-semibold text-slate-900">Doc It Now</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <Link href="#how" className="hover:text-slate-900 transition">How it works</Link>
            <Link href="#" className="hover:text-slate-900 transition">Pricing</Link>
            <Link href="#" className="hover:text-slate-900 transition">Help</Link>
            <Link href="#" className="hover:text-slate-900 transition">Privacy</Link>
            <Link href="#" className="hover:text-slate-900 transition">Terms</Link>
          </nav>
        </div>

        {/*
          TODO — LEGAL DISCLAIMER:
          Replace the paragraph below with your final, attorney-reviewed
          disclaimer before launching. Must clarify that Doc It Now does
          not provide legal advice and is not a substitute for a licensed
          attorney. Jurisdiction-specific language may be required.
        */}
        <div className="mt-8 pt-8 border-t border-slate-100 text-xs text-slate-500 leading-relaxed max-w-3xl">
          <p>
            <strong className="text-slate-700">Disclaimer:</strong> Doc It Now is not a law
            firm and does not provide legal advice. Information and documents generated through
            this service are for general informational purposes only. For advice about your
            specific situation, please consult a licensed attorney in your jurisdiction.
          </p>
          <p className="mt-4">© {new Date().getFullYear()} Doc It Now. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}