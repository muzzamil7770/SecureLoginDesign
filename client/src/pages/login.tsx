import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 p-4">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md mx-auto perspective-1000">
        <div className="animate-float">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}