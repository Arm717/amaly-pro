"use client"

import { IProductBasket, IProductsItem } from '@/types/types';
import useLocalStorage from './useLocalStorage';

function useProducts() {
    const [products, setProducts] = useLocalStorage<IProductBasket[]>("cart", []);

    const addToBasket = (product: IProductBasket) => {
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
    
      const decreaseQuantity = (product: IProductBasket) => {
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