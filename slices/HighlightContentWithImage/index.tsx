import { FC } from 'react';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

/**
 * Props for `HighlightContentWithImage`.
 */
export type HighlightContentWithImageProps =
  SliceComponentProps<Content.HighlightContentWithImageSlice>;

/**
 * Component for "HighlightContentWithImage" Slices.
 */
const HighlightContentWithImage: FC<HighlightContentWithImageProps> = ({
  slice,
}) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={
        slice.primary.background_color
          ? `bg-${slice.primary.background_color}`
          : 'bg-bleu'
      }
    >
      <div className="overflow-hidden">
        <div className="container mx-auto py-24 md:py-32 px-4">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Colonne texte */}
            <div
              className={`lg:pr-8 lg:pt-4 items-center self-center ${
                slice.variation === 'contentRightImageLeft'
                  ? 'lg:order-2 mx-auto'
                  : 'lg:order-1'
              }`}
            >
              <div className="lg:max-w-lg">
                <PrismicNextImage
                  fallbackAlt=""
                  className="hidden lg:block rounded-md bg-orange p-2 mb-8"
                  width={50}
                  height={50}
                  field={slice.primary.icon}
                />
                <div className="heading">
                  <PrismicRichText
                    field={slice.primary.title}
                    components={{
                      heading2: ({ children }) => (
                        <h2 className="lg:text-start">{children}</h2>
                      ),
                    }}
                  />
                </div>

                <dl className="mt-8 max-w-xl space-y-8 text-lg text-gray-800 lg:max-w-none">
                  <PrismicRichText field={slice.primary.description} />
                </dl>
              </div>
            </div>

            {/* Colonne image */}
            <div
              className={`${
                slice.variation === 'contentRightImageLeft'
                  ? 'lg:order-1'
                  : 'lg:order-2'
              }`}
            >
              <div className="px-4 lg:px-0">
                <PrismicNextImage
                  field={slice.primary.main_image}
                  fallbackAlt=""
                  className="w-full h-auto max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover max-h-[36rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightContentWithImage;
