"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { IProductsItem } from "../types";
import useLocalStorage from "./hooks/useLocalStorage";
import useProducts from "./hooks/useProducts";

interface ProductContextType {
  products: IProductsItem[];
  basketQuantity: number;
  addToBasket: (product: IProductsItem) => void;
  decreaseQuantity: (product: IProductsItem) => void;
  removeFromBasket: (productId: number) => void;
  clearBasket: () => void;
}

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({
  children,
  
}: {
  children: ReactNode;
}) => {
  
  const {
    products,
    addToBasket,
    decreaseQuantity,
    removeFromBasket,
    clearBasket,
  } = useProducts();


  const [basketQuantity, setBasketQuantity] = useLocalStorage<number>(
    "basket",
    0
  );

 useEffect(() => {
  const productsCount = products.reduce((acc, item) => acc + (item.quantity ?? 1), 0);
  setBasketQuantity(productsCount);
}, [products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        basketQuantity,
        addToBasket,
        decreaseQuantity,
        removeFromBasket,
        clearBasket,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProductContext must be used within a ProductProvider");
  return context;
};
