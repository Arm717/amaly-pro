interface IUserBasketItem {
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
    basket: {
        id: number;
        user_id: number;
        product_id: number;
        qty: number;
        created_at: string;
        updated_at: string;
    };
}

export interface IUserBasketData {
    basket: IUserBasketItem[];
    total_price: number;
    count: number;
    qty_count: string;
}