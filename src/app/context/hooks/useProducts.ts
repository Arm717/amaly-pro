"use client"

import { IProductsItem } from '@/app/types';
import useLocalStorage from './useLocalStorage';

function useProducts() {
    const [products, setProducts] = useLocalStorage<IProductsItem[]>("cart", []);

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
    
  return {products, setProducts, addToBasket, decreaseQuantity, removeFromBasket, clearBasket}
}

export default useProducts;