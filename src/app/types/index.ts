export interface Blog {
    message: string;
    blogs?: (BlogsEntity)[] | null;
  }
  export interface BlogsEntity {
    _id: string;
    name: string;
    count: number;
    blogs?: (BlogsEntity1)[] | null;
  }
  export interface BlogsEntity1 {
    _id: string;
    user: User;
    title: string;
    content: string;
    description: string;
    thumbnail: string;
    category: Category;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  export interface User {
    _id: string;
    fullname: string;
    email: string;
    role: string;
    avatar: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  export interface Category {
    _id: string;
    name: string;
    __v: number;
  }
  