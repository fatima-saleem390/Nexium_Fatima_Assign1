'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="w-full px-4 py-3 border rounded-lg border-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
    />
  );
}
