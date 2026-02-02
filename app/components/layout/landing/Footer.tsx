"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800/50 bg-linear-to-b from-slate-950 to-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-indigo-600/5 blur-3xl" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="group mb-6 inline-flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight">
                <span className="text-white">DSA</span>
                <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Coach
                </span>
              </span>
            </Link>

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-400">
              The ultimate AI companion for mastering data structures and algorithms.
              Built for students, by engineers.
            </p>

            <div className="flex items-center gap-3">
              <SocialLink href="#" icon="𝕏" label="Twitter" />
              <SocialLink href="#" icon="in" label="LinkedIn" />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 md:col-span-7">
            <FooterColumn
              title="Platform"
              links={[
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
              ]}
            />

            <FooterColumn
              title="Resources"
              links={[
                { label: "Blog", href: "#blog" },
                { label: "Documentation", href: "#docs" },
                { label: "Community", href: "#community" },
                { label: "Tutorials", href: "#tutorials" },
              ]}
            />

            <FooterColumn
              title="Company"
              links={[
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Terms of Service", href: "#terms" },
              ]}
            />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/50 pt-8 text-center md:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 DSA Coach AI. All rights reserved.
          </p>          
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h5 className="mb-4 font-bold text-white">{title}</h5>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group flex items-center text-sm text-slate-400 transition-colors hover:text-white"
            >
              <span className="mr-2 opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 text-sm font-bold text-slate-400 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-slate-800 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}