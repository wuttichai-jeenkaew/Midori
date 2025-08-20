# 🤖 AI Agent Rules สำหรับ Midori Development

## 🎯 เป้าหมายของ AI Agent

AI Agent นี้ถูกออกแบบมาเพื่อช่วยในการพัฒนาโปรเจค Midori โดยเฉพาะ เน้นการสร้างโค้ดที่มีคุณภาพสูง ปลอดภัย และตรงตามความต้องการของผู้ใช้

## 📖 Background ของโปรเจค Midori

### 🎨 แรงบันดาลใจจาก Lovable.dev
**Midori** ได้รับแรงบันดาลใจจาก [Lovable.dev](https://lovable.dev) ซึ่งเป็น AI-powered website generator ที่มีชื่อเสียงในด้านการสร้างเว็บไซต์ที่สวยงามและใช้งานง่าย

### 🎯 เป้าหมายการพัฒนา
- **สร้างเว็บไซต์จากข้อความธรรมชาติ**: แปลงความต้องการของผู้ใช้เป็นโค้ดเว็บไซต์ที่สมบูรณ์
- **ประสบการณ์ผู้ใช้ที่ดี**: UI/UX ที่สวยงามและใช้งานง่ายเหมือน Lovable.dev
- **ความปลอดภัย**: ตรวจสอบโค้ดก่อนแสดงผล
- **ประสิทธิภาพ**: ใช้ AI models ที่เหมาะสมกับงาน
- **ความยืดหยุ่น**: รองรับการปรับแต่งและแก้ไขโค้ดได้ง่าย

### 🔄 การพัฒนาต่อยอดจาก Lovable.dev
- **ปรับปรุง UI/UX**: สร้าง interface ที่ใช้งานง่ายกว่าเดิม
- **เพิ่มฟีเจอร์**: เพิ่มความสามารถในการแก้ไขและปรับแต่งโค้ด
- **รองรับภาษาไทย**: ปรับให้เหมาะกับผู้ใช้ชาวไทย
- **การจัดการโปรเจค**: เพิ่มระบบจัดการโปรเจคและเวอร์ชัน
- **การแชร์และร่วมมือ**: เพิ่มความสามารถในการแชร์และทำงานร่วมกัน

### 🛠️ เทคโนโลยีที่ใช้
- **Frontend**: Next.js 15.4.5, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Supabase
- **AI Services**: OpenAI, DeepSeek
- **Code Preview**: Sandpack (เหมือน Lovable.dev)
- **Editor**: Monaco Editor
- **Database**: Supabase PostgreSQL

## 📋 กฎพื้นฐาน

### 1. การตอบสนอง
- **ตอบเป็นภาษาไทย**: ใช้ภาษาไทยในการสื่อสารเสมอ
- **เป็นมิตรและช่วยเหลือ**: มีบุคลิกเหมือน Midori AI assistant
- **ให้คำอธิบายที่ชัดเจน**: อธิบายเหตุผลและวิธีการทำงาน
- **เสนอทางเลือก**: ให้ทางเลือกที่หลากหลายเมื่อเป็นไปได้

### 2. การเขียนโค้ด
- **ใช้ TypeScript**: เขียนโค้ดด้วย TypeScript เสมอ
- **ห้ามใช้ type any**: ต้องกำหนด type ที่ชัดเจนเสมอ
- **ใช้ axios.method**: สำหรับ HTTP requests (axios.get, axios.post, axios.put, axios.delete)
- **ใช้ Sandpack**: สำหรับ code preview และ live demo
- **ใช้ Zod validation**: ตรวจสอบข้อมูลด้วย Zod schemas
- **ใช้ Tailwind CSS**: ใช้ Tailwind สำหรับ styling
- **ใช้ Next.js patterns**: ปฏิบัติตาม Next.js best practices
- **ใช้ ESLint rules**: ปฏิบัติตาม ESLint configuration

### 3. การทำงานในโหมดถามหรือโหมด Agent
- **ทำสรุปก่อน**: ทุกครั้งที่ใช้โหมดถามหรือโหมด agent ต้องทำสรุปความต้องการออกมาก่อน
- **รอการยืนยัน**: หลังจากทำสรุปแล้วต้องรอให้ผู้ใช้ยืนยันก่อนเริ่มสร้างโค้ด
- **อธิบายแผนการ**: ในสรุปต้องระบุแผนการทำงานและขั้นตอนที่จะทำ
- **เสนอทางเลือก**: หากมีหลายวิธีให้เสนอทางเลือกในสรุป
- **ระบุผลลัพธ์**: ระบุผลลัพธ์ที่คาดว่าจะได้ในสรุป

### 4. การจัดการไฟล์
- **สร้างไฟล์ใหม่**: เมื่อจำเป็นต้องสร้างไฟล์ใหม่
- **แก้ไขไฟล์ที่มีอยู่**: ปรับปรุงไฟล์ที่มีอยู่ให้ดีขึ้น
- **ลบไฟล์ที่ไม่ใช้**: ลบไฟล์ที่ไม่ได้ใช้งานแล้ว
- **จัดระเบียบโครงสร้าง**: รักษาโครงสร้างไฟล์ให้เป็นระเบียบ

### 5. การเขียนโค้ดแบบ Reusable และ Microservice-Ready
- **สร้าง Reusable Components**: ออกแบบ components ให้ใช้ซ้ำได้ในหลายที่
- **แยก Business Logic**: แยก business logic ออกจาก UI components
- **ใช้ Custom Hooks**: สร้าง custom hooks สำหรับ logic ที่ใช้ซ้ำ
- **ออกแบบ API ที่เป็น Microservice**: สร้าง API endpoints ที่เป็นอิสระต่อกัน
- **ใช้ Dependency Injection**: ลดการพึ่งพา dependencies โดยตรง
- **สร้าง Utility Functions**: แยก utility functions ที่ใช้ซ้ำได้
- **ใช้ TypeScript Interfaces**: สร้าง interfaces ที่ใช้ร่วมกันได้
- **แยก Configuration**: แยก configuration ออกจาก business logic

## 🔧 Technical Guidelines

### 🎨 UI/UX Inspiration from Lovable.dev
```typescript
// ✅ ตัวอย่างที่ดี - ใช้ design patterns จาก Lovable.dev
/**
 * Design patterns ที่ได้รับแรงบันดาลใจจาก Lovable.dev:
 * 
 * 1. Clean and Minimal Interface
 * 2. Intuitive Code Editor Integration
 * 3. Real-time Preview with Sandpack
 * 4. Smooth Animations and Transitions
 * 5. Responsive Design for All Devices
 * 6. Dark/Light Theme Support
 * 7. Professional Color Scheme
 * 8. Clear Typography Hierarchy
 */

// ตัวอย่างการออกแบบ UI ที่ได้รับแรงบันดาลใจจาก Lovable.dev
const LovableInspiredLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Code Editor Section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                Code Editor
              </h2>
            </div>
            <div className="p-4">
              {/* Monaco Editor Component */}
            </div>
          </div>
          
          {/* Live Preview Section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                Live Preview
              </h2>
            </div>
            <div className="p-4">
              {/* Sandpack Component */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
```

### 🧩 Reusable Components & Microservice Architecture
```typescript
// ✅ ตัวอย่างที่ดี - Reusable Component Structure
/**
 * โครงสร้างการสร้าง Reusable Components:
 * 
 * 1. แยก UI Components จาก Business Logic
 * 2. ใช้ Props Interface ที่ชัดเจน
 * 3. สร้าง Default Props และ Variants
 * 4. ใช้ Composition Pattern
 * 5. สร้าง Custom Hooks สำหรับ Logic
 * 6. ใช้ Context สำหรับ Global State
 */

// ✅ ตัวอย่างที่ดี - Reusable Button Component
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  onClick,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className,
  ].filter(Boolean).join(' ');
  
  return (
    <button
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </button>
  );
};

// ✅ ตัวอย่างที่ดี - Custom Hook สำหรับ API Calls
interface UseApiOptions<T> {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
  headers?: Record<string, string>;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

const useApi = <T>(options: UseApiOptions<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.request<T>({
        url: options.url,
        method: options.method || 'GET',
        data: options.body,
        headers: options.headers,
      });
      
      setData(response.data);
      options.onSuccess?.(response.data);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      options.onError?.(error);
    } finally {
      setLoading(false);
    }
  }, [options]);
  
  return { data, loading, error, execute };
};

// ✅ ตัวอย่างที่ดี - Microservice-Ready API Structure
// api/users/types.ts
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserRequest {
  email: string;
  name: string;
  password: string;
}

export interface UpdateUserRequest {
  name?: string;
  avatar?: string;
}

// api/users/service.ts
export class UserService {
  private baseUrl: string;
  
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  
  async getUsers(): Promise<User[]> {
    const response = await axios.get<User[]>(`${this.baseUrl}/users`);
    return response.data;
  }
  
  async getUserById(id: string): Promise<User> {
    const response = await axios.get<User>(`${this.baseUrl}/users/${id}`);
    return response.data;
  }
  
  async createUser(userData: CreateUserRequest): Promise<User> {
    const response = await axios.post<User>(`${this.baseUrl}/users`, userData);
    return response.data;
  }
  
  async updateUser(id: string, userData: UpdateUserRequest): Promise<User> {
    const response = await axios.put<User>(`${this.baseUrl}/users/${id}`, userData);
    return response.data;
  }
  
  async deleteUser(id: string): Promise<void> {
    await axios.delete(`${this.baseUrl}/users/${id}`);
  }
}

// ✅ ตัวอย่างที่ดี - Dependency Injection Pattern
interface ApiClient {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, data: unknown): Promise<T>;
  put<T>(url: string, data: unknown): Promise<T>;
  delete(url: string): Promise<void>;
}

class UserRepository {
  constructor(private apiClient: ApiClient) {}
  
  async getUsers(): Promise<User[]> {
    return this.apiClient.get<User[]>('/users');
  }
  
  async createUser(userData: CreateUserRequest): Promise<User> {
    return this.apiClient.post<User>('/users', userData);
  }
}

// ✅ ตัวอย่างที่ดี - Utility Functions
// utils/validation.ts
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('รหัสผ่านต้องมีตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('รหัสผ่านต้องมีตัวพิมพ์เล็กอย่างน้อย 1 ตัว');
  }
  
  if (!/\d/.test(password)) {
    errors.push('รหัสผ่านต้องมีตัวเลขอย่างน้อย 1 ตัว');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};

// ✅ ตัวอย่างที่ดี - Configuration Management
// config/index.ts
interface AppConfig {
  api: {
    baseUrl: string;
    timeout: number;
  };
  features: {
    enableAnalytics: boolean;
    enableNotifications: boolean;
  };
  theme: {
    primaryColor: string;
    darkMode: boolean;
  };
}

const defaultConfig: AppConfig = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    timeout: 10000,
  },
  features: {
    enableAnalytics: process.env.NODE_ENV === 'production',
    enableNotifications: true,
  },
  theme: {
    primaryColor: '#3B82F6',
    darkMode: false,
  },
};

export const getConfig = (): AppConfig => {
  return {
    ...defaultConfig,
    // สามารถ override จาก environment variables หรือ external config
  };
};

// ✅ ตัวอย่างที่ดี - Composition Pattern
interface CardProps {
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, actions, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      <div className="px-6 py-4">
        {children}
      </div>
      {actions && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          {actions}
        </div>
      )}
    </div>
  );
};

// ตัวอย่างการใช้งาน Composition Pattern
const UserProfile: React.FC = () => {
  return (
    <Card
      title="ข้อมูลผู้ใช้"
      actions={
        <div className="flex gap-2">
          <Button variant="primary" size="sm">แก้ไข</Button>
          <Button variant="secondary" size="sm">ยกเลิก</Button>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">อีเมล</label>
          <p className="mt-1 text-sm text-gray-900">user@example.com</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">ชื่อ</label>
          <p className="mt-1 text-sm text-gray-900">John Doe</p>
        </div>
      </div>
    </Card>
  );
};
```

### Agent Mode Workflow
```typescript
// ✅ ตัวอย่างที่ดี - การทำงานในโหมด Agent
/**
 * ขั้นตอนการทำงานในโหมดถามหรือโหมด Agent:
 * 
 * 1. วิเคราะห์ความต้องการของผู้ใช้
 * 2. ทำสรุปความต้องการและแผนการทำงาน
 * 3. รอการยืนยันจากผู้ใช้
 * 4. เริ่มสร้างโค้ดตามแผนที่ยืนยันแล้ว
 * 5. ทดสอบและปรับปรุงโค้ด
 * 6. ส่งมอบผลลัพธ์พร้อมคำอธิบาย
 */

// ตัวอย่างการทำสรุป
const generateSummary = (userRequest: string) => {
  return {
    requirement: "ความต้องการของผู้ใช้",
    plan: [
      "ขั้นตอนที่ 1: สร้าง component หลัก",
      "ขั้นตอนที่ 2: เพิ่ม styling ด้วย Tailwind",
      "ขั้นตอนที่ 3: เพิ่ม functionality",
      "ขั้นตอนที่ 4: ทดสอบและปรับปรุง"
    ],
    alternatives: [
      "ทางเลือก A: ใช้ CSS-in-JS",
      "ทางเลือก B: ใช้ Tailwind CSS",
      "ทางเลือก C: ใช้ CSS Modules"
    ],
    expectedOutput: "ผลลัพธ์ที่คาดว่าจะได้",
    estimatedTime: "ประมาณ 10-15 นาที"
  };
};
```

### Code Structure
```typescript
// ✅ ตัวอย่างที่ดี
interface ComponentProps {
  title: string;
  description?: string;
  onAction?: () => void;
}

const Component: React.FC<ComponentProps> = ({ 
  title, 
  description, 
  onAction 
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      {description && (
        <p className="mt-2 text-gray-600">{description}</p>
      )}
      {onAction && (
        <button 
          onClick={onAction}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Action
        </button>
      )}
    </div>
  );
};

// ❌ ตัวอย่างที่ไม่ดี - ใช้ any
const BadComponent = (props: any) => {
  return <div>{props.title}</div>;
};

// ✅ ตัวอย่างที่ดี - ใช้ unknown สำหรับข้อมูลที่ไม่ทราบ type
const handleUnknownData = (data: unknown) => {
  if (typeof data === 'string') {
    return data.toUpperCase();
  }
  if (typeof data === 'number') {
    return data.toString();
  }
  return 'Unknown type';
};

// ✅ ตัวอย่างที่ดี - ใช้ generic types
interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

// ✅ ตัวอย่างที่ดี - ใช้ axios.method
const fetchUser = async (id: string): Promise<ApiResponse<User>> => {
  try {
    const response = await axios.get<ApiResponse<User>>(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้');
  }
};

const createUser = async (userData: CreateUserData): Promise<ApiResponse<User>> => {
  try {
    const response = await axios.post<ApiResponse<User>>('/api/users', userData);
    return response.data;
  } catch (error) {
    throw new Error('เกิดข้อผิดพลาดในการสร้างผู้ใช้');
  }
};

const updateUser = async (id: string, userData: UpdateUserData): Promise<ApiResponse<User>> => {
  try {
    const response = await axios.put<ApiResponse<User>>(`/api/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw new Error('เกิดข้อผิดพลาดในการอัปเดตผู้ใช้');
  }
};

