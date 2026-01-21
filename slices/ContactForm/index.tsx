'use client';

import { FC, useState, FormEvent } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { ContactFormClient } from '@/components/ContactFormClient';

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm: FC<ContactFormProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-jaune"
    >
      <ContactFormClient />
    </section>
  );
};

export default ContactForm;
