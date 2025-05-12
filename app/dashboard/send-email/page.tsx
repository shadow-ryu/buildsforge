'use client';

import { useState } from 'react';

export default function SendEmailPage() {
  const [to, setTo] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = async () => {
    setStatus('Sending...');
    try {
      const res = await fetch('/api/send-thank-you', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to }),
      });

      const result = await res.json();
      if (result.success) {
        setStatus('✅ Email sent!');
      } else {
        setStatus(`❌ Error: ${result.error}`);
      }
    } catch (err) {
      setStatus(`❌ Exception: ${err}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow">
      <h1 className="text-xl font-semibold mb-4">Send Thank You Email</h1>
      <input
        type="email"
        placeholder="Recipient email"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        type="text"
        placeholder="Recipient name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />
      <button
        onClick={sendEmail}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send Email
      </button>
      {status && <p className="mt-3 text-sm">{status}</p>}
    </div>
  );
}
