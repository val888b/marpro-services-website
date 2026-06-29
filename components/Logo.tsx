"use client";

import { useState } from "react";
import Image from "next/image";

const dimensions = {
  mark: { src: "/logo-mark.png", width: 972, height: 704 },
  full: { src: "/logo-full.png", width: 1534, height: 936 },
};

const cardClasses = {
  mark: "rounded-xl border border-accent/25 bg-gradient-to-br from-navy to-charcoal p-1.5 shadow-glow",
  full: "rounded-2xl bg-white/95 p-2.5 shadow-glow ring-1 ring-white/40 backdrop-blur-sm sm:p-3",
};

export function Logo({
  variant = "mark",
  className = "",
}: {
  variant?: "mark" | "full";
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const { src, width, height } = dimensions[variant];

  if (failed) {
    if (variant === "mark") {
      return (
        <span
          className={`flex items-center justify-center rounded-xl border border-accent/25 bg-gradient-to-br from-navy to-charcoal font-bold text-accent ${className}`}
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
    <span
      className={`inline-flex items-center justify-center overflow-hidden ${cardClasses[variant]} ${className}`}
    >
      <Image
        src={src}
        alt="MarPro Services"
        width={width}
        height={height}
        className="h-full w-auto object-contain"
        onError={() => setFailed(true)}
        priority
      />
    </span>
  );
}
