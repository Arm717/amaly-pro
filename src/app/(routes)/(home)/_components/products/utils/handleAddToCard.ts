// utils/handleAddToCart.ts
import { IProductsItem } from "@/app/types";

export const handleAddToCart = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  product: IProductsItem,
  setProducts: React.Dispatch<React.SetStateAction<IProductsItem[]>>
) => {
  e.preventDefault();
  e.stopPropagation();

  setProducts((prev) => {
    const existingProduct = prev.find((p) => p.id === product.id);
    if (existingProduct) {
      return prev.map((p) =>
        p.id === product.id
          ? { ...p, quantity: (p.quantity ?? 1) + 1 }
          : p
      );
    }
    return [...prev, { ...product, quantity: 1 }];
  });
};
