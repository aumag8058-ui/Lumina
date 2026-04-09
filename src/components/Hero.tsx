import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-xs font-bold uppercase tracking-wider">Top Rated Ebook Store 2024</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-heading font-light leading-tight mb-6">
              Elevate Your Mind with <span className="italic font-medium">Lumina</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Curated digital books for the modern thinker. From personal growth to technical mastery, find your next breakthrough here.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="rounded-full px-8 text-lg h-14 group">
                Browse Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14">
                View Best Sellers
              </Button>
            </div>
            <div className="mt-10 flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="User"
                    className="h-8 w-8 rounded-full border-2 border-background"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p>Joined by <span className="font-bold text-foreground">50,000+</span> readers worldwide</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://picsum.photos/seed/hero-book/800/1000"
                alt="Featured Ebook"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <p className="text-white/80 text-sm font-medium mb-2">Featured Today</p>
                <h3 className="text-white text-3xl font-heading mb-4">The Art of Minimalist Living</h3>
                <Button variant="secondary" className="w-fit rounded-full">Get it for $19.99</Button>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
