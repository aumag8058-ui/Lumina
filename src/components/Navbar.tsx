import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-bottom border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-heading font-bold tracking-tighter text-primary">
              LUMINA
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#featured" className="text-sm font-medium hover:text-primary transition-colors">Featured</a>
            <a href="#categories" className="text-sm font-medium hover:text-primary transition-colors">Categories</a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full">
                0
              </span>
            </Button>
            <Button className="rounded-full px-6">Sign In</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#featured" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">Featured</a>
              <a href="#categories" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">Categories</a>
              <a href="#blog" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">Blog</a>
              <a href="#faq" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">FAQ</a>
              <div className="pt-4 flex flex-col space-y-2">
                <Button className="w-full">Sign In</Button>
                <Button variant="outline" className="w-full">Cart (0)</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
