import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getPersonalizedRecommendations } from "@/services/aiService";
import { Ebook } from "@/types";
import EbookCard from "./EbookCard";
import { Sparkles, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AIRecommendationsProps {
  onView: (ebook: Ebook) => void;
}

export default function AIRecommendations({ onView }: AIRecommendationsProps) {
  const [interests, setInterests] = useState("");
  const [recommendations, setRecommendations] = useState<Ebook[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetRecommendations = async () => {
    if (!interests.trim()) return;
    setIsLoading(true);
    const results = await getPersonalizedRecommendations(interests);
    setRecommendations(results);
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary font-bold mb-4">
            <Sparkles className="h-5 w-5" />
            <span>AI-POWERED</span>
          </div>
          <h2 className="text-4xl font-heading mb-4">Find Your Perfect Read</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Tell us what you're interested in, and our AI will curate a personalized list of ebooks just for you.</p>
        </div>

        <div className="max-w-xl mx-auto mb-16">
          <div className="flex gap-2">
            <Input
              placeholder="e.g. 'I want to learn about productivity and healthy cooking'"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="h-14 rounded-full px-6 bg-background"
              onKeyDown={(e) => e.key === 'Enter' && handleGetRecommendations()}
            />
            <Button
              onClick={handleGetRecommendations}
              disabled={isLoading}
              className="h-14 rounded-full px-8"
            >
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Curate"}
            </Button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {recommendations.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {recommendations.map((ebook) => (
                <EbookCard key={ebook.id} ebook={ebook} onView={onView} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
