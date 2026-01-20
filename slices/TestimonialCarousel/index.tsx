import { FC } from 'react';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { PrismicNextImage } from '@prismicio/next';

/**
 * Props for `TestimonialCarousel`.
 */
export type TestimonialCarouselProps =
  SliceComponentProps<Content.TestimonialCarouselSlice>;

/**
 * Component for "TestimonialCarousel" Slices.
 */
const TestimonialCarousel: FC<TestimonialCarouselProps> = ({ slice }) => {
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
          <PrismicRichText field={slice.primary.section_title} />
        </div>{' '}
        <div className='sm:mx-48'>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full mx-auto"
          >
            <CarouselContent className="mt-12 ">
              {slice.primary.testimonials.map((item, index) => (
                <CarouselItem
                  className="md:basis-1/2 lg:basis-1/3"
                  key={index}
                >
                  <div className="rounded-md bg-white p-6 space-y-6">
                    <PrismicRichText field={item.testimonial_content} />
                    <p className="text-orange font-semibold">
                      {item.author_name}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="sm:top-36 sm:-left-32" />
            <CarouselNext className="sm:top-36 sm:-right-32" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
