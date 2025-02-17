export interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  excerpt: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}