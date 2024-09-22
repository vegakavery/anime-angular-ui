export interface Comic {
    id: number;
    title: string;
    author: string;
    coverImage: string;
    description: string;
    genres: string[];
    chapters: Chapter[];
  }
  
  export interface Chapter {
    id: number;
    title: string;
    number: number;
    uploadDate: Date;
  }