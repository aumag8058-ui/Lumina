export interface Ebook {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  coverImage: string;
  description: string;
  category: string;
  benefits: string[];
  features: string[];
  authorBio: string;
  authorImage: string;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
