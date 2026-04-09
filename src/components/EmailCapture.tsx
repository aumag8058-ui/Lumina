import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift } from "lucide-react";

export default function EmailCapture() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-primary-foreground relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-6">
                <Gift className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Free Lead Magnet</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading mb-6 leading-tight">
                Get Our "Reading Mastery" Guide for Free
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-0">
                Join our newsletter and receive a 50-page guide on how to read faster and retain more information.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm">
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
                  <Input
                    placeholder="Enter your email"
                    className="h-14 pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full focus-visible:ring-white/30"
                  />
                </div>
                <Button className="w-full h-14 rounded-full bg-white text-primary hover:bg-white/90 text-lg font-bold">
                  Send Me the Guide
                </Button>
                <p className="text-center text-xs text-primary-foreground/50">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full" />
        </div>
      </div>
    </section>
  );
}
