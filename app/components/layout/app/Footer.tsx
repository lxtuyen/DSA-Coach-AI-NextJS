export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600">

        <div className="flex flex-col md:flex-row justify-between gap-6">
          
          <div>
            <div className="font-semibold text-gray-800">DSA Coach AI</div>
            <p className="mt-1 text-gray-500">
              Practice Data Structures & Algorithms with AI guidance.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="/about" className="hover:text-black">About</a>
            <a href="/roadmap" className="hover:text-black">Roadmap</a>
            <a href="/contact" className="hover:text-black">Contact</a>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-400">
          © 2026 DSA Coach AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