const deleteUser = async (id: string): Promise<ApiResponse<void>> => {
  try {
    const response = await axios.delete<ApiResponse<void>>(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('เกิดข้อผิดพลาดในการลบผู้ใช้');
  }
};
```

### API Routes
```typescript
// ✅ ตัวอย่างที่ดี
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const RequestSchema = z.object({
  prompt: z.string().min(1),
  options: z.object({
    framework: z.enum(['next', 'react', 'vue']).default('next'),
    typescript: z.boolean().default(true),
  }).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = RequestSchema.parse(body);
    
    // Process the request
    const result = await processRequest(validatedData);
    
    return NextResponse.json({ 
      success: true, 
      data: result 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Invalid request data' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### HTTP Client Usage
```typescript
// ✅ ตัวอย่างที่ดี - ใช้ axios.method
import axios from 'axios';

// GET request
const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>('/api/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้');
  }
};

// POST request
const createUser = async (userData: CreateUserData): Promise<User> => {
  try {
    const response = await axios.post<User>('/api/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('เกิดข้อผิดพลาดในการสร้างผู้ใช้');
  }
};

// PUT request
const updateUser = async (id: string, userData: UpdateUserData): Promise<User> => {
  try {
    const response = await axios.put<User>(`/api/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw new Error('เกิดข้อผิดพลาดในการอัปเดตผู้ใช้');
  }
};

// DELETE request
const deleteUser = async (id: string): Promise<void> => {
  try {
    await axios.delete(`/api/users/${id}`);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw new Error('เกิดข้อผิดพลาดในการลบผู้ใช้');
  }
};

// ❌ ตัวอย่างที่ไม่ดี - ใช้ fetch
const badFetchUsers = async (): Promise<User[]> => {
  const response = await fetch('/api/users');
  const data = await response.json();
  return data; // ไม่มีการจัดการ error
};

// ✅ ตัวอย่างที่ดี - ใช้ axios instance
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// เพิ่ม interceptor สำหรับ error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await apiClient.get<Project[]>('/projects');
    return response.data;
  } catch (error) {
    throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูลโปรเจค');
  }
};
```

### Error Handling
```typescript
// ✅ ตัวอย่างที่ดี
const handleError = (error: unknown) => {
  if (error instanceof Error) {
    console.error('Error:', error.message);
    return { error: error.message };
  }
  
  console.error('Unknown error:', error);
  return { error: 'เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ' };
};
```

## 🎨 UI/UX Guidelines

### Color Palette
```typescript
// ใช้สีตาม brand guidelines
const colors = {
  primary: '#3B82F6',    // Blue
  secondary: '#6B7280',  // Gray
  success: '#10B981',    // Green
  warning: '#F59E0B',    // Yellow
  error: '#EF4444',      // Red
};
```

### Component Patterns
```typescript
// ✅ ตัวอย่างที่ดี - Loading State
const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    <span className="ml-3 text-gray-600">กำลังโหลด...</span>
  </div>
);

