'use client'

import { FC, useState, FormEvent } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm: FC<ContactFormProps> = ({ slice }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      alert("Une erreur est survenue.");
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto p-6 bg-green-100 rounded-lg shadow-md text-center">
        <p className="text-green-700 font-bold text-lg">
          Merci ! Votre message a bien été envoyé.
        </p>
      </div>
    );
  }

  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className="max-w-md mx-auto p-6 bg-yellow-400 rounded-lg shadow-md">
        {/* On utilise onSubmit={handleSubmit} pour gérer l'envoi en JS */}
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          
          {/* Champ caché indispensable */}
          <input type="hidden" name="form-name" value="contact" />
          
          {/* Honeypot anti-spam */}
          <p className="hidden">
            <label>Ne pas remplir: <input name="bot-field" /></label>
          </p>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Prénom</label>
              <input type="text" name="firstName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Nom</label>
              <input type="text" name="lastName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>

          {/* ... Gardez vos autres champs ici ... */}

          <div className="flex justify-end mt-4">
            <button type="submit" className="px-4 py-2 bg-red-600 text-white font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;