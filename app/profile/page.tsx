import { SectionTitle } from "@/app/components/ui/SectionTitle";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-md p-6">
        <SectionTitle
          title="Welcome Back"
          description="Sign in to continue your progress."
          eyebrow="Profile"
        />
        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-black">
          <p className="text-center text-slate-500">Profile form coming soon...</p>
        </div>
      </div>
    </div>
  );
}
