import { EBOOKS } from "@/constants";
import EbookCard from "./EbookCard";
import { Ebook } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FeaturedCarouselProps {
  onView: (ebook: Ebook) => void;
}

export default function FeaturedCarousel({ onView }: FeaturedCarouselProps) {
  return (
    <section id="featured" className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-heading mb-4">Featured Ebooks</h2>
            <p className="text-muted-foreground max-w-md">Hand-picked selections from our editors to inspire your next journey.</p>
          </div>
          <div className="hidden sm:block">
            <a href="#" className="text-primary font-bold hover:underline">View All Collection</a>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {EBOOKS.map((ebook) => (
              <CarouselItem key={ebook.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <EbookCard ebook={ebook} onView={onView} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-12 gap-4">
            <CarouselPrevious className="static translate-y-0 h-12 w-12" />
            <CarouselNext className="static translate-y-0 h-12 w-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
