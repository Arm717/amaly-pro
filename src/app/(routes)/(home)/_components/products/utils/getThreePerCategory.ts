import { IProductsItem } from "@/app/types";



export function getThreePerCategory(items:IProductsItem[]) {
  const categoryMap = new Map<number, any[]>();

  for (const item of items) {
    const current = categoryMap.get(item.category_id) || [];

    if (current.length < 3) {
      current.push(item);
      categoryMap.set(item.category_id, current);
    }
  }

  return Array.from(categoryMap.values()).flat();
}