"use server";

import { validateLogin } from '@/libs/validation';
import axios from 'axios';

export async function loginAction(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const email = formData.get("email");
  const password = formData.get("password");

  const result = validateLogin({ email, password });
  if (!result.success) {
    return { success: false, error: result.error.issues[0]?.message ?? "ข้อมูลไม่ถูกต้อง" };
  }

  // TODO: เชื่อมต่อ API จริง เช่น Supabase หรือ Prisma
  // ตัวอย่าง mock
  if (email === "test@midori.dev" && password === "password123") {
    return { success: true };
  }
  return { success: false, error: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" };
}