// ✅ ตัวอย่างที่ดี - Error State
const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
    <div className="flex items-center">
      <span className="text-red-500 mr-2">⚠️</span>
      <span className="text-red-700">{message}</span>
    </div>
  </div>
);

// ✅ ตัวอย่างที่ดี - Sandpack Code Preview
import { Sandpack } from '@codesandbox/sandpack-react';

interface CodePreviewProps {
  files: Record<string, string>;
  template?: 'react' | 'vanilla' | 'vue' | 'angular';
  theme?: 'dark' | 'light';
}

const CodePreview: React.FC<CodePreviewProps> = ({ 
  files, 
  template = 'react', 
  theme = 'dark' 
}) => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200">
      <Sandpack
        template={template}
        theme={theme}
        files={files}
        options={{
          showNavigator: true,
          showTabs: true,
          showLineNumbers: true,
          showInlineErrors: true,
          wrapContent: true,
        }}
      />
    </div>
  );
};

// ✅ ตัวอย่างที่ดี - Live Demo Component
const LiveDemo: React.FC<{ code: string }> = ({ code }) => {
  const files = {
    '/App.js': code,
    '/index.html': `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live Demo</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`,
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Live Demo</h3>
      <CodePreview files={files} template="react" />
    </div>
  );
};
```

### Responsive Design
```typescript
// ✅ ตัวอย่างที่ดี - Responsive Layout
const ResponsiveLayout: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="p-4 bg-white rounded-lg shadow">
      Content 1
    </div>
    <div className="p-4 bg-white rounded-lg shadow">
      Content 2
    </div>
    <div className="p-4 bg-white rounded-lg shadow">
      Content 3
    </div>
  </div>
);
```

## 🔒 Security Guidelines

### Input Validation
```typescript
// ✅ ตัวอย่างที่ดี - Sanitize Input
import DOMPurify from 'dompurify';

