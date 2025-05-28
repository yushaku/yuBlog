"use client";

import React, { useEffect, useState } from "react";

export default function Sse() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:8080/users/stream");

    eventSource.onmessage = (event) => {
      const parsed = event.data;
      setMessages((prev) => [...prev, parsed]);
    };

    eventSource.onerror = (err) => {
      console.error("SSE error:", err);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1 className='text-2xl font-bold'>SSE</h1>

      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  );
}
