import { Ebook, BlogPost, Testimonial } from './types';

export const EBOOKS: Ebook[] = [
  {
    id: '1',
    title: 'The Art of Minimalist Living',
    author: 'Elena Vance',
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.9,
    reviewsCount: 1240,
    coverImage: 'https://picsum.photos/seed/minimal/600/800',
    description: 'Discover the freedom of less. This comprehensive guide teaches you how to declutter your space, mind, and life to focus on what truly matters.',
    category: 'Lifestyle',
    benefits: [
      'Reduce stress and anxiety instantly',
      'Save thousands of dollars annually',
      'Create a home that feels like a sanctuary',
      'Master the 90/90 rule of decluttering'
    ],
    features: [
      '250+ pages of actionable advice',
      'Interactive worksheets and checklists',
      'Lifetime updates and community access',
      'Available in PDF, EPUB, and MOBI'
    ],
    authorBio: 'Elena Vance is a world-renowned minimalist and productivity expert who has helped over 50,000 people simplify their lives.',
    authorImage: 'https://picsum.photos/seed/elena/200/200',
    isBestSeller: true
  },
  {
    id: '2',
    title: 'Mastering Digital Marketing 2024',
    author: 'Marcus Chen',
    price: 24.99,
    originalPrice: 49.99,
    rating: 4.8,
    reviewsCount: 856,
    coverImage: 'https://picsum.photos/seed/marketing/600/800',
    description: 'The ultimate blueprint for scaling your business in the digital age. From SEO to social media automation, learn the strategies used by top 1% marketers.',
    category: 'Business',
    benefits: [
      'Double your conversion rates in 30 days',
      'Master high-ROI advertising channels',
      'Build a loyal brand community',
      'Automate your sales funnel'
    ],
    features: [
      'Case studies from multi-million dollar brands',
      'Step-by-step video tutorials included',
      'Exclusive ad copy templates',
      'Monthly live Q&A sessions'
    ],
    authorBio: 'Marcus Chen is a serial entrepreneur and marketing consultant for Fortune 500 companies.',
    authorImage: 'https://picsum.photos/seed/marcus/200/200',
    isNew: true
  },
  {
    id: '3',
    title: 'The Plant-Based Kitchen',
    author: 'Sarah Jenkins',
    price: 14.99,
    rating: 4.7,
    reviewsCount: 2100,
    coverImage: 'https://picsum.photos/seed/food/600/800',
    description: '100+ delicious, easy-to-make plant-based recipes that will transform your health and energy levels without sacrificing flavor.',
    category: 'Cooking',
    benefits: [
      'Boost energy and mental clarity',
      'Support sustainable food systems',
      'Master quick 15-minute meals',
      'Improve digestion and skin health'
    ],
    features: [
      'Full-color photography for every recipe',
      'Nutritional breakdown for all meals',
      'Meal planning guides and grocery lists',
      'Beginner-friendly techniques'
    ],
    authorBio: 'Sarah Jenkins is a certified nutritionist and chef specializing in whole-food, plant-based cuisine.',
    authorImage: 'https://picsum.photos/seed/sarah/200/200'
  },
  {
    id: '4',
    title: 'Code Your Future',
    author: 'David Miller',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.9,
    reviewsCount: 540,
    coverImage: 'https://picsum.photos/seed/code/600/800',
    description: 'A complete guide to starting a career in software engineering. Learn how to learn, build a portfolio, and ace your technical interviews.',
    category: 'Technology',
    benefits: [
      'Land a high-paying tech job',
      'Build a portfolio that stands out',
      'Master the fundamentals of CS',
      'Network with industry leaders'
    ],
    features: [
      'Interview prep cheat sheets',
      'Portfolio project ideas',
      'Resume templates for developers',
      'Access to a private Discord'
    ],
    authorBio: 'David Miller is a Senior Engineer at a top tech firm with a passion for mentoring new developers.',
    authorImage: 'https://picsum.photos/seed/david/200/200'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Why Ebooks are the Future of Learning',
    excerpt: 'Explore how digital books are transforming the way we consume information and acquire new skills in the 21st century.',
    date: 'Oct 12, 2023',
    author: 'Admin',
    image: 'https://picsum.photos/seed/blog1/800/400'
  },
  {
    id: '2',
    title: '5 Tips for Reading More This Year',
    excerpt: 'Struggling to find time for books? Here are five practical strategies to help you integrate reading into your daily routine.',
    date: 'Nov 05, 2023',
    author: 'Elena Vance',
    image: 'https://picsum.photos/seed/blog2/800/400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'James Wilson',
    role: 'Entrepreneur',
    content: 'Lumina Books has been a game-changer for my personal growth. The quality of the content is unmatched.',
    avatar: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: '2',
    name: 'Sophia Rodriguez',
    role: 'Student',
    content: 'I love how easy it is to find exactly what I need. The recommendations are always spot on!',
    avatar: 'https://picsum.photos/seed/user2/100/100'
  },
  {
    id: '3',
    name: 'Michael Brown',
    role: 'Software Developer',
    content: 'The technical ebooks here are top-notch. Clear, concise, and highly practical.',
    avatar: 'https://picsum.photos/seed/user3/100/100'
  }
];
