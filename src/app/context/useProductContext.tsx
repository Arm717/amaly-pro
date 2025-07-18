'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { ICategory } from '../types';

interface ProductContextType {
  categorie: ICategory[];
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

  return (
    <ProductContext.Provider value={{ categorie, setCategorie }}>
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
