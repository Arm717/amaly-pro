import { useRouter } from 'next/navigation';
import { useState } from 'react'

function useSearchHook() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [pageValue, setPageValue] = useState<number>(1);
    const router = useRouter();
   function handleSearch(page?: number, query?: string) {
    const finalPage = page ?? pageValue;
    const finalQuery = query ?? searchValue;
    router.push(`/search?query=${finalQuery}&page=${finalPage}`);
  }
  return {searchValue, setSearchValue, handleSearch, setPageValue} as const;
  
}

export default useSearchHook;