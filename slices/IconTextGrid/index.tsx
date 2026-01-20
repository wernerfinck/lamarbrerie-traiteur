import { FC } from 'react';
import { asText, Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

/**
 * Props for `IconTextGrid`.
 */
export type IconTextGridProps = SliceComponentProps<Content.IconTextGridSlice>;

/**
 * Component for "IconTextGrid" Slices.
 */
const IconTextGrid: FC<IconTextGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={
        slice.primary.backround_color
          ? `bg-${slice.primary.backround_color}`
          : 'bg-bleu'
      }
    >
      <div className="container mx-auto py-24 md:py-32 px-4">
        <div className="heading space-y-4">
          <PrismicRichText field={slice.primary.section_title} />
          <PrismicRichText field={slice.primary.section_description} />
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl mx-auto grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {slice.primary.items.map((item) => (
              <div
                key={asText(item.title)}
                className="relative pl-16"
              >
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-md bg-orange">
                    <PrismicNextImage field={item.icon} />
                  </div>
                  <PrismicRichText field={item.title} />
                </dt>
                <dd className="mt-2 text-base/7 text-gray-700">
                  <PrismicRichText field={item.description} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default IconTextGrid;
