'use client';

export default function Footer() {
  return (
    <footer className="bg-white bg-opacity-10 backdrop-blur-md py-4 mt-auto text-center text-white text-sm">
      © {new Date().getFullYear()} Fatima Saleem. All rights reserved.
    </footer>
  );
}
