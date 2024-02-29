"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const targets = [
  {
    heigth: 1800,
    href: "tops",
    id: 1,
    src: "/tops.jpg",
    title: "Tops",
    width: 1440,
  },
  {
    heigth: 1800,
    href: "faldas",
    id: 2,
    src: "/faldas.jpg",
    title: "Faldas",
    width: 1440,
  },
  {
    heigth: 1800,
    href: "pantalones",
    id: 3,
    src: "/pantalones.jpg",
    title: "Pantalones",
    width: 1440,
  },
  {
    heigth: 1800,
    href: "remerones",
    id: 4,
    src: "/remerones.jpg",
    title: "Remerones",
    width: 1440,
  },
  {
    heigth: 1800,
    href: "vestidos",
    id: 5,
    src: "/vestidos.jpg",
    title: "Vestidos",
    width: 1440,
  },
];

const ProductTypesSlider = () => {
  return (
    <div className="relative box-border pb-6 pt-6 text-base leading-normal">
      <h2 className="pb-2 text-center text-2xl lg:text-3xl">
        <span>Nuestros productos</span>
      </h2>
      <div className="flex items-center justify-center">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
          className="max-w-[260px] lg:max-w-screen-md"
        >
          <CarouselContent>
            {targets.map((target) => (
              <CarouselItem key={target.id} className="lg:basis-1/3">
                <figure className="relative box-border">
                  <div className="h-[280px] w-full overflow-hidden rounded-md">
                    <Link
                      href={{
                        pathname: "/productos",
                        query: { q: `${target.title}` },
                      }}
                    >
                      <Image
                        alt={target.title}
                        className="h-full w-full object-cover"
                        width={target.width}
                        height={target.heigth}
                        src={target.src}
                      ></Image>
                    </Link>
                  </div>
                  <figcaption className="leading-1 absolute bottom-3 left-3 right-3 overflow-ellipsis text-3xl text-white">
                    <Link
                      href={{
                        pathname: "/productos",
                        query: { q: `${target.title}` },
                      }}
                    >
                      {target.title}
                    </Link>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
export default ProductTypesSlider;
