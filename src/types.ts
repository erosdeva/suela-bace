export interface Book {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  coverImage: string;
  description: string;
  longDescription: string;
  excerpt: string;
  purchaseUrl?: string;
  pages?: number;
  publishDate?: string;
  isbn?: string;
  themes: string[];
}

export interface Review {
  id: string;
  bookId?: string; // Optional if review of the author generally
  author: string;
  role?: string;
  rating: number; // 1-5 stars
  text: string;
  date: string;
  isVerified?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'In-Person' | 'Virtual' | 'Reading' | 'Festival';
  description: string;
  linkText: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tag: string;
}
