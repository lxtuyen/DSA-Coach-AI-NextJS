"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 blur-lg transition-opacity group-hover:opacity-50" />
              
              <div className="relative flex items-center gap-2">
                <span className="text-xl font-black tracking-tight">
                  <span className="text-white">DSA</span>
                  <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Coach
                  </span>
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/login"
                className="group relative overflow-hidden rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-2.5 font-bold text-white shadow-lg shadow-blue-600/30 transition-all"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-indigo-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </motion.div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden md:hidden"
            >
              <div className="space-y-1 border-t border-slate-800 pt-4 mt-4">
                <MobileNavLink href="#features" onClick={() => setIsOpen(false)}>
                  Features
                </MobileNavLink>
                <MobileNavLink href="#how-it-works" onClick={() => setIsOpen(false)}>
                  How It Works
                </MobileNavLink>
                <MobileNavLink href="#pricing" onClick={() => setIsOpen(false)}>
                  Pricing
                </MobileNavLink>
                
                <div className="space-y-2 border-t border-slate-800 pt-4">
                  <Link
                    href="/login"
                    className="block rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-center font-bold text-white shadow-lg shadow-blue-600/30"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative font-semibold text-slate-400 transition-colors hover:text-white"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-blue-500 to-indigo-500 transition-all group-hover:w-full" />
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-lg px-4 py-2 font-semibold text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
    >
      {children}
    </Link>
  );
}