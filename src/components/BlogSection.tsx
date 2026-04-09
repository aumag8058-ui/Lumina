import { BLOG_POSTS } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-heading mb-4">From the Blog</h2>
            <p className="text-muted-foreground">Insights, tips, and stories from the world of digital reading.</p>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-2 text-primary font-bold hover:underline">
            View All Posts <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <Card key={post.id} className="overflow-hidden border-none shadow-xl bg-card group cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>By {post.author}</span>
                </div>
                <h3 className="text-2xl font-heading mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-primary font-bold">
                  Read More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
