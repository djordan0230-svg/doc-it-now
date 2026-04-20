import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="font-semibold text-slate-900 tracking-tight">Doc It Now</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-5">
          <Link href="#how" className="hidden sm:inline text-sm text-slate-600 hover:text-slate-900 transition">
            How it works
          </Link>
          <Link href="#trust" className="hidden sm:inline text-sm text-slate-600 hover:text-slate-900 transition">
            Why us
          </Link>
          <Link
            href="/form"
            className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
          >
            Start Document
          </Link>
        </div>
      </div>
    </nav>
  );
}