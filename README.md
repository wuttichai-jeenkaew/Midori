This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# 🌱 Midori Development

Midori คือโปรเจคที่ได้รับแรงบันดาลใจจาก [Lovable.dev](https://lovable.dev)  
เน้นการสร้างเว็บไซต์จากข้อความธรรมชาติ ด้วย AI ที่ปลอดภัยและใช้งานง่าย  
ออกแบบมาเพื่อให้ผู้ใช้ชาวไทยและนักพัฒนาสามารถสร้างและปรับแต่งเว็บไซต์ได้อย่างรวดเร็ว  
รองรับการจัดการโปรเจค, การแชร์, และการทำงานร่วมกัน

## 🎨 จุดเด่นของโปรเจค
- สร้างเว็บไซต์จากข้อความธรรมชาติ (AI-powered)
- UI/UX สวยงามและใช้งานง่าย
- รองรับภาษาไทยเต็มรูปแบบ
- ระบบจัดการโปรเจคและเวอร์ชัน
- ระบบแชร์และทำงานร่วมกัน
- ความปลอดภัยสูง ตรวจสอบโค้ดก่อนแสดงผล

## 🛠️ เทคโนโลยีที่ใช้
- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, Sandpack, Monaco Editor
- **Backend**: Next.js API Routes, AWS RDS (PostgreSQL), Prisma ORM
- **AI Services**: OpenAI, DeepSeek
- **Testing**: Jest, Testing Library
- **Validation**: Zod

## 🚀 แนวทางการพัฒนา
- เน้นโค้ดที่ปลอดภัย มี type safety (ห้ามใช้ any)
- ใช้ reusable components และ microservice-ready API
- แยก business logic ออกจาก UI
- ใช้ Zod validation และ ESLint rules
- ปรับแต่งและขยายฟีเจอร์ได้ง่าย

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
