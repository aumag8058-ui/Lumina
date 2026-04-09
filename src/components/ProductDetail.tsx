import { Ebook } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Check, ShoppingCart, Share2, Heart } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProductDetailProps {
  ebook: Ebook | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetail({ ebook, isOpen, onClose }: ProductDetailProps) {
  if (!ebook) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-none shadow-2xl">
        <ScrollArea className="max-h-[90vh]">
          <div className="grid lg:grid-cols-2">
            {/* Left: Image */}
            <div className="bg-accent/50 p-8 flex items-center justify-center">
              <div className="relative aspect-[3/4] w-full max-w-[300px] shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img
                  src={ebook.coverImage}
                  alt={ebook.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right: Info */}
            <div className="p-8 lg:p-12">
              <div className="flex justify-between items-start mb-4">
                <Badge className="bg-primary/10 text-primary border-none">{ebook.category}</Badge>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <DialogHeader className="mb-6">
                <DialogTitle className="text-4xl font-heading leading-tight mb-2">{ebook.title}</DialogTitle>
                <p className="text-lg text-muted-foreground">By <span className="text-foreground font-medium">{ebook.author}</span></p>
              </DialogHeader>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className={`h-4 w-4 ${i <= Math.floor(ebook.rating) ? 'fill-current' : ''}`} />
                  ))}
                  <span className="ml-2 font-bold text-foreground">{ebook.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">{ebook.reviewsCount} Reviews</span>
              </div>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl font-bold text-primary">${ebook.price}</span>
                {ebook.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">${ebook.originalPrice}</span>
                )}
                <Badge variant="outline" className="text-green-600 border-green-600">Save {Math.round((1 - ebook.price / (ebook.originalPrice || ebook.price)) * 100)}%</Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button className="flex-1 h-14 rounded-full text-lg group">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Now
                </Button>
                <Button variant="outline" className="flex-1 h-14 rounded-full text-lg">
                  Read Sample
                </Button>
              </div>

              <Tabs defaultValue="benefits" className="w-full">
                <TabsList className="w-full justify-start bg-transparent border-b border-border rounded-none p-0 h-auto mb-6">
                  <TabsTrigger value="benefits" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3">Benefits</TabsTrigger>
                  <TabsTrigger value="features" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3">Features</TabsTrigger>
                  <TabsTrigger value="author" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3">Author</TabsTrigger>
                </TabsList>
                <TabsContent value="benefits" className="space-y-4">
                  {ebook.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="features" className="space-y-4">
                  {ebook.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary shrink-0 mt-2" />
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="author">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={ebook.authorImage} alt={ebook.author} className="h-16 w-16 rounded-full object-cover" referrerPolicy="no-referrer" />
                    <div>
                      <h4 className="font-bold">{ebook.author}</h4>
                      <p className="text-sm text-muted-foreground">Author & Expert</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">"{ebook.authorBio}"</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
