"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { RegisterSchema } from "@/schemas/auth/register";

export type State = { ok: boolean; error?: string | null };

export async function registerAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  // 1) Coerce form values to string
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    password: String(formData.get("password") ?? ""),
  };

  // 2) Validate
  const parsed = RegisterSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      error: parsed.error.issues[0]?.message ?? "ข้อมูลไม่ถูกต้อง",
    };
  }

  const { name, email, password } = parsed.data;

  // 3) TODO: เชื่อม Auth จริง (เช่น Supabase Auth, NextAuth, Prisma + bcrypt)
  // ตรวจสอบว่าอีเมลมีอยู่ในระบบแล้วหรือไม่
  const existingUser = email === "test@midori.dev"; // Mock: สมมติ email นี้มีแล้ว

  if (existingUser) {
    return { ok: false, error: "อีเมลนี้ถูกใช้งานแล้ว" };
  }

  // 4) Mock: สร้างผู้ใช้ใหม่ (ในระบบจริงจะ hash password และบันทึกลงฐานข้อมูล)
  const userCreated = true; // Mock success

  if (!userCreated) {
    return { ok: false, error: "เกิดข้อผิดพลาดในการสมัครสมาชิก" };
  }

  // 5) Set session cookie หลังสมัครสำเร็จ
  const cookieStore = await cookies();
  cookieStore.set('midori_session', 'mock-new-user-session-token', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 วัน
  });

  // 6) Redirect หลังสำเร็จ
  redirect("/");
}
