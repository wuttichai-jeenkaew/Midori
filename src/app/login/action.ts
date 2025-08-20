// app/login/action.ts
'use server';

import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { LoginSchema } from '@/schemas/auth/login';

type State = { ok: boolean; error?: string | null };

export async function loginAction(prevState: State, formData: FormData): Promise<State> {
  // 1) Coerce form values to string
  const raw = {
    email: String(formData.get('email') ?? ''),
    password: String(formData.get('password') ?? ''),
  };

  // 2) Validate
  const parsed = LoginSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? 'ข้อมูลไม่ถูกต้อง' };
  }

  const { email, password } = parsed.data;

  // 3) TODO: เชื่อม Auth จริง (เช่น Supabase Auth, NextAuth, Prisma + bcrypt)
  const authenticated = email === 'kornkorn@gmail.com' && password === 'kornkorn';

  if (!authenticated) {
    // แนะนำให้ส่งข้อความ error กลาง ๆ เพื่อไม่บอกใบ้ว่าอีเมลมีจริงหรือไม่
    return { ok: false, error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' };
  }

  // 4) Set session cookie (mock)
  const cookieStore = await cookies();
  cookieStore.set('midori_session', 'mock-session-token', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 วัน
  });

  // 5) Redirect หลังสำเร็จ
  redirect('/');
}
