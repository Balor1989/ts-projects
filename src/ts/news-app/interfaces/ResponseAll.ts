import { ResponseNews } from "./ResponseNews";

export interface ResponseAll {
    articles: Array<ResponseNews>;
    status: string;
    totalResults:number
}