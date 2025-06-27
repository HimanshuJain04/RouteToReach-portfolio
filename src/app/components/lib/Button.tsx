import React from "react";

export function Button({
  children,
  rightIcon,
}: {
  children?: string;
  rightIcon?: React.ReactNode;
}) {
  return (
    <button className="font-bold flex gap-2 justify-center items-center text-xl text-white bg-[#5454D4] rounded py-3 px-6">
      {children}
      {rightIcon && rightIcon}
    </button>
  );
}
