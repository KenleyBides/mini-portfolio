"use client"; // react state

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // confirmation
    alert(`Form Submitted!\n\nName: ${fullName}\nContact: ${contactNumber}\nMessage: ${message}`);

    // back to about page
    router.push("/about");
  };

  return (
    <main className="container mx-auto p-8 max-w-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Contact Number</label>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gray-500 px-6 py-2 rounded hover:bg-gray-400 transition w-full"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
