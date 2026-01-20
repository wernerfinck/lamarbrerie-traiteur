import { FC } from 'react';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

/**
 * Props for `PricingCards`.
 */
export type PricingCardsProps = SliceComponentProps<Content.PricingCardsSlice>;

/**
 * Component for "PricingCards" Slices.
 */
const PricingCards: FC<PricingCardsProps> = ({ slice }) => {
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
      <div className="container mx-auto py-12 xl:py-24 px-4">
        <div className="flex justify-center flex-wrap lg:space-x-10 space-y-10 xl:space-y-0 mx-auto">
          {slice.primary.cards.map((item) => (
            <div
              key={item.title}
              className="bg-white p-7 sm:p-10 space-y-6 rounded-md w-96"
            >
              <h4 className="font-bold tracking-tight uppercase text-base sm:text-lg">
                {item.title}
              </h4>
              <div className="flex items-baseline">
                <span className="text-3xl sm:text-5xl font-bold uppercase">
                  <PrismicRichText field={item.price} />
                </span>
                <span className="text-base sm:text-lg font-semibold">
                  {item.per_person_note}
                </span>
              </div>
              <p className='text-base sm:text-lg'>{item.description}</p>
              <PrismicNextLink
                className="orange-btn w-full"
                field={item.button}
              />
              <div className="text-base sm:text-lg leading-relaxed line list-wrapper [&_ul]:list-none [&_ul]:pl-0 [&_li]:relative [&_li]:pl-6 [&_li::before]:content-['✓'] [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:top-[0.1em] [&_li::before]:text-green-600 [&_li::before]:font-bold">
                <PrismicRichText field={item.features_list} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
