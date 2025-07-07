'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { quotes } from "@/data/quotes";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const matched = quotes
      .filter(q => q.topic.toLowerCase() === topic.toLowerCase())
      .map(q => q.text)
      .slice(0, 3);
    setResults(matched.length ? matched : ["No quotes found for this topic."]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-8">

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-10 space-y-4 animate-fadeIn w-full max-w-md">
        <Input
          placeholder="Enter a topic (e.g. success, life, study)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button type="submit">Get Quotes</Button>
      </form>

      {/* Results */}
      <section className="mt-10 space-y-3 text-center animate-fadeIn">
        {results.map((quote, i) => (
          <p key={i} className="italic text-lg">❝ {quote} ❞</p>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-4 mt-20 text-sm opacity-80">
        © 2025 Fatima Saleem. All rights reserved.
      </footer>
    </main>
  );
}
