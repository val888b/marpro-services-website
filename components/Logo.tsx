"use client";

import { useState } from "react";
import Image from "next/image";

export function Logo({
  variant = "mark",
  className = "",
}: {
  variant?: "mark" | "full";
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const src = variant === "mark" ? "/logo-mark.png" : "/logo-full.png";

  if (failed) {
    if (variant === "mark") {
      return (
        <span
          className={`flex items-center justify-center rounded-md bg-accent/15 font-bold text-accent ${className}`}
        >
          M
        </span>
      );
    }

    return (
      <span className={`font-bold tracking-tight text-white ${className}`}>
        MarPro <span className="text-accent">Services</span>
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt="MarPro Services"
      width={variant === "mark" ? 40 : 220}
      height={variant === "mark" ? 40 : 60}
      className={className}
      onError={() => setFailed(true)}
      priority
    />
  );
}
