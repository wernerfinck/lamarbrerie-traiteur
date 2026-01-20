import { Simplify, FooterDocumentData } from '@/prismicio-types';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

export default function Footer({
  footerData,
}: {
  footerData: Simplify<FooterDocumentData>;
}) {
  const now = new Date();
  return (
    <footer className="bg-violet">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-semibold text-white uppercase">
                  Traiteur
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4 list-none"
                >
                  {footerData.traiteur_link.map((link) => (
                    <li key={link.key}>
                      <PrismicNextLink
                        field={link}
                        className="text-white hover:text-orange"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-semibold text-white uppercase">
                  Le groupe
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4 list-none"
                >
                  {footerData.marbrerie_link.map((link) => (
                    <li key={link.key}>
                      <PrismicNextLink
                        field={link}
                        className="text-white hover:text-orange"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold uppercase text-white">
                Nous suivre
              </h3>
              <ul
                role="list"
                className="mt-6 space-y-4 list-none"
              >
                {footerData.social_media.map((item, i) => (
                  <li key={i} className='flex space-x-2'>
                    <PrismicNextImage
                      className="h-6 w-6"
                      field={item.icon}
                    />
                    <PrismicNextLink className='text-white hover:text-orange' field={item.link} />
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-10 md:mt-0">
                <h3 className="font-semibold text-white">Legal</h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                >
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-white hover:text-orange "
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>*/}
          </div>
          <div className="mt-10 xl:mt-0">
            {/* <h3 className="font-semibold text-white">
              Subscribe to our newsletter
            </h3> */}
            <div className="mb-4 text-white">
              <PrismicRichText field={footerData.text} />
            </div>
            <PrismicNextLink
              className="orange-btn"
              field={footerData.button}
            />
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex gap-x-6 md:order-2"></div>
          <p className="mt-8 text-white md:order-1 md:mt-0 ">
            &copy; {now.getFullYear()} La Marbrerie - traiteur, site réalisé par
            Corentin.
          </p>
        </div>
      </div>
    </footer>
  );
}