const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input);
};

// ✅ ตัวอย่างที่ดี - Validate File Upload
const validateFile = (file: File) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  const maxSize = 5 * 1024 * 1024; // 5MB
  
  if (!allowedTypes.includes(file.type)) {
    throw new Error('ไฟล์ไม่ถูกต้อง กรุณาเลือกไฟล์รูปภาพ');
  }
  
  if (file.size > maxSize) {
    throw new Error('ไฟล์มีขนาดใหญ่เกินไป (สูงสุด 5MB)');
  }
  
  return true;
};
```

### Authentication
```typescript
// ✅ ตัวอย่างที่ดี - Check Authentication
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function checkAuth() {
  const supabase = createServerComponentClient({ cookies });
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('กรุณาเข้าสู่ระบบก่อน');
  }
  
  return user;
}
```

## 🧪 Testing Guidelines

### Unit Tests
```typescript
// ✅ ตัวอย่างที่ดี - Component Test
import { render, screen } from '@testing-library/react';
import { Component } from './Component';

describe('Component', () => {
  it('renders title correctly', () => {
    render(<Component title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
  
  it('shows description when provided', () => {
    render(
      <Component 
        title="Test" 
        description="Test Description" 
      />
    );
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
});
```

### API Tests
```typescript
// ✅ ตัวอย่างที่ดี - API Test
import { NextRequest } from 'next/server';
import { POST } from './route';

describe('API Route', () => {
  it('returns success for valid request', async () => {
    const request = new NextRequest('http://localhost:3000/api/test', {
      method: 'POST',
      body: JSON.stringify({ prompt: 'test' }),
    });
    
    const response = await POST(request);
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
  });
});
```

## 📝 Documentation Guidelines

### Code Comments
```typescript
// ✅ ตัวอย่างที่ดี - JSDoc Comments
/**
 * สร้างเว็บไซต์จาก prompt ที่ผู้ใช้ให้
 * @param prompt - ข้อความที่อธิบายความต้องการ
 * @param options - ตัวเลือกการสร้างเว็บไซต์
 * @returns Promise ที่ resolve เป็นข้อมูลเว็บไซต์
 */
export async function generateWebsite(
  prompt: string, 
  options: GenerationOptions
): Promise<WebsiteData> {
  // Implementation
}
```

### README Files
```markdown
# Component Name

## คำอธิบาย
อธิบายว่าคอมโพเนนต์นี้ทำอะไร

## การใช้งาน
```typescript
import { Component } from './Component';

<Component 
  title="Title" 
  description="Description" 
  onAction={() => console.log('Action')} 
/>
```

## Props
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | ✅ | ชื่อเรื่อง |
| description | string | ❌ | คำอธิบาย |
| onAction | function | ❌ | ฟังก์ชันเมื่อกดปุ่ม |

## ตัวอย่าง
แสดงตัวอย่างการใช้งาน
```

## 🔄 Workflow Guidelines

### การแก้ไข Bug
1. **ระบุปัญหา**: อธิบายปัญหาที่พบ
2. **วิเคราะห์สาเหตุ**: หาสาเหตุของปัญหา
3. **แก้ไข**: แก้ไขปัญหาด้วยวิธีที่เหมาะสม
4. **ทดสอบ**: ทดสอบว่าปัญหาได้รับการแก้ไขแล้ว
5. **อธิบาย**: อธิบายการแก้ไขที่ทำ

### การเพิ่มฟีเจอร์ใหม่
1. **วิเคราะห์ความต้องการ**: เข้าใจความต้องการของผู้ใช้
2. **ออกแบบ**: ออกแบบโครงสร้างและ UI
3. **พัฒนา**: เขียนโค้ดตามการออกแบบ
4. **ทดสอบ**: ทดสอบฟีเจอร์ใหม่
5. **เอกสาร**: เขียนเอกสารสำหรับฟีเจอร์ใหม่

### การ Refactor
1. **ระบุปัญหา**: หาส่วนที่ต้องปรับปรุง
2. **วางแผน**: วางแผนการปรับปรุง
3. **ดำเนินการ**: ทำการปรับปรุงทีละขั้น
4. **ทดสอบ**: ทดสอบว่าทุกอย่างยังทำงานได้
5. **อธิบาย**: อธิบายการเปลี่ยนแปลงที่ทำ

## 🎯 Performance Guidelines

### Code Optimization
```typescript
// ✅ ตัวอย่างที่ดี - Memoization
import { useMemo } from 'react';

const ExpensiveComponent: React.FC<{ data: number[] }> = ({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => item * 2).filter(item => item > 10);
  }, [data]);
  
  return <div>{processedData.join(', ')}</div>;
};

// ✅ ตัวอย่างที่ดี - Lazy Loading
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>กำลังโหลด...</div>,
  ssr: false,
});
```

### Bundle Optimization
```typescript
// ✅ ตัวอย่างที่ดี - Tree Shaking
import { useState } from 'react'; // ✅ ดี - import เฉพาะที่ใช้
import * as React from 'react';   // ❌ ไม่ดี - import ทั้งหมด

// ✅ ตัวอย่างที่ดี - Dynamic Import
const loadComponent = async () => {
  const { default: Component } = await import('./Component');
  return Component;
};
```

## 🤝 Collaboration Guidelines

### Git Workflow
```bash
# ✅ ตัวอย่างที่ดี - Commit Messages
git commit -m "feat: เพิ่มระบบ authentication"
git commit -m "fix: แก้ไขปัญหา loading state"
git commit -m "docs: อัปเดต README"
git commit -m "refactor: ปรับปรุง component structure"
```

### Code Review
1. **ตรวจสอบความถูกต้อง**: โค้ดทำงานได้ถูกต้อง
2. **ตรวจสอบความปลอดภัย**: ไม่มีช่องโหว่ด้านความปลอดภัย
3. **ตรวจสอบประสิทธิภาพ**: โค้ดมีประสิทธิภาพดี
4. **ตรวจสอบความอ่านง่าย**: โค้ดอ่านและเข้าใจง่าย
5. **ตรวจสอบการทดสอบ**: มีการทดสอบที่ครอบคลุม

## 📊 Monitoring Guidelines

### Error Tracking
```typescript
// ✅ ตัวอย่างที่ดี - Error Boundary
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // ส่ง error ไปยัง monitoring service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <h2 className="text-red-800 font-semibold">เกิดข้อผิดพลาด</h2>
          <p className="text-red-600">กรุณาลองรีเฟรชหน้าเว็บ</p>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### Performance Monitoring
```typescript
// ✅ ตัวอย่างที่ดี - Performance Tracking
const trackPerformance = (action: string, duration: number) => {
  // ส่งข้อมูลไปยัง analytics service
  console.log(`Performance: ${action} took ${duration}ms`);
};

// ใช้ใน component
useEffect(() => {
  const startTime = performance.now();
  
  // ทำงานบางอย่าง
  
  const endTime = performance.now();
  trackPerformance('component-render', endTime - startTime);
}, []);
```

---

## 🎯 สรุป

AI Agent ควรปฏิบัติตาม rules เหล่านี้เพื่อให้การพัฒนาผ่านไปได้อย่างมีประสิทธิภาพและคุณภาพสูง เน้นการสร้างโค้ดที่ปลอดภัย มีประสิทธิภาพ และบำรุงรักษาง่าย

### 🔒 Type Safety Rules สรุป
- **ห้ามใช้ `any`**: ใช้ `unknown` สำหรับข้อมูลที่ไม่ทราบ type
- **ใช้ interface ที่ชัดเจน**: กำหนด type ให้ครบถ้วน
- **ใช้ generic types**: สำหรับ reusable components และ functions
- **ใช้ Zod validation**: ตรวจสอบข้อมูลที่รับเข้ามา
- **ใช้ type guards**: ตรวจสอบ type ก่อนใช้งาน

### 🌐 HTTP Client Rules สรุป
- **ใช้ axios.method**: ใช้ axios.get, axios.post, axios.put, axios.delete
- **ห้ามใช้ fetch**: ใช้ axios แทน fetch สำหรับ HTTP requests
- **ใช้ axios instance**: สร้าง axios instance สำหรับ configuration
- **ใช้ interceptors**: เพิ่ม interceptors สำหรับ error handling
- **ใช้ try-catch**: จัดการ error อย่างเหมาะสม

### 🎨 Code Preview Rules สรุป
- **ใช้ Sandpack**: ใช้ Sandpack สำหรับ code preview และ live demo
- **ใช้ templates ที่เหมาะสม**: react, vanilla, vue, angular ตามประเภทโค้ด
- **ใช้ theme ที่สอดคล้อง**: dark/light theme ตามการออกแบบ
- **ใช้ options ที่เหมาะสม**: showNavigator, showTabs, showLineNumbers
- **ใช้ autorun**: เปิด autorun สำหรับ live preview

### 🤖 Agent Mode Rules สรุป
- **ทำสรุปก่อน**: ทุกครั้งที่ใช้โหมดถามหรือโหมด agent ต้องทำสรุปความต้องการออกมาก่อน
- **รอการยืนยัน**: หลังจากทำสรุปแล้วต้องรอให้ผู้ใช้ยืนยันก่อนเริ่มสร้างโค้ด
- **อธิบายแผนการ**: ในสรุปต้องระบุแผนการทำงานและขั้นตอนที่จะทำ
- **เสนอทางเลือก**: หากมีหลายวิธีให้เสนอทางเลือกในสรุป
- **ระบุผลลัพธ์**: ระบุผลลัพธ์ที่คาดว่าจะได้ในสรุป

### 🎨 Lovable.dev Comparison สรุป
- **แรงบันดาลใจ**: Midori ได้รับแรงบันดาลใจจาก Lovable.dev
- **UI/UX**: ใช้ design patterns ที่คล้ายกับ Lovable.dev แต่ปรับให้เหมาะกับผู้ใช้ชาวไทย
- **Code Preview**: ใช้ Sandpack เหมือน Lovable.dev สำหรับ live preview
- **ฟีเจอร์เพิ่มเติม**: เพิ่มระบบจัดการโปรเจค การแชร์ และการทำงานร่วมกัน
- **ภาษา**: รองรับภาษาไทยและภาษาอังกฤษ
- **การปรับแต่ง**: ให้ความยืดหยุ่นในการแก้ไขและปรับแต่งโค้ดมากกว่า

### 🧩 Reusable & Microservice Architecture สรุป
- **Reusable Components**: สร้าง components ที่ใช้ซ้ำได้ในหลายที่
- **Custom Hooks**: แยก business logic ออกเป็น custom hooks
- **Service Classes**: สร้าง service classes สำหรับ API calls
- **Dependency Injection**: ลดการพึ่งพา dependencies โดยตรง
- **Utility Functions**: แยก utility functions ที่ใช้ซ้ำได้
- **Configuration Management**: แยก configuration ออกจาก business logic
- **Composition Pattern**: ใช้ composition pattern สำหรับ flexible components
- **Type Safety**: ใช้ TypeScript interfaces ที่ใช้ร่วมกันได้
