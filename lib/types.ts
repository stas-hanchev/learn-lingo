export interface Review {
    reviewer_name: string;
    review_rating: number;
    comment: string;
}

export interface Teacher {
    name: string;
    surname: string;
    languages: string[];
    levels: string[];
    rating: number;
    reviews: Review[];
    price_per_hour: number;
    lessons_done: number;
    avatar_url: string;
    lesson_info: string;
    conditions: string[];
    experience: string;
}

export interface TeachersResponse {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    teachers: Teacher[];
}

export interface RegisterRequestBody {
    name: string;
    email: string;
    password: string;
}

export interface User {
    _id: string;
    email: string;
    password: string;
    name?: string | null | undefined;
}
