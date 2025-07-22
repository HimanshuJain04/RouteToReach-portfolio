import Link from "next/link";
import React from "react";

export function Button({
  children,
  rightIcon,
  href,
}: {
  children?: string;
  rightIcon?: React.ReactNode;
  href?: string;
}) {
  const baseCss =
    "font-bold flex gap-2 shrink-0 justify-center items-center sm:text-base text-sm text-white bg-[#5454D4] rounded py-2 px-6";

  if (href) {
    return (
      <Link href={href} className={baseCss}>
        {children}
      </Link>
    );
  }
  return (
    <button className={baseCss}>
      {children}
      {rightIcon && rightIcon}
    </button>
  );
}
