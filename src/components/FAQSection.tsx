import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "How do I receive my ebook after purchase?",
    answer: "Immediately after checkout, you will receive an email with a secure download link. You can also access your purchases at any time through your account dashboard."
  },
  {
    question: "What formats are the ebooks available in?",
    answer: "Most of our ebooks are provided in PDF, EPUB, and MOBI formats, ensuring compatibility with Kindle, Apple Books, and all major e-readers."
  },
  {
    question: "Can I read the ebooks on multiple devices?",
    answer: "Yes! Once purchased, the ebook is yours. You can download and read it on your phone, tablet, and computer simultaneously."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 14-day satisfaction guarantee. If you're not happy with your purchase, contact our support team for a full refund, no questions asked."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading mb-4">Common Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about Lumina Books.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border py-2">
              <AccordionTrigger className="text-left text-lg font-medium hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
