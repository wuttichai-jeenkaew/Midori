import { RegisterForm } from '@/components/RegisterForm/RegisterForm';

export default function RegisterPage() {
	return (
		<div className="max-w-md mx-auto py-12">
			<h1 className="text-2xl font-bold mb-6 text-center text-slate-800 dark:text-slate-100">
				สมัครสมาชิก
			</h1>
			<RegisterForm />
		</div>
	);
}
