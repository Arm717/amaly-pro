import { ICategory, IProductsItem } from "@/types/types";

interface ICategoryPageProducts {
    current_page: number;
    data: IProductsItem[];
    first_page_url: string;
    from: number;
    last_page_url: string;
    links:ICategoryPageLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    total: number;
}

interface ICategoryPageLink {
    url:  string | null;
    label: string;
    active: boolean;
}

export interface ICategoryPageDatas {
   product: ICategoryPageProducts;
   product_related: IProductsItem[];
   category: Omit<ICategory,"products">;
}