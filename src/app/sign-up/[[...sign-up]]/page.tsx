import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 bg-[#0a0a0c]">
      <SignUp
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-[#121214] border border-[#27272a] shadow-2xl",
          },
        }}
      />
    </div>
  );
}
