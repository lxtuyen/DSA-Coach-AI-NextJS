import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <span className="text-indigo-600">DSA</span>
          <span>Coach AI</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a className="hover:text-black" href="/problems">
            Problems
          </a>
          <a className="hover:text-black" href="/roadmap">
            Roadmap
          </a>
          <a className="hover:text-black" href="/ai-coach">
            AI Coach
          </a>
        </nav>

        <div className="flex items-center gap-4 text-sm">
          <Link href="/login" className="text-gray-600 hover:text-black">
            Sign in
          </Link>
          <Link
            href="/register"
            className="rounded-md bg-indigo-600 px-3 py-1.5 text-white hover:bg-indigo-500"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
