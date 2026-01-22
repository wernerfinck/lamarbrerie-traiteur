'use client';
import { Simplify, NavbarDocumentData } from '@/prismicio-types';
import { Dialog, DialogPanel } from '@headlessui/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export const Navbar = ({
  navData,
}: {
  navData: Simplify<NavbarDocumentData>;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  console.log('navdata', navData);
  return (
    <header className="bg-vert">
      <nav
        aria-label="Global"
        className="mx-auto flex container items-center justify-between py-6 px-4"
      >
        <div className="flex items-center gap-x-12">
          <Link
            href="/"
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">La Marbrerie - traiteur</span>
            <PrismicNextImage
              className="h-8 w-auto"
              fallbackAlt=""
              field={navData.logo}
            />
          </Link>
          <div className="hidden lg:flex lg:gap-x-12">
            {navData.links.map((item) => (
              <PrismicNextLink
                className="font-semibold text-gray-900 hover:text-orange"
                key={item.link.text}
                field={item.link}
              />
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer"
          >
            <span className="sr-only">Open main menu</span>
            <Menu
              aria-hidden="true"
              className="size-6"
            />
          </button>
        </div>
        <div className="hidden lg:flex">
          <PrismicNextLink
            field={navData.button}
            className="orange-btn"
          />
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-vert p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">La Marbrerie - traiteur</span>
              <PrismicNextImage
                className="h-8 w-auto"
                fallbackAlt=""
                field={navData.logo}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 cursor-pointer"
            >
              <span className="sr-only">Close menu</span>
              <X
                aria-hidden="true"
                className="size-6"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navData.links.map((item) => (
                  <PrismicNextLink
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:text-orange"
                    key={item.link.text}
                    field={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                  />
                ))}
              </div>
              <div className="py-6">
                <PrismicNextLink
                  field={navData.button}
                  className="orange-btn"
                  onClick={() => setMobileMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
