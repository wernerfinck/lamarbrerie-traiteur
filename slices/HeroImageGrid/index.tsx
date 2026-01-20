import { FC } from 'react';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

/**
 * Props for `HeroImageGrid`.
 */
export type HeroImageGridProps =
  SliceComponentProps<Content.HeroImageGridSlice>;

/**
 * Component for "HeroImageGrid" Slices.
 */
const HeroImageGrid: FC<HeroImageGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={
        slice.primary.background_color
          ? `bg-${slice.primary.background_color}`
          : "" + ""
      }
    >
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto container px-4 sm:static">
          <div className="sm:max-w-lg">
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading1: ({ children }) => (
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    {children}
                  </h1>
                ),
                label: ({ node, children }) => {
                  if (node.data.label === 'color') {
                    return <span className="text-orange">{children}</span>;
                  }
                },
              }}
            />
            <PrismicRichText
              field={slice.primary.description}
              components={{
                paragraph: ({ children }) => (
                  <p className="mt-4 text-xl text-gray-800">{children}</p>
                ),
              }}
            />
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:container"
              >
                <div className="absolute transform sm:left-1/2 sm:top-18 sm:translate-x-8 lg:left-1/2 lg:top-[52%] lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <PrismicNextImage
                          field={slice?.primary?.images[0]?.image}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg opacity-0 sm:opacity-100">
                        <PrismicNextImage
                          field={slice?.primary?.images[1]?.image}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <PrismicNextImage
                          field={slice?.primary?.images[2]?.image}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg ">
                        <PrismicNextImage
                          field={slice?.primary?.images[3]?.image}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg opacity-0 sm:opacity-100">
                        <PrismicNextImage
                          field={slice?.primary?.images[4]?.image}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg ">
                        <PrismicNextImage
                          field={slice?.primary?.images[5]?.image}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg opacity-0 sm:opacity-100">
                        <PrismicNextImage
                          field={slice?.primary?.images[6]?.image}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <PrismicNextLink className='orange-btn' field={slice.primary.cta} />   
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImageGrid;
