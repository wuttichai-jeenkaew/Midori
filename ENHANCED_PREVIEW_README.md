# 🚀 Enhanced Preview & Code Quality System

ระบบใหม่ที่ปรับปรุงการ Preview และ Code Quality ในโปรเจค Midori

## 📋 สิ่งที่เพิ่มเข้ามาใหม่

### 1. **Enhanced Preview Component** (`EnhancedPreview.tsx`)
- ใช้ **Sandpack** แทนการแปลง JSX เป็น HTML แบบง่ายๆ
- รองรับ React, TypeScript, และ dependencies จริง
- แสดงผลแบบ Live Preview ที่สมบูรณ์
- รองรับ Device Preview (Desktop, Tablet, Mobile)

### 2. **Code Formatter** (`code-formatter.ts`)
- จัดรูปแบบโค้ดอัตโนมัติ
- รองรับ TypeScript, JavaScript, CSS, HTML, JSON
- แก้ไข indentation, spacing, quotes อัตโนมัติ
- แก้ไข common issues เช่น any type, missing imports

### 3. **Code Quality Validator** (`code-validator.ts`)
- ตรวจสอบคุณภาพโค้ดอัตโนมัติ
- ตรวจสอบ TypeScript errors
- ตรวจสอบ React best practices
- ตรวจสอบ Accessibility
- ตรวจสอบ Performance
- คำนวณ Quality Score

### 4. **Quality Report Component** (`QualityReport.tsx`)
- แสดงผลคุณภาพโค้ดแบบ Visual
- แสดง Issues แยกตามประเภท (Error, Warning, Info)
- แสดง Recommendations
- Auto-fix functionality

### 5. **Enhanced File Generator** (`enhanced-file-generator.ts`)
- รวม Code Formatter และ Quality Validator
- Progressive file generation
- Error handling ที่ดี
- Fallback files เมื่อ generation ล้มเหลว

## 🎯 วิธีใช้งาน

### 1. **ใช้ Enhanced Preview**
```typescript
import EnhancedPreview from '@/app/component/preview/EnhancedPreview';

// แทนที่ WebsitePreview เดิม
<EnhancedPreview 
  files={generatedFiles} 
  projectStructure={projectStructure} 
/>
```

### 2. **ใช้ Code Formatter**
```typescript
import { CodeFormatter } from '@/utils/code-formatter';

// จัดรูปแบบไฟล์เดียว
const formattedFile = await CodeFormatter.formatCode(file);

// จัดรูปแบบไฟล์ทั้งหมด
const formattedFiles = await CodeFormatter.formatAllFiles(files);
```

### 3. **ใช้ Code Validator**
```typescript
import { CodeValidator } from '@/utils/code-validator';

// ตรวจสอบคุณภาพ
const quality = CodeValidator.validateCodeQuality(files);

// แก้ไข issues อัตโนมัติ
const fixedFiles = CodeValidator.autoFixIssues(files);
```

### 4. **ใช้ Quality Report**
```typescript
import QualityReport from '@/app/component/preview/QualityReport';

<QualityReport 
  score={quality.score} 
  issues={quality.issues}
  onFixIssues={() => {
    // Auto-fix functionality
  }}
/>
```

### 5. **ใช้ Enhanced File Generator**
```typescript
import { EnhancedFileGenerator } from '@/utils/site-generator/enhanced-file-generator';

// สร้างไฟล์พร้อม quality check
const result = await EnhancedFileGenerator.generateHighQualityFiles(
  finalJson, 
  projectStructure, 
  options
);

// สร้างไฟล์แบบ progressive
const files = await EnhancedFileGenerator.generateProgressiveFiles(
  finalJson, 
  projectStructure, 
  options,
  (progress, currentFile) => {
    console.log(`Progress: ${progress}% - ${currentFile}`);
  }
);
```

## 🔧 การติดตั้ง Dependencies

เพิ่ม dependencies ต่อไปนี้ใน `package.json`:

```json
{
  "dependencies": {
    "@codesandbox/sandpack-react": "^2.20.0"
  }
}
```

## 📊 Quality Score System

