# 📚 Development Guide: Midori AI Website Generator

## 📋 สารบัญ

1. [ภาพรวมโปรเจค](#ภาพรวมโปรเจค)
2. [การตั้งค่าโปรเจค](#การตั้งค่าโปรเจค)
3. [กฎการพัฒนา](#กฎการพัฒนา)
4. [สถาปัตยกรรมระบบ](#สถาปัตยกรรมระบบ)
5. [การเขียนโค้ด](#การเขียนโค้ด)
6. [การทดสอบ](#การทดสอบ)
7. [การ Deploy](#การ-deploy)
8. [การบำรุงรักษา](#การบำรุงรักษา)

---

## 🌟 ภาพรวมโปรเจค

**Midori** เป็น AI-powered website generator ที่ช่วยผู้ใช้สร้างเว็บไซต์จากข้อความธรรมชาติ ระบบใช้ AI ชื่อ Midori ที่จะช่วยวิเคราะห์ความต้องการและสร้างโค้ดเว็บไซต์ที่สมบูรณ์

### 🎯 เป้าหมายหลัก
- สร้างเว็บไซต์จากข้อความธรรมชาติ
- ประสบการณ์ผู้ใช้ที่ดีและใช้งานง่าย
- ความปลอดภัยและประสิทธิภาพสูง
- การเรียนรู้และพัฒนาต่อเนื่อง

### 🏗️ Tech Stack (ปัจจุบัน)
- **Frontend**: Next.js 15.4.5 + TypeScript + Tailwind CSS
- **Backend**: Next.js API Routes + Local Database
- **AI**: OpenAI + DeepSeek
- **Editor**: Monaco Editor
- **Code Preview**: Sandpack
- **Database**: Local SQLite/PostgreSQL (Development)

### 🏗️ Tech Stack (แผนในอนาคต)
- **Frontend**: Next.js 15.4.5 + TypeScript + Tailwind CSS
- **Backend**: Next.js API Routes + Supabase/AWS
- **AI**: OpenAI + DeepSeek
- **Editor**: Monaco Editor
- **Code Preview**: Sandpack
- **Database**: Supabase (PostgreSQL) / AWS RDS

---

## ⚙️ การตั้งค่าโปรเจค

### Prerequisites
```bash
# Node.js 18+ และ npm
node --version
npm --version

# Git
git --version

# Local Database (optional)
# SQLite (built-in) หรือ PostgreSQL
```

### การติดตั้ง
```bash
# Clone โปรเจค
git clone <repository-url>
cd midori-production

# ติดตั้ง dependencies
npm install

# สร้างไฟล์ .env.local
cp .env.example .env.local

# รันโปรเจค
npm run dev
```

### Environment Variables (Development)
```env
# AI Services
OPENAI_API_KEY=your_openai_key
DEEPSEEK_API_KEY=your_deepseek_key

# Local Development
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Local Database (optional)
DATABASE_URL=file:./dev.db
# หรือ
DATABASE_URL=postgresql://username:password@localhost:5432/midori_dev
```

### Environment Variables (Future Production)
```env
# Supabase (เมื่อ deploy)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# AI Services
OPENAI_API_KEY=your_openai_key
DEEPSEEK_API_KEY=your_deepseek_key

# Production
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=https://your-domain.com
```

---

## 📋 กฎการพัฒนา

### 1. การเขียนโค้ด
- ✅ ใช้ TypeScript เสมอ
- ✅ ห้ามใช้ type any (ต้องกำหนด type ที่ชัดเจน)
- ✅ ใช้ axios.method สำหรับ HTTP requests
- ✅ ใช้ Sandpack สำหรับ code preview
- ✅ ใช้ Zod สำหรับ validation
- ✅ ใช้ Tailwind CSS สำหรับ styling
- ✅ ปฏิบัติตาม ESLint rules
- ✅ เขียน JSDoc comments

### 2. การตั้งชื่อ
```typescript
// ✅ ดี - ใช้ PascalCase สำหรับ components
const UserProfile: React.FC = () => {};

// ✅ ดี - ใช้ camelCase สำหรับ functions
const getUserData = () => {};

// ✅ ดี - ใช้ UPPER_SNAKE_CASE สำหรับ constants
const API_ENDPOINTS = {
  USERS: '/api/users',
  PROJECTS: '/api/projects',
};

// ✅ ดี - ใช้ kebab-case สำหรับ files
// user-profile.tsx
// api-endpoints.ts
```

### 3. Type Safety
```typescript
// ❌ ไม่ดี - ใช้ any
const handleData = (data: any) => {
  return data.someProperty; // ไม่ปลอดภัย
};

// ✅ ดี - ใช้ unknown สำหรับข้อมูลที่ไม่ทราบ type
const handleData = (data: unknown) => {
  if (typeof data === 'object' && data !== null && 'someProperty' in data) {
    return (data as { someProperty: string }).someProperty;
  }
  return 'default';
};

// ✅ ดี - ใช้ interface ที่ชัดเจน
interface UserData {
  id: string;
  name: string;
  email: string;
}

const handleUser = (user: UserData) => {
  return user.name; // ปลอดภัยและมี autocomplete
};

// ✅ ดี - ใช้ generic types
interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

// ✅ ดี - ใช้ axios.method
const fetchData = async <T>(url: string): Promise<ApiResponse<T>> => {
  try {
    const response = await axios.get<ApiResponse<T>>(url);
    return response.data;
  } catch (error) {
    throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูล');
  }
};

const postData = async <T, D>(url: string, data: D): Promise<ApiResponse<T>> => {
  try {
    const response = await axios.post<ApiResponse<T>>(url, data);
    return response.data;
  } catch (error) {
    throw new Error('เกิดข้อผิดพลาดในการส่งข้อมูล');
  }
};
```

### 3. การจัดการ State
```typescript
// ✅ ดี - ใช้ React Hooks
const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState(false);

// ✅ ดี - ใช้ Context สำหรับ global state
const UserContext = createContext<UserContextType | undefined>(undefined);

// ✅ ดี - ใช้ custom hooks
const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  // ... logic
  return { user, setUser, loading };
};
```

### 4. การจัดการ Error
```typescript
// ✅ ดี - ใช้ try-catch
try {
  const result = await apiCall();
  return result;
} catch (error) {
  console.error('API Error:', error);
  throw new Error('เกิดข้อผิดพลาดในการเรียก API');
}

// ✅ ดี - ใช้ Error Boundaries
class ErrorBoundary extends Component<Props, State> {
  // ... implementation
}
```

---

## 🏗️ สถาปัตยกรรมระบบ

### โครงสร้างไฟล์
```
src/
├── app/
│   ├── api/                 # API routes
│   │   ├── auth/           # Authentication APIs
│   │   ├── chat_history/   # Chat history APIs
│   │   ├── deepseek/       # DeepSeek AI APIs
│   │   ├── gensite/        # Site generation APIs
│   │   ├── openai/         # OpenAI APIs
│   │   ├── projects/       # Project management APIs
│   │   ├── prompts/        # Prompt management APIs
│   │   └── versions/       # Version control APIs
│   ├── component/          # React components
│   │   ├── navbar/         # Navigation components
│   │   ├── preview/        # Code preview components
│   │   ├── promptbox/      # Prompt input components
│   │   └── sitegen/        # Site generator components
│   ├── context/            # React contexts
│   ├── page/               # Pages
│   └── layout.tsx          # Root layout
├── hooks/                  # Custom hooks
├── types/                  # TypeScript types
└── utils/                  # Utility functions
```

### Data Flow (Development)
```
User Input → AI Analysis → Code Generation → Live Preview → Local Storage
     ↓              ↓              ↓              ↓              ↓
Chat Interface → Prompt Engine → AI Services → Monaco Editor → Local DB
```

### Data Flow (Future Production)
```
User Input → AI Analysis → Code Generation → Live Preview → Cloud Database
     ↓              ↓              ↓              ↓              ↓
Chat Interface → Prompt Engine → AI Services → Monaco Editor → Supabase/AWS
```

---

## 💻 การเขียนโค้ด

### Component Structure
```typescript
// ✅ ตัวอย่างที่ดี
import React from 'react';
import { z } from 'zod';

// Types
interface ComponentProps {
  title: string;
  description?: string;
  onAction?: () => void;
  loading?: boolean;
}

// Validation schema
const ComponentPropsSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  onAction: z.function().optional(),
  loading: z.boolean().optional(),
});

// Component
const Component: React.FC<ComponentProps> = ({ 
  title, 
  description, 
  onAction, 
  loading = false 
}) => {
  // Validate props
  const validatedProps = ComponentPropsSchema.parse({ 
    title, 
    description, 
    onAction, 
    loading 
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {validatedProps.title}
      </h2>
      
      {validatedProps.description && (
        <p className="text-gray-600 mb-4">
          {validatedProps.description}
        </p>
      )}
      
      {validatedProps.onAction && (
        <button
          onClick={validatedProps.onAction}
          disabled={validatedProps.loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {validatedProps.loading ? 'กำลังโหลด...' : 'ดำเนินการ'}
        </button>
      )}
    </div>
  );
};

export default Component;
```

### Sandpack Code Preview Component
```typescript
// ✅ ตัวอย่างที่ดี - Sandpack Integration
import { Sandpack } from '@codesandbox/sandpack-react';
import { z } from 'zod';

// Types
interface CodePreviewProps {
  files: Record<string, string>;
  template?: 'react' | 'vanilla' | 'vue' | 'angular';
  theme?: 'dark' | 'light';
  showNavigator?: boolean;
  showTabs?: boolean;
}

// Validation schema
const CodePreviewSchema = z.object({
  files: z.record(z.string()),
  template: z.enum(['react', 'vanilla', 'vue', 'angular']).default('react'),
  theme: z.enum(['dark', 'light']).default('dark'),
  showNavigator: z.boolean().default(true),
  showTabs: z.boolean().default(true),
});

// Component
const CodePreview: React.FC<CodePreviewProps> = ({ 
  files, 
  template = 'react', 
  theme = 'dark',
  showNavigator = true,
  showTabs = true
}) => {
  // Validate props
  const validatedProps = CodePreviewSchema.parse({ 
    files, 
    template, 
    theme, 
    showNavigator, 
    showTabs 
  });

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg">
      <Sandpack
        template={validatedProps.template}
        theme={validatedProps.theme}
        files={validatedProps.files}
        options={{
          showNavigator: validatedProps.showNavigator,
          showTabs: validatedProps.showTabs,
          showLineNumbers: true,
          showInlineErrors: true,
          wrapContent: true,
          editorHeight: 400,
          autorun: true,
        }}
      />
    </div>
  );
};

// ✅ ตัวอย่างที่ดี - Website Preview Component
interface WebsitePreviewProps {
  html: string;
  css?: string;
  js?: string;
}

const WebsitePreview: React.FC<WebsitePreviewProps> = ({ html, css, js }) => {
  const files = {
    '/index.html': html,
    ...(css && { '/styles.css': css }),
    ...(js && { '/script.js': js }),
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Live Preview</h3>
      <CodePreview 
        files={files} 
        template="vanilla" 
        theme="light"
        showNavigator={false}
      />
    </div>
  );
};

// ✅ ตัวอย่างที่ดี - React Component Preview
interface ReactPreviewProps {
  componentCode: string;
  dependencies?: Record<string, string>;
}

const ReactPreview: React.FC<ReactPreviewProps> = ({ 
  componentCode, 
  dependencies = {} 
}) => {
  const files = {
    '/App.js': componentCode,
    '/package.json': JSON.stringify({
      dependencies: {
        react: '^18.0.0',
        'react-dom': '^18.0.0',
        ...dependencies,
      },
    }, null, 2),
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">React Component Demo</h3>
      <CodePreview 
        files={files} 
        template="react" 
        theme="dark"
      />
    </div>
  );
};
```

### API Route Structure
```typescript
// ✅ ตัวอย่างที่ดี
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// Request schema
const RequestSchema = z.object({
  prompt: z.string().min(1, 'Prompt is required'),
  options: z.object({
    framework: z.enum(['next', 'react', 'vue']).default('next'),
    typescript: z.boolean().default(true),
    styling: z.enum(['tailwind', 'css']).default('tailwind'),
  }).optional(),
});

// Response schema
const ResponseSchema = z.object({
  success: z.boolean(),
  data: z.unknown().optional(), // ใช้ unknown แทน any
  error: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Check authentication (local development)
    // ในอนาคตจะใช้ Supabase หรือ AWS Cognito
    const authToken = request.headers.get('authorization');
    if (!authToken) {
      return NextResponse.json(
        { success: false, error: 'กรุณาเข้าสู่ระบบก่อน' },
        { status: 401 }
      );
    }

    // Parse and validate request
    const body = await request.json();
    const validatedData = RequestSchema.parse(body);

    // Process request
    const result = await processRequest(validatedData);

    // Validate response
    const response = ResponseSchema.parse({
      success: true,
      data: result,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error('API Error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'ข้อมูลไม่ถูกต้อง: ' + error.errors[0].message 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์' },
      { status: 500 }
    );
  }
}
```

### Custom Hook Structure
```typescript
// ✅ ตัวอย่างที่ดี
import { useState, useEffect, useCallback } from 'react';
import { z } from 'zod';

// Types
interface UseApiOptions<T> {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown; // ใช้ unknown แทน any
  schema?: z.ZodSchema<T>;
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
}

interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  execute: () => Promise<void>;
  reset: () => void;
}

// Custom hook
export function useApi<T>(options: UseApiOptions<T>): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // ใช้ axios.method แทน fetch
      let response;
      switch (options.method) {
        case 'POST':
          response = await axios.post(options.url, options.body);
          break;
        case 'PUT':
          response = await axios.put(options.url, options.body);
          break;
        case 'DELETE':
          response = await axios.delete(options.url);
          break;
        default:
          response = await axios.get(options.url);
      }

      const result = response.data;

      // Validate response with schema if provided
      const validatedData = options.schema 
        ? options.schema.parse(result.data)
        : result.data;

      setData(validatedData);
      options.onSuccess?.(validatedData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'เกิดข้อผิดพลาด';
      setError(errorMessage);
      options.onError?.(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [options]);

  const reset = useCallback(() => {
    setData(null);
    setLoading(false);
    setError(null);
  }, []);

  return { data, loading, error, execute, reset };
}
```

---

## 🧪 การทดสอบ

### Unit Tests
```typescript
// ✅ ตัวอย่างที่ดี
import { render, screen, fireEvent } from '@testing-library/react';
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

  it('calls onAction when button is clicked', () => {
    const mockOnAction = jest.fn();
    render(
      <Component 
        title="Test" 
        onAction={mockOnAction} 
      />
    );
    
    fireEvent.click(screen.getByText('ดำเนินการ'));
    expect(mockOnAction).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(
      <Component 
        title="Test" 
        onAction={() => {}} 
        loading={true} 
      />
    );
    
    expect(screen.getByText('กำลังโหลด...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### API Tests
```typescript
// ✅ ตัวอย่างที่ดี
import { NextRequest } from 'next/server';
import { POST } from './route';

describe('API Route', () => {
  it('returns success for valid request', async () => {
    const request = new NextRequest('http://localhost:3000/api/test', {
      method: 'POST',
      body: JSON.stringify({ 
        prompt: 'Create a simple website' 
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
  });

  it('returns error for invalid request', async () => {
    const request = new NextRequest('http://localhost:3000/api/test', {
      method: 'POST',
      body: JSON.stringify({ 
        prompt: '' // Empty prompt should fail
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.error).toContain('Prompt is required');
  });
});
```

---

## 🚀 การ Deploy

### Development (ปัจจุบัน)
```bash
# รันในโหมด development
npm run dev

# รันในโหมด production locally
npm run build
npm start

# ทดสอบใน local environment
npm run test
npm run lint
```

### Local Production Testing
```bash
# Build สำหรับ production
npm run build

# รัน production build ใน local
npm start

# ตรวจสอบ performance
npm run analyze
```

### Future Production Deployment (แผนในอนาคต)
```bash
# Build สำหรับ production
npm run build

# Deploy ไปยัง Vercel
vercel --prod

# หรือ deploy ไปยัง platform อื่น
npm run deploy
```

### Environment Setup

#### Development Environment (ปัจจุบัน)
```bash
# Development environment variables
OPENAI_API_KEY=your_openai_key
DEEPSEEK_API_KEY=your_deepseek_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=file:./dev.db
```

#### Future Production Environment (แผนในอนาคต)
```bash
# Production environment variables
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
OPENAI_API_KEY=your_openai_key
DEEPSEEK_API_KEY=your_deepseek_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=https://your-domain.com
```

---

## 🔧 การบำรุงรักษา

### การ Update Dependencies
```bash
# ตรวจสอบ dependencies ที่ล้าสมัย
npm outdated

# Update dependencies
npm update

# Update major versions (ระวัง breaking changes)
npx npm-check-updates -u
npm install

# ตรวจสอบ vulnerabilities
npm audit
npm audit fix
```

### การ Monitor Performance (Development)
```typescript
// ✅ ตัวอย่างที่ดี - Performance monitoring
const trackPerformance = (action: string, duration: number) => {
  // ส่งข้อมูลไปยัง console ใน development
  console.log(`Performance: ${action} took ${duration}ms`);
  
  // หรือเก็บใน local storage สำหรับ analysis
  const performanceData = JSON.parse(localStorage.getItem('performance') || '[]');
  performanceData.push({ action, duration, timestamp: Date.now() });
  localStorage.setItem('performance', JSON.stringify(performanceData));
};

// ใช้ใน component
useEffect(() => {
  const startTime = performance.now();
  
  // ทำงานบางอย่าง
  
  const endTime = performance.now();
  trackPerformance('component-render', endTime - startTime);
}, []);
```

### การ Backup และ Recovery (Development)
```bash
# Backup local database
cp dev.db dev.db.backup

# Backup files
tar -czf backup.tar.gz src/ public/ package.json

# Restore from backup
cp dev.db.backup dev.db
```

### การ Monitor Performance (Future Production)
```typescript
// ✅ ตัวอย่างที่ดี - Production Performance monitoring
const trackPerformance = (action: string, duration: number) => {
  // ส่งข้อมูลไปยัง analytics service
  fetch('/api/analytics/performance', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action, duration, timestamp: Date.now() }),
  });
};
```

---

## 💰 Cost Management Strategy

### Development Phase (ปัจจุบัน)
- **Local Development**: ใช้ทรัพยากร local เพื่อประหยัดค่าใช้จ่าย
- **Free Tier Services**: ใช้บริการฟรีของ AI providers
- **Open Source Tools**: ใช้เครื่องมือ open source
- **Minimal Infrastructure**: โครงสร้างพื้นฐานน้อยที่สุด

### Production Phase (แผนในอนาคต)
- **Gradual Scaling**: ขยายระบบทีละขั้นตามความต้องการ
- **Cost Monitoring**: ติดตามค่าใช้จ่ายอย่างใกล้ชิด
- **Resource Optimization**: ปรับแต่งการใช้ทรัพยากรให้เหมาะสม
- **Revenue Generation**: สร้างรายได้เพื่อรองรับค่าใช้จ่าย

---

## 📚 เอกสารเพิ่มเติม

### ไฟล์ที่เกี่ยวข้อง
- [AGENT_RULES.md](./AGENT_RULES.md) - Rules สำหรับ AI agent
- [AI_AGENT_RULES.md](./AI_AGENT_RULES.md) - Rules เฉพาะสำหรับ AI development
- [PROJECT_BACKGROUND.md](./PROJECT_BACKGROUND.md) - ข้อมูลเบื้องหลังโปรเจค
- [README.md](./README.md) - เอกสารหลักของโปรเจค

### External Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Zod Documentation](https://zod.dev/)

---

## 🎯 สรุป

Development Guide นี้เป็นคู่มือสำหรับการพัฒนาโปรเจค Midori ให้ปฏิบัติตาม rules และ guidelines ที่กำหนดไว้เพื่อให้ได้ผลลัพธ์ที่มีคุณภาพสูง ปลอดภัย และบำรุงรักษาง่าย

**ปัจจุบัน** ระบบอยู่ในขั้นตอนการพัฒนาบน local environment เพื่อประหยัดค่าใช้จ่ายและทดสอบฟีเจอร์ต่างๆ ให้สมบูรณ์

**แผนในอนาคต** เมื่อระบบพร้อมและมีงบประมาณ จะ deploy ไปยัง production environment พร้อมกับระบบฐานข้อมูลและโครงสร้างพื้นฐานที่เหมาะสม

หากมีคำถามหรือต้องการความช่วยเหลือเพิ่มเติม กรุณาติดต่อทีมพัฒนา
