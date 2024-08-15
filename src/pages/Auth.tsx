import { SignIn } from "@clerk/clerk-react";

export default function LoginPage() {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-gradient-to-r from-[#00008B] to-[#000027] bg-cover bg-no-repeat">
      <SignIn />
    </div>
  );
}
