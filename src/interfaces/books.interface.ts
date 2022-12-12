export interface Book {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
}

export type Cart = { books: Book[]; totalPrice: number };
