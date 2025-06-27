export type IAllCategory = ICategory[];

export interface ICategory {
    id:number;
    name:string;
    image:string;
    status:number;
    created_at: string;
    updated_at: string;
}
export interface ICategorys {
  category: IAllCategory;
}

// export interface IAllCategory {
//     category: ICategoryData;
//     about: IAbout;
// }

// export type ICategoryData = ICategory[];


// export interface ICategory {
//     id:number;
//     name: string;
//     image: string;
//     status:number
//     created_at: string;
//     updated_at: string;
//     products: IPriducts[];
// }

// interface IAbout {
//     id:number;
//     image:string;
//     text:string;
// }

// type IPriducts = IProductsItem[]

// interface IProductsItem {
    
//     id: number;
//     category_id: 2;
//     name: string;
//     image: string;
//     text: string;
//     protein: string;
//     fat: string;
//     carbohydrates: string;
//     calories: string;
//     weight: string;
//     price: number;
//     status: number;
//     created_at: string;
//     updated_at: string;
  
// }