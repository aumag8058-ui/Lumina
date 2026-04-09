import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import AIRecommendations from "@/components/AIRecommendations";
import Testimonials from "@/components/Testimonials";
import EmailCapture from "@/components/EmailCapture";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import { Ebook } from "@/types";
import { motion, AnimatePresence } from "motion/react";
import { X, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function App() {
  const [selectedEbook, setSelectedEbook] = useState<Ebook | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showScarcityBanner, setShowScarcityBanner] = useState(true);

  const handleViewEbook = (ebook: Ebook) => {
    setSelectedEbook(ebook);
    setIsDetailOpen(true);
  };

  // Simulate exit intent (shows after 30 seconds or on mouse leave if we were in a real browser)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowExitIntent(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      {/* Scarcity Banner */}
      <AnimatePresence>
        {showScarcityBanner && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-primary text-primary-foreground py-2 px-4 relative z-[60]"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-sm font-bold">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>FLASH SALE:</span>
              </div>
              <p>Get 40% OFF on all Business Ebooks! Ends in 05:42:12</p>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 hover:bg-white/10 text-white absolute right-4"
                onClick={() => setShowScarcityBanner(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      <main>
        <Hero />
        <FeaturedCarousel onView={handleViewEbook} />
        <AIRecommendations onView={handleViewEbook} />
        <Testimonials />
        <EmailCapture />
        <BlogSection />
        <FAQSection />
      </main>

      <Footer />

      <ProductDetail
        ebook={selectedEbook}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-background rounded-[2rem] p-8 md:p-12 max-w-lg w-full relative shadow-2xl border border-border"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 rounded-full"
                onClick={() => setShowExitIntent(false)}
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-heading mb-4">Wait! Don't Leave Empty Handed</h2>
                <p className="text-muted-foreground mb-8">
                  Get an extra <span className="font-bold text-primary">15% OFF</span> your first purchase. Use code: <span className="bg-accent px-2 py-1 rounded font-mono font-bold text-foreground">WELCOME15</span>
                </p>
                <Button className="w-full h-14 rounded-full text-lg mb-4" onClick={() => setShowExitIntent(false)}>
                  Claim My Discount
                </Button>
                <button
                  className="text-sm text-muted-foreground hover:underline"
                  onClick={() => setShowExitIntent(false)}
                >
                  No thanks, I'll pay full price
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
