export type IAllCategory = Omit<ICategory,"products">[];

export interface ICategorys {
  category: IAllCategory;
}

export interface IHomeData {
    category: ICategoryData;
    about: IAbout;
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

 


