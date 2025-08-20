// Authentication form types

// Form data types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

// Validation error types
export interface LoginValidationErrors {
  email?: string;
  password?: string;
  general?: string;
}

export interface RegisterValidationErrors {
  name?: string;
  email?: string;
  password?: string;
  general?: string;
}

// Common auth types
export interface AuthState {
  ok: boolean;
  error?: string | null;
}

// Export specific validation error types for convenience
export type ValidationErrors = LoginValidationErrors | RegisterValidationErrors;
