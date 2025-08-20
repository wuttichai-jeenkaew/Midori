# 🤖 AI Agent Rules สำหรับ Midori Project

## 📋 ภาพรวมโปรเจค

**Midori** เป็น AI-powered website generator ที่ใช้ Next.js และ TypeScript พัฒนาขึ้น ระบบมีตัวละคร AI ชื่อ Midori ที่ช่วยผู้ใช้สร้างเว็บไซต์จากข้อความธรรมชาติ

## 🎯 เป้าหมายหลัก

1. **สร้างเว็บไซต์จากข้อความ**: แปลงความต้องการของผู้ใช้เป็นโค้ดเว็บไซต์ที่สมบูรณ์
2. **ประสบการณ์ผู้ใช้ที่ดี**: UI/UX ที่สวยงามและใช้งานง่าย
3. **ความปลอดภัย**: ตรวจสอบโค้ดก่อนแสดงผล
4. **ประสิทธิภาพ**: ใช้ AI models ที่เหมาะสมกับงาน

## 🏗️ โครงสร้างเทคนิค

### Frontend Stack
- **Framework**: Next.js 15.4.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Editor**: Monaco Editor
- **Code Preview**: Sandpack
- **State Management**: React Hooks + Context API

### Backend Stack
- **API**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **AI Services**: OpenAI, DeepSeek

### Key Dependencies
- `@monaco-editor/react`: Code editor
- `@codesandbox/sandpack-react`: Code preview & sandbox
- `@supabase/supabase-js`: Database & Auth
- `openai`, `deepseek`: AI services
- `zod`: Schema validation
- `axios`: HTTP client

## 📁 โครงสร้างไฟล์สำคัญ

```
src/
├── app/
│   ├── api/           # API routes
│   ├── component/     # React components
│   │   ├── preview/   # Code preview components
│   │   ├── sitegen/   # Site generator
│   │   └── navbar/    # Navigation
│   ├── context/       # React contexts
│   └── page/          # Pages
├── hooks/             # Custom hooks
├── types/             # TypeScript types
└── utils/             # Utility functions
```

## 🔧 Rules สำหรับการพัฒนา

### 1. การเขียนโค้ด
- **ใช้ TypeScript**: ทุกไฟล์ต้องมี type definitions
- **ห้ามใช้ type any**: ต้องกำหนด type ที่ชัดเจนเสมอ
- **ใช้ Zod**: สำหรับ schema validation
- **ใช้ Tailwind CSS**: สำหรับ styling
- **ใช้ ESLint**: ตรวจสอบ code quality
- **ใช้ Prettier**: จัดรูปแบบโค้ด

### 2. การจัดการ State
- **ใช้ React Hooks**: useState, useEffect, useContext
- **ใช้ Context API**: สำหรับ global state
- **ใช้ Local Storage**: สำหรับ temporary data
- **ใช้ Supabase**: สำหรับ persistent data

### 3. การจัดการ API
- **ใช้ Next.js API Routes**: สำหรับ backend logic
- **ใช้ axios.method**: สำหรับ HTTP requests (axios.get, axios.post, axios.put, axios.delete)
- **ใช้ Zod**: validate request/response
- **ใช้ Error Handling**: จัดการ error อย่างเหมาะสม
- **ใช้ Rate Limiting**: ป้องกัน abuse

### 4. การจัดการ AI
- **ใช้ Multiple Models**: OpenAI, DeepSeek
- **ใช้ Token Management**: ติดตามการใช้ token
- **ใช้ Prompt Engineering**: สร้าง prompt ที่มีประสิทธิภาพ
- **ใช้ Safety Checks**: ตรวจสอบโค้ดที่สร้าง

### 5. การจัดการ UI/UX
- **ใช้ Responsive Design**: รองรับทุกขนาดหน้าจอ
- **ใช้ Dark/Light Mode**: รองรับ theme switching
- **ใช้ Loading States**: แสดงสถานะการโหลด
- **ใช้ Error Boundaries**: จัดการ error ใน UI
- **ใช้ Sandpack**: สำหรับ code preview และ live demo

