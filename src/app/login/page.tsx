import { LoginForm } from '@/components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">
          เข้าสู่ระบบ Midori
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}