"use client";

import { useState } from "react";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex flex-col items-center gap-3">
            <span className="text-xl font-black tracking-tight">
              <span className="mr-0.5">DSA</span>
              <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Coach
              </span>
            </span>
            <p className="text-sm text-slate-500">
              Sign up to continue learning
            </p>
          </div>

          <div className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/10"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-xs text-slate-500 hover:text-blue-600 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all hover:shadow-blue-600/40 hover:brightness-110 active:scale-95"
            >
              Sign In
            </button>
          </div>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400">or sign in with</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
            >
              <FcGoogle size={20} />
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            Have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
