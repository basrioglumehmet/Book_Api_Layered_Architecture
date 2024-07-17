export type Book = {
    id: string;
    name: string;
    description: string;
    author: string;
    brand: string;
    category: string;
    price: number;
    quantity: number;
    bookGalleries: {
        id: string;
        src: string;
        bookId: string;
    }[];
};
