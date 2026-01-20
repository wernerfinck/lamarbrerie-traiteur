import { FC } from 'react';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

/**
 * Props for `MenuItemsWithGroupedExtras`.
 */
export type MenuItemsWithGroupedExtrasProps =
  SliceComponentProps<Content.MenuItemsWithGroupedExtrasSlice>;

/**
 * Component for "MenuItemsWithGroupedExtras" Slices.
 */
const MenuItemsWithGroupedExtras: FC<MenuItemsWithGroupedExtrasProps> = ({
  slice,
}) => {

  console.log('slice', slice.primary.title);
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
      <div className={`mx-auto overflow-hidden container px-4 ${slice.primary.title.length !== 0 ? 'pt-24 md:pt-32' : ''}`}>
        <div className="heading !text-left">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="text-center mt-6 font-semibold text-2xl tracking-tight uppercase text-gray-600">
          <PrismicRichText field={slice.primary.subtitle} />
        </div>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4 mt-12">
          {slice.primary.items.map((item, i) => (
            <div
              key={item.description ? item.description + i.toString() : i}
              className="group relative border-b border-r bg-white border-gray-200 p-4 sm:p-6"
            >
              <PrismicNextImage
                fallbackAlt=""
                className="aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
                field={item.image}
              />
              <div className="pb-4 pt-10 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  {item.description}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className='my-12 space-y-6'>
          <div className='font-semibold text-2xl tracking-tight uppercase'>
            <PrismicRichText field={slice.primary.extra_title} />
          </div>
          <div className='sm:text-lg uppercase tracking-tight'>
            <PrismicRichText field={slice.primary.extras} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuItemsWithGroupedExtras;
