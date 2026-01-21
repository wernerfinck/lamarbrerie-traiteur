'use client';

import { FormEvent, useState } from 'react';

export default function ContactFormClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <p className="text-green-700 font-semibold text-lg">
          Merci 🙌 Votre message a bien été envoyé.
        </p>
      </div>
    );
  }

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
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            {/* Prénom / Nom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Prénom
                </label>
                <input
                  name="firstName"
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <input
                  name="lastName"
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>

            {/* Entreprise */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Entreprise
              </label>
              <input
                name="company"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>

            {/* Téléphone / Nb personnes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input
                  name="phone"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre de personnes
                </label>
                <input
                  type="number"
                  name="numberOfPeople"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message (500 caractères max)
              </label>
              <textarea
                name="message"
                maxLength={500}
                rows={5}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>

            {/* Bouton */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-white font-semibold shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
