import { IProductBasket, IProductsItem } from '@/types/types';

export async function getBasketProductData(basketData:IProductBasket[]):Promise<IProductsItem[]> {  
      const query = encodeURIComponent(JSON.stringify(basketData));

      const data = await fetch(`https://api.amalys.pro/api/basket-guest?data=${query}`, {next:{ revalidate:3600 }});
      const response = await data.json();
     
      return response;

}

