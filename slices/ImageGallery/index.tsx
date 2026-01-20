import { FC } from 'react';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PrismicNextImage } from '@prismicio/next';

/**
 * Props for `ImageGallery`.
 */
export type ImageGalleryProps = SliceComponentProps<Content.ImageGallerySlice>;

/**
 * Component for "ImageGallery" Slices.
 */
const ImageGallery: FC<ImageGalleryProps> = ({ slice }) => {
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
      <div className="container mx-auto py-24 md:py-32 px-4">
        <div className="heading space-y-4">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className='sm:mx-48'>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full mx-auto"
          >
            <CarouselContent className="mt-12">
              {slice.primary.images.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <PrismicNextImage
                      className="object-cover h-[34rem] w-full rounded-md"
                      field={item.image}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="sm:top-82 sm:-left-32" />
            <CarouselNext className="sm:top-82 sm:-right-32" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
