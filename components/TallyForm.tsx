'use client';

import { useEffect } from 'react';

interface TallyFormProps {
  src: string; // lien du formulaire Tally
  height?: string | number;
  title?: string;
}

export default function TallyForm({
  src,
  height = 800,
  title = 'Formulaire',
}: TallyFormProps) {
  useEffect(() => {
    // Vérifie que le script n'est pas déjà chargé
    if (!(window as any).Tally) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if ((window as any).Tally) {
          (window as any).Tally.loadEmbeds();
        }
      };
    } else {
      // Si déjà chargé, juste charger les embeds
      (window as any).Tally.loadEmbeds();
    }
  }, []);

  return (
    <iframe
      data-tally-src={src}
      loading="lazy"
      width="100%"
      height={height}
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title={title}
    />
  );
}
