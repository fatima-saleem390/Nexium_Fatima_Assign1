'use client'

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
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Enter a topic (e.g. success, life, study)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <Button type="submit">Get Quotes</Button>
        </form>

        <div className="space-y-3">
          {results.map((quote, i) => (
            <p key={i} className="text-muted-foreground">❝ {quote} ❞</p>
          ))}
        </div>
      </div>
    </main>
  );
}
