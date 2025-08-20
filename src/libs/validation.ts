import { LoginSchema, LoginInput } from '@/schemas/auth/login';

export function validateLogin(data: unknown) {
  return LoginSchema.safeParse(data);
}
