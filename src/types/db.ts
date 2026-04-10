export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  images: string[];
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Testimonial = {
  id: string;
  text: string;
  name: string;
  role: string;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
};
