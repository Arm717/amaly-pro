import { IProductsItem } from "@/types/types";

export interface ISearchPageData {
        current_page: number;
        data: IProductsItem[];
        first_page_url: string;
        from: number;
        last_page: string;
        last_page_url: string;
        links:ISearchPageLink[];
        next_page_url: string | null;
        path: string;
        per_page: number;
        prev_page_url: string | null;
        to: number;
        total: number;
}

interface ISearchPageLink {
    url:  string | null;
    label: string;
    active: boolean;
}