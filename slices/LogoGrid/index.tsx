import { FC } from 'react';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

/**
 * Props for `LogoGrid`.
 */
export type LogoGridProps = SliceComponentProps<Content.LogoGridSlice>;

/**
 * Component for "LogoGrid" Slices.
 */
const LogoGrid: FC<LogoGridProps> = ({ slice }) => {
  const logosLoop = [
    ...slice.primary.logos,
    ...slice.primary.logos,
    ...slice.primary.logos,
    ...slice.primary.logos,
  ];
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={
        slice.primary.background_color
          ? `bg-${slice.primary.background_color}`
          : 'bg-vert' + ''
      }
    >
      <div className="pb-12 pt-56 mx-auto container px-4">
        <div className="heading">
          <PrismicRichText field={slice.primary.title} />
        </div>

        <div className={`relative py-10 overflow-hidden [--fade-color:var(${slice.primary.background_color ? `--color-${slice.primary.background_color}` : '--color-vert'})]
          })]`}>
          {/* FADER */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 fade-left z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 fade-right z-10" />

          {/* TRACK */}
          <div
            className="flex w-max animate-slide-left gap-x-8 pause-on-hover"
            tabIndex={0}
          >
            {logosLoop.map((item, index) => (
              <div
                key={index}
                className="inline-flex shrink-0 items-center bg-orange gap-x-8 p-2 px-8 rounded-md"
              >
                <PrismicNextImage
                  field={item.logo_image}
                  className="max-h-10 w-auto object-contain"
                />
                <p className="font-semibold text-xl uppercase whitespace-nowrap text-white">
                  {item.logo_label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;
