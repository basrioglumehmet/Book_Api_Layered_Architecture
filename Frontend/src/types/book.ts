export type Book = {
    id: string;
    name: string;
    description: string;
    author: string;
    brand: string;
    category: string;
    pageSize: number | null;
    bookSize: string | null;
    paperType: string | null;
    publicationDate: string | null;
    barcode: string | null;
    skinType: string | null;
    translator: string | null;
    priceString: string;
    price: number;
    quantity: number;
    brandPrice: number;
    nameId: string;
    bookGalleries: {
        id: string;
        src: string;
        bookId: string;
    }[];
};

export type BookDetail = {
   detail: Book,
   other_books: Array<Book>
};
