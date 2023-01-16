export interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
}

export interface ProductI {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: Date;
    updatedAt: Date;
    category: Category;
}

export interface ReviewI {
    id: string;
    title: string;
    comment: string;
    img: string;
    date: Date;
    score: number;
}