export type IAllCategory = Omit<ICategory,"products">[];


export interface ICategorys {
  category: IAllCategory;
}

export interface IHomeData {
    category: ICategoryData;
    about: IAbout;
}

export interface ISingleProductData {
    product: IProductsItem;
    product_related: IProductsItem[];
}

export type ICategoryData = ICategory[];


export interface ICategory {
    id:number;
    name: string;
    image: string;
    status:number;
    created_at: string;
    updated_at: string;
    products: IProductsItem[];
}

export interface IAbout {
    id:number;
    image:string;
    text:string;
}

export interface IHome {
  homeData: IHomeData;
}

export interface IProductsItem {
    id: number;
    category_id: number;
    name: string;
    image: string;
    text: string;
    protein: string;
    fat: string;
    carbohydrates: string;
    calories: string;
    weight: string;
    price: number;
    status: number;
    created_at: string;
    updated_at: string;
    quantity?: number;
}

export interface ICategoryPageDatas {
   product: ICategoryPageProducts;
   product_related: IProductsItem[];
   category: Omit<ICategory,"products">;
}

export interface ICategoryPageProducts {
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
