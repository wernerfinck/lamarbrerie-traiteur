import { FC } from 'react';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

/**
 * Props for `HeadlineCtaBanner`.
 */
export type HeadlineCtaBannerProps =
  SliceComponentProps<Content.HeadlineCtaBannerSlice>;

/**
 * Component for "HeadlineCtaBanner" Slices.
 */
const HeadlineCtaBanner: FC<HeadlineCtaBannerProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-violet"
    >
      <div className="bg-violet">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl text-white space-y-2">
            <PrismicRichText field={slice.primary.title} />
            <span className="text-orange">
              <PrismicRichText field={slice.primary.description} />
            </span>
          </div>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
            <PrismicNextLink
              className="orange-btn"
              field={slice.primary.button}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadlineCtaBanner;