### **Score Calculation:**
- **100 points** เริ่มต้น
- **-10 points** ต่อ Error
- **-2 points** ต่อ Warning
- **-0 points** ต่อ Info

### **Score Levels:**
- **90-100**: Excellent (🟢)
- **70-89**: Good (🟡)
- **50-69**: Fair (🟡)
- **0-49**: Poor (🔴)

## 🎨 Features ที่เพิ่มเข้ามา

### **Enhanced Preview:**
- ✅ Live React Preview
- ✅ TypeScript Support
- ✅ Dependencies Management
- ✅ Device Preview
- ✅ Error Handling
- ✅ Loading States

### **Code Quality:**
- ✅ TypeScript Validation
- ✅ React Best Practices
- ✅ Accessibility Checks
- ✅ Performance Analysis
- ✅ Auto-fix Issues
- ✅ Quality Scoring

### **Code Formatting:**
- ✅ Indentation Fix
- ✅ Semicolon Management
- ✅ Quote Standardization
- ✅ Spacing Optimization
- ✅ Line Break Management

## 🚀 Benefits

### **สำหรับ Developer:**
1. **Preview ที่สมบูรณ์** - เห็นผลลัพธ์จริงของ React code
2. **Code Quality** - โค้ดที่มีคุณภาพสูง
3. **Auto-fix** - แก้ไข issues อัตโนมัติ
4. **Error Prevention** - ป้องกัน errors ก่อน runtime

### **สำหรับ User:**
1. **Better UX** - Preview ที่ทำงานได้จริง
2. **Quality Assurance** - โค้ดที่มีคุณภาพ
3. **Faster Development** - ลดเวลาในการ debug
4. **Professional Output** - ผลลัพธ์ที่ดูเป็นมืออาชีพ

## 🔄 Migration Guide

### **จาก WebsitePreview ไป EnhancedPreview:**

1. **เปลี่ยน Import:**
```typescript
// เดิม
import WebsitePreview from './WebsitePreview';

// ใหม่
import EnhancedPreview from './EnhancedPreview';
```

2. **เปลี่ยน Component:**
```typescript
// เดิม
<WebsitePreview files={files} projectStructure={projectStructure} />

// ใหม่
<EnhancedPreview files={files} projectStructure={projectStructure} />
```

3. **เพิ่ม Quality Tab:**
```typescript
// เพิ่ม quality tab ใน AdvancedPreview
{ id: 'quality' as const, label: '📊 Quality Report', icon: '🔍' }
```

## 🐛 Troubleshooting

### **ปัญหา: Sandpack ไม่โหลด**
**แก้ไข:** ตรวจสอบว่าได้ติดตั้ง `@codesandbox/sandpack-react` แล้ว

### **ปัญหา: Code Formatting ไม่ทำงาน**
**แก้ไข:** ตรวจสอบว่าไฟล์มี content และ language type ที่ถูกต้อง

### **ปัญหา: Quality Score ต่ำ**
**แก้ไข:** ใช้ Auto-fix functionality หรือแก้ไข issues ที่แสดงในรายงาน

## 📈 Roadmap

### **Phase 1 (เสร็จแล้ว):**
- ✅ Enhanced Preview
- ✅ Code Formatter
- ✅ Quality Validator
- ✅ Quality Report

### **Phase 2 (กำลังพัฒนา):**
- 🔄 Auto-fix functionality
- 🔄 Performance optimization
- 🔄 Advanced error handling

### **Phase 3 (แผน):**
- 📋 Real-time collaboration
- 📋 Advanced code analysis
- 📋 Custom quality rules

## 🤝 Contributing

หากต้องการเพิ่ม features หรือแก้ไข bugs:

1. สร้าง branch ใหม่
2. เพิ่ม feature หรือแก้ไข bug
3. ทดสอบให้แน่ใจว่าไม่มี breaking changes
4. สร้าง Pull Request

## 📞 Support

หากมีปัญหาหรือคำถาม:
- สร้าง Issue ใน GitHub
- ติดต่อทีมพัฒนา
- ดู Documentation เพิ่มเติม
