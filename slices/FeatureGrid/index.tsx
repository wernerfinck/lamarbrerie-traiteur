import { FC } from 'react';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import Link from 'next/link';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

/**
 * Props for `FeatureGrid`.
 */
export type FeatureGridProps = SliceComponentProps<Content.FeatureGridSlice>;

/**
 * Component for "FeatureGrid" Slices.
 */
const FeatureGrid: FC<FeatureGridProps> = ({ slice }) => {
  console.log(slice.primary.background_color);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={
        slice.primary.background_color
          ? `bg-${slice.primary.background_color}`
          : 'bg-jaune'
      }
    >
      <div className="container mx-auto py-24 md:py-32 px-4">
        <div className="heading space-y-4">
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.description} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 pt-12">
          {slice.primary.features.map((item) => (
            <PrismicNextLink
              key={item.title}
              field={item.link}
            >
              <div className="w-64 sm:w-72 md:w-60 lg:w-64 relative mt-4 h-96 group mx-auto bg-white  overflow-hidden rounded-md text-black ">
                <figure className="w-full h-full rounded-md relative overflow-hidden">
                  <PrismicNextImage
                    fallbackAlt=""
                    fill
                    className="h-full w-full scale-105 group-hover:scale-100 rounded-lg object-cover transition-all duration-300"
                    field={item.image}
                  />
                </figure>
                <div className="absolute top-0 left-0 w-full h-full  transition-all duration-300 bg-gradient-to-b from-[transparent_10%] via-[rgba(0,0,0,.5%] to-[rgba(0,0,0,75)]"></div>
                <article className="p-4 text-white space-y-2 absolute bottom-0">
                  <h2 className="text-2xl font-semibold w-full">
                    {item.title}
                  </h2>
                </article>
              </div>
            </PrismicNextLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
