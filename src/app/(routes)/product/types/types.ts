import { IProductsItem } from "@/app/types";

export interface ISingleProductData {
    product: IProductsItem;
    product_related: IProductsItem[];
}