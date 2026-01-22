'use client';

import { useEffect, useState } from 'react';

interface TallyFormProps {
  src: string;
  height?: string | number;
  title?: string;
}

export default function TallyForm({
  src,
  height = 800,
  title = 'Formulaire',
}: TallyFormProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!(window as any).Tally) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        (window as any).Tally?.loadEmbeds();
      };
    } else {
      (window as any).Tally.loadEmbeds();
    }
  }, []);

  return (
    <div className="relative w-full">
      {/* Loader */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-white border-t-orange" />
            <p className=" text-gray-600">Chargement du formulaire…</p>
          </div>
        </div>
      )}

      {/* Iframe */}
      <iframe
        data-tally-src={src}
        loading="lazy"
        width="100%"
        height={height}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title={title}
        onLoad={() => setIsLoading(false)}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
}
