"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { ICategory, IProductsItem } from "../types";
import useLocalStorage from "./useLocalStorage";

interface ProductContextType {
  products: IProductsItem[];
  categorie: ICategory[];
  basketQuantity: number;
  addToBasket: (product: IProductsItem) => void;
  decreaseQuantity: (product: IProductsItem) => void;
  removeFromBasket: (productId: number) => void;
  clearBasket: () => void;
  setCategorie: React.Dispatch<React.SetStateAction<ICategory[]>>;
}

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({
  children,
  initialCategorie = [],
}: {
  children: ReactNode;
  initialCategorie?: ICategory[];
}) => {
  const [categorie, setCategorie] = useState<ICategory[]>(initialCategorie);

  const [products, setProducts] = useLocalStorage<IProductsItem[]>("cart", []);

  const [basketQuantity, setBasketQuantity] = useLocalStorage<number>(
    "basket",
    0
  );

  useEffect(() => {
    const productsCount = products.reduce(
      (acc, item) => acc + (item.quantity ?? 1),
      0
    );
    setBasketQuantity(productsCount);
  }, [products, setBasketQuantity]);

  const addToBasket = (product: IProductsItem) => {
    setProducts((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((prevProduct) =>
          prevProduct.id === product.id
            ? { ...prevProduct, quantity: (prevProduct.quantity ?? 1) + 1 }
            : prevProduct
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const decreaseQuantity = (product: IProductsItem) => {
    setProducts((prev) =>
      prev
        .map((prevProduct) =>
          prevProduct.id === product.id
            ? { ...prevProduct, quantity: (prevProduct.quantity ?? 1) - 1 }
            : prevProduct
        )
        .filter((product) => (product.quantity ?? 1) > 0)
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
        categorie,
        products,
        basketQuantity,
        addToBasket,
        decreaseQuantity,
        removeFromBasket,
        clearBasket,
        setCategorie,
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
