'use client';

import { FC, useState, FormEvent } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { ContactFormClient } from '@/components/ContactFormClient';
import TallyForm from '@/components/TallyForm';

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
      <TallyForm
        src="https://tally.so/embed/5BZ45M?hideTitle=1&transparentBackground=1&dynamicHeight=1"
        height={867}
        title="Réservation la Marbrerie - traiteur"
      />

      {/* <ContactFormClient /> */}
    </section>
  );
};

export default ContactForm;
