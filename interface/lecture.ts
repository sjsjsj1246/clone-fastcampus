export interface Tag {
  id: number;
  name: string;
}
export interface Category {
  id: number;
  name: string;
}

export interface Lecture {
  id: number;
  title: string;
  description: string;
  thumb: string;
  tags: Tag[];
  category: Category;
  isHot: boolean;
  isNew: boolean;
}
