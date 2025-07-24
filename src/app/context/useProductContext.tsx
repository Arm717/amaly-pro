'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { ICategory, IProductsItem } from '../types';

interface ProductContextType {
  products: IProductsItem[];
  setProducts: React.Dispatch<React.SetStateAction<IProductsItem[]>>;
  categorie: ICategory[];
  setCategorie: React.Dispatch<React.SetStateAction<ICategory[]>>;
}

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({
  children,
  initialCategorie = [],
  initialProducts = [],
}: {
  children: ReactNode;
  initialCategorie?: ICategory[];
  initialProducts?: IProductsItem[];
}) => {
  const [categorie, setCategorie] = useState<ICategory[]>(initialCategorie);
  
  const [products, setProducts] = useState<IProductsItem[]>(initialProducts);

  return (
    <ProductContext.Provider value={{
       categorie,
       products,
       setProducts,
       setCategorie,  
     }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
