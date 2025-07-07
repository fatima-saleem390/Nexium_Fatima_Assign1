'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="w-full bg-amber-300 hover:bg-amber-400 text-amber-900 font-semibold py-3 rounded-lg transition"
    >
      {children}
    </button>
  );
}
