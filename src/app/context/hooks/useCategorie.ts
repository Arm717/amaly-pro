import { IAllCategory, ICategory } from '@/app/types';
import React, { useState } from 'react'

interface IUseCategory {
  initialCategorie: IAllCategory;
}

function useCategorie({initialCategorie}:IUseCategory) {
  const [categorie, setCategorie] = useState<IAllCategory>(initialCategorie);
  return [categorie, setCategorie] as const;
}

export default useCategorie;