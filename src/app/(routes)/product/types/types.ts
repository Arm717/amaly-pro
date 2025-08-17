import { IProductsItem } from "@/types/types";

export interface ISingleProductData {
    product: IProductsItem;
    product_related: IProductsItem[];
}