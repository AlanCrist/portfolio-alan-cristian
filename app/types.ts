export interface Article {
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  social_image: string;
  published_at: string;
  tag_list: string[];
  author: string;
  author_image: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image: string;
  demoUrl?: string;
}