### 6. การจัดการ Database
- **ใช้ Supabase**: สำหรับ database operations
- **ใช้ Row Level Security**: ป้องกันข้อมูล
- **ใช้ Real-time**: สำหรับ live updates
- **ใช้ Migrations**: จัดการ schema changes

## 🚀 การ Deploy

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

### Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_key
DEEPSEEK_API_KEY=your_deepseek_key
```

## 🔒 ความปลอดภัย

### Code Safety
- ตรวจสอบ HTML/JS ก่อนแสดงผล
- ใช้ Content Security Policy
- Sanitize user input
- Validate AI-generated code

### Authentication
- ใช้ Supabase Auth
- Implement proper session management
- Use secure cookies
- Validate user permissions

### API Security
- ใช้ rate limiting
- Validate all inputs
- Use proper CORS settings
- Log security events

## 📊 การ Monitor

### Performance
- ใช้ Next.js built-in analytics
- Monitor API response times
- Track user interactions
- Monitor AI model usage

### Errors
- ใช้ error boundaries
- Log errors to external service
- Monitor API errors
- Track user feedback

## 🧪 การ Testing

### Unit Tests
- Test utility functions
- Test API routes
- Test React components
- Test AI integrations

### Integration Tests
- Test user flows
- Test API integrations
- Test database operations
- Test AI responses

### E2E Tests
- Test complete user journeys
- Test cross-browser compatibility
- Test mobile responsiveness
- Test performance

## 📝 การ Document

### Code Documentation
- ใช้ JSDoc comments
- Document complex functions
- Explain business logic
- Document API endpoints

### User Documentation
- Create user guides
- Document features
- Provide examples
- Create troubleshooting guides

## 🔄 การ Update

### Dependencies
- ใช้ `npm audit` ตรวจสอบ vulnerabilities
- Update dependencies regularly
- Test after updates
- Document breaking changes

### Features
- Plan feature releases
- Use semantic versioning
- Create changelog
- Notify users of changes

## 🎨 Design Guidelines

### Colors
- Primary: Blue (#3B82F6)
- Secondary: Gray (#6B7280)
- Success: Green (#10B981)
- Error: Red (#EF4444)
- Warning: Yellow (#F59E0B)

### Typography
- Font: Inter (system font fallback)
- Headings: Font weight 600-700
- Body: Font weight 400
- Code: Font weight 500

### Spacing
- Use Tailwind spacing scale
- Consistent padding/margins
- Proper component spacing
- Responsive spacing

### Icons
- Use emoji for simple icons
- Use SVG for complex icons
- Consistent icon sizes
- Proper icon alignment

## 🤝 การทำงานเป็นทีม

### Code Review
- Review all changes
- Check for security issues
- Ensure code quality
- Test functionality

### Communication
- Use clear commit messages
- Document decisions
- Share knowledge
- Provide feedback

### Collaboration
- Use Git workflow
- Create feature branches
- Use pull requests
- Maintain clean history

## 📈 การ Optimize

### Performance
- Use Next.js optimizations
- Optimize images
- Minimize bundle size
- Use caching strategies

### SEO
- Use proper meta tags
- Optimize page titles
- Use semantic HTML
- Improve loading speed

### Accessibility
- Use proper ARIA labels
- Ensure keyboard navigation
- Test with screen readers
- Follow WCAG guidelines

---

## 🎯 สรุป

AI Agent ควรปฏิบัติตาม rules เหล่านี้เพื่อให้การพัฒนาผ่านไปได้อย่างมีประสิทธิภาพและคุณภาพสูง เน้นการสร้างประสบการณ์ผู้ใช้ที่ดี ความปลอดภัย และการบำรุงรักษาที่ง่าย
