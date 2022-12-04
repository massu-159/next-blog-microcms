export interface BLOG {
  map(arg0: (blog: BLOG) => JSX.Element): import("react").ReactNode;
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  body: string;
  image: ImageType;
  categories: CategoryType[];
}

export interface ImageType {
  url: string;
  height: number;
  width: number;
}

export interface CategoryType {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}