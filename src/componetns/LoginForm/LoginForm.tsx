'use client';

import { useState } from 'react';
import { Button } from '@/componetns/Button/Button';
import { ErrorMessage } from '@/componetns/LoginForm/ErrorMessage';
import { loginAction } from '@/app/login/action';

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function action(formData: FormData) {
    setLoading(true);
    setError(null);
    const result = await loginAction(formData);
    setLoading(false);
    if (!result.success) {
      setError(result.error ?? "เกิดข้อผิดพลาด");
    } else {
      setError(null);
      alert("เข้าสู่ระบบสำเร็จ (mock)");
    }
  }

  return (
    <form className="space-y-4" action={action} autoComplete="off">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          อีเมล
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          รหัสผ่าน
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          placeholder="รหัสผ่าน"
        />
      </div>
      {error && <ErrorMessage message={error} />}
      <Button type="submit" variant="primary" className="w-full" loading={loading}>
        เข้าสู่ระบบ
      </Button>
    </form>
  );
}