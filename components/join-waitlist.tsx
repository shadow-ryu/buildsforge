"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function JoinWaitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with backend integration
    setSubmitted(true);
  };

  return (
    <section className="my-12 flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-2 text-center">Join the Waitlist</h3>
      <p className="mb-4 text-muted-foreground text-center max-w-md">
        Be the first to know when BuildsForge launches. Get early access, updates, and exclusive perks.
      </p>
      {submitted ? (
        <div className="text-green-600 font-medium">Thank you! You’re on the waitlist.</div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="flex-1 rounded-md border px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button type="submit" size="lg" className="px-6">Join</Button>
        </form>
      )}
    </section>
  );
}
