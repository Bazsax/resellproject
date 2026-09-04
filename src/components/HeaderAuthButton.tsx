"use client";

import React from "react";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import { User } from "lucide-react";

/**
 * Header account control: user icon opens sign-in when signed out,
 * Clerk UserButton when signed in.
 */
export function HeaderAuthButton() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div
        className="w-10 h-10 rounded-lg bg-zinc-900/50 animate-pulse"
        aria-hidden
      />
    );
  }

  if (!isSignedIn) {
    return (
      <SignInButton mode="modal">
        <button
          type="button"
          className="relative p-2 rounded-lg text-white hover:text-[#ccff00] transition focus:outline-none group cursor-pointer"
          aria-label="Bejelentkezés"
        >
          <User className="w-6 h-6 stroke-[2.5] group-hover:scale-110 transition" />
        </button>
      </SignInButton>
    );
  }

  return (
    <div className="flex items-center p-1">
      <UserButton
        appearance={{
          elements: {
            avatarBox:
              "w-7 h-7 ring-2 ring-[#27272a] hover:ring-[#ccff00] transition",
            userButtonPopoverCard: "bg-[#121214] border border-[#27272a]",
            userButtonPopoverActionButton: "hover:bg-zinc-800",
            userButtonPopoverActionButtonText: "text-zinc-200",
            userButtonPopoverFooter: "hidden",
          },
        }}
      />
    </div>
  );
}

/** Optional explicit sign-up trigger (e.g. mobile menu). */
export function HeaderSignUpButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <SignUpButton mode="modal">
      <button type="button" className={className}>
        {children}
      </button>
    </SignUpButton>
  );
}
