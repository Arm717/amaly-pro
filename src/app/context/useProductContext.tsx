"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { IAllCategory, ICategory, IHomeData, IProductsItem } from "../types";
import useLocalStorage from "./hooks/useLocalStorage";
import useProducts from "./hooks/useProducts";

interface ProductContextType {
  homeData:IHomeData;
  products: IProductsItem[];
  categorie: IAllCategory;
  basketQuantity: number;
  addToBasket: (product: IProductsItem) => void;
  decreaseQuantity: (product: IProductsItem) => void;
  removeFromBasket: (productId: number) => void;
  clearBasket: () => void;
  setCategorie: React.Dispatch<React.SetStateAction<IAllCategory>>;
}

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({
  children,
  initialHomeData = { category: [], about: { id: 0, image: "", text: "" } },
  initialCategorie = [],
}: {
  children: ReactNode;
  initialHomeData?: IHomeData;
  initialCategorie?: IAllCategory;
}) => {
  const [homeData] = useState<IHomeData>(initialHomeData);

  const [categorie, setCategorie] = useState<IAllCategory>(initialCategorie);

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
        homeData, 
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
