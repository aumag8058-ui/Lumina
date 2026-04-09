import { Ebook } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { motion } from "motion/react";

interface EbookCardProps {
  ebook: Ebook;
  onView: (ebook: Ebook) => void;
  key?: string | number;
}

export default function EbookCard({ ebook, onView }: EbookCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden border-none shadow-lg bg-card group">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={ebook.coverImage}
            alt={ebook.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {ebook.isBestSeller && (
              <Badge className="bg-primary text-white border-none">Bestseller</Badge>
            )}
            {ebook.isNew && (
              <Badge variant="secondary" className="border-none">New</Badge>
            )}
          </div>
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <Button size="icon" variant="secondary" className="rounded-full" onClick={() => onView(ebook)}>
              <Eye className="h-5 w-5" />
            </Button>
            <Button size="icon" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-1 text-yellow-500 mb-2">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-bold text-foreground">{ebook.rating}</span>
            <span className="text-xs text-muted-foreground">({ebook.reviewsCount})</span>
          </div>
          <h3 className="font-heading text-xl mb-1 line-clamp-1">{ebook.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{ebook.author}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">${ebook.price}</span>
              {ebook.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">${ebook.originalPrice}</span>
              )}
            </div>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10" onClick={() => onView(ebook)}>
              Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
