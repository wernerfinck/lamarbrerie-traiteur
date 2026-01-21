'use client';

export default function ContactFormClient() {
  return (
    <section className="bg-jaune py-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Carte */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Contactez-nous
          </h2>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input
              type="hidden"
              name="form-name"
              value="contact"
            />
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
            <textarea
              name="message"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
            <button
              className="orange-btn"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
