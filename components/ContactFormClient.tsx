'use client';

import { useState, FormEvent } from 'react';

export function ContactFormClient() {
  const [status, setStatus] = useState<'pending' | 'ok' | 'error' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setStatus('pending');
      setError(null);
      const myForm = event.currentTarget;
      const formData = new FormData(myForm);
      const params = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        if (typeof value === 'string') {
          params.append(key, value);
        } else {
          // Handle the case when value is a File object
          // For example, you can convert it to a string using File API methods
          const fileAsString = await value.text();
          params.append(key, fileAsString);
        }
      }

      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      if (res.status === 200) {
        setStatus('ok');
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e: unknown) {
      setStatus('error');
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  return (
    <div className="w-full md:max-w-md">
      <div title="Leave Feedback">
        <form
          name="feedback"
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-3 align-center"
        >
          <input
            type="hidden"
            name="form-name"
            value="feedback"
          />
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="input"
          />
          <input
            name="email"
            type="email"
            placeholder="Email (optional)"
            className="input"
          />
          <input
            name="message"
            type="text"
            placeholder="Message"
            required
            className="input"
          />
          <button
            className="btn"
            type="submit"
            disabled={status === 'pending'}
          >
            Submit
          </button>
          {status === 'ok' && <div>Submitted!</div>}
          {status === 'error' && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
}
