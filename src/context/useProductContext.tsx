"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { IProductBasket, IProductsItem } from "../types/types";
import useLocalStorage from "./hooks/useLocalStorage";

interface ProductContextType {
  products: IProductBasket[];
  basketQuantity: number;
  total: { totalQuantity: number; totalPrice: number };
  addToBasket: (product: IProductBasket) => void;
  decreaseQuantity: (product: IProductBasket) => void;
  removeFromBasket: (productId: number) => void;
  calculateBasket: (fullData: IProductsItem[]) => {
    totalQuantity: number;
    totalPrice: number;
  };
  clearBasket: () => void;
}

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [basketQuantity, setBasketQuantity] = useLocalStorage<number>(
    "basket_count",
    0
  );

  const [products, setProducts] = useLocalStorage<IProductBasket[]>(
    "guest_basket",
    []
  );
  const [total, setTotal] = useState({ totalQuantity: 0, totalPrice: 0 });

  useEffect(() => {
    const productsCount = products.reduce(
      (acc, item) => acc + (item.qty ?? 1),
      0
    );
    setBasketQuantity(productsCount);
  }, [products]);

  const calculateBasket = (fullData: IProductsItem[]) => {
    let totalQuantity = 0;
    let totalPrice = 0;

    products.forEach((item) => {
      const product = fullData.find((p) => p.id === item.id);
      if (product) {
        const qty = item.qty ?? 1;
        totalQuantity += qty;
        totalPrice += qty * product.price;
      }
    });

    setTotal({ totalQuantity, totalPrice });
    return { totalQuantity, totalPrice };
  };

  const addToBasket = (product: IProductBasket) => {
    setProducts((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((prevProduct) =>
          prevProduct.id === product.id
            ? { ...prevProduct, qty: (prevProduct.qty ?? 1) + 1 }
            : prevProduct
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const decreaseQuantity = (product: IProductBasket) => {
    setProducts((prev) =>
      prev
        .map((prevProduct) =>
          prevProduct.id === product.id
            ? { ...prevProduct, qty: (prevProduct.qty ?? 1) - 1 }
            : prevProduct
        )
        .filter((product) => (product.qty ?? 1) > 0)
    );
  };

  const removeFromBasket = (productId: number) => {
    setProducts((prev) =>
      prev.filter((prevProduct) => prevProduct.id !== productId)
    );
  };

  const clearBasket = () => {
    setProducts([]);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        basketQuantity,
        total,
        addToBasket,
        decreaseQuantity,
        removeFromBasket,
        calculateBasket,
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
