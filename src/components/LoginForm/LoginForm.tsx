// LoginForm.tsx (client)
'use client';
import { useActionState, useState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button/Button';
import { loginAction } from '@/app/login/action';
import { LoginSchema, type LoginInput } from '@/schemas/auth/login';
import { LoginFormData, LoginValidationErrors, AuthState } from '@/types/auth';

const initialState: AuthState = { ok: false, error: null };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      className="w-full" 
      loading={pending} 
      aria-busy={pending} 
      aria-disabled={pending}
      disabled={pending}
    >
      เข้าสู่ระบบ
    </Button>
  );
}

export function LoginForm() {
  const [state, formAction] = useActionState(loginAction, initialState);
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [clientErrors, setClientErrors] = useState<LoginValidationErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  // ล้าง password และรีเซ็ตฟอร์มเมื่อสำเร็จ
  useEffect(() => {
    if (state.ok) {
      // ล้างข้อมูลฟอร์ม
      setFormData({ email: '', password: '' });
      formRef.current?.reset();
      // Redirect หลังสำเร็จ 2 วินาที
      const timer = setTimeout(() => {
        router.push('/');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.ok, router]);

  // ล้าง password เมื่อเกิด server error (เพื่อความปลอดภัย)
  useEffect(() => {
    if (state?.error) {
      setFormData(prev => ({ ...prev, password: '' }));
    }
  }, [state?.error]);

  // Focus management สำหรับ accessibility
  useEffect(() => {
    if (state?.error) {
      // Focus ไปที่ form error
      document.getElementById('form-error')?.focus();
    } else if (Object.keys(clientErrors).length > 0) {
      // Focus ไปที่ field แรกที่มี error
      const firstErrorField = Object.keys(clientErrors)[0];
      document.getElementById(firstErrorField)?.focus();
    }
  }, [state?.error, clientErrors]);

  // Client-side validation ก่อน submit
  const handleSubmit = async (formDataSubmit: FormData) => {
    // ใช้ formData state เป็นหลัก เพื่อ UX ที่ดีในการ validation
    const { email, password } = formData;

    // ตรวจสอบด้วย Zod schema
    const validation = LoginSchema.safeParse({ email, password });

    if (!validation.success) {
      const errors: LoginValidationErrors = {};
      validation.error.issues.forEach((issue) => {
        const field = issue.path[0];
        // Type guard แก้ไข: ตรวจสอบว่าเป็น field ที่ valid
        if (typeof field === 'string' && (field === 'email' || field === 'password')) {
          errors[field as keyof LoginValidationErrors] = issue.message;
        }
      });
      setClientErrors(errors);
      return; // หยุดการ submit หากมี validation error
    }

    // ล้าง client errors แล้ว submit
    setClientErrors({});
    await formAction(formDataSubmit);
  };

  return (
    <form className="space-y-4" action={handleSubmit} autoComplete="on" noValidate ref={formRef}>
      {/* Error รวม - แสดงที่ด้านบนของฟอร์ม */}
      {state?.error && (
        <div
          id="form-error"
          role="alert"
          aria-live="polite"
          className="p-3 bg-red-50 border border-red-200 rounded-lg"
        >
          <div className="flex items-center">
            <span className="text-red-500 mr-2" aria-hidden="true">⚠️</span>
            <span className="text-red-700">{state.error}</span>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          อีเมล
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          aria-invalid={!!clientErrors.email}
          aria-describedby={clientErrors.email ? 'email-error' : undefined}
          placeholder="your@email.com"
        />
        {clientErrors.email && (
          <div
            id="email-error"
            role="alert"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {clientErrors.email}
          </div>
        )}
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          รหัสผ่าน
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          aria-invalid={!!clientErrors.password}
          aria-describedby={clientErrors.password ? 'password-error' : undefined}
          placeholder="รหัสผ่าน"
        />
        {clientErrors.password && (
          <div
            id="password-error"
            role="alert"
            aria-live="polite"
            className="mt-1 text-sm text-red-600"
          >
            {clientErrors.password}
          </div>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}
