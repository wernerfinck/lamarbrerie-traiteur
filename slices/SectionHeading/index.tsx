import { FC } from 'react';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `SectionHeading`.
 */
export type SectionHeadingProps =
  SliceComponentProps<Content.SectionHeadingSlice>;

/**
 * Component for "SectionHeading" Slices.
 */
const SectionHeading: FC<SectionHeadingProps> = ({ slice }) => {
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
      <div className="container mx-auto py-24 md:py-32 px-4 text-center">
        <div className="uppercase text-sm sm:text-base font-bold tracking-wide text-gray-900">
          <PrismicRichText field={slice.primary.pre_title} />
        </div>
        <h1 className="pt-2g lg:text-7xl sm:text-6xl text-4xl font-bold tracking-tight text-gray-900">
          <PrismicRichText field={slice.primary.title} />
        </h1>
      </div>
    </section>
  );
};

export default SectionHeading;
