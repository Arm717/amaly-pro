import { useRouter } from 'next/navigation';
import { useState } from 'react'

function useSearchHook() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [pageValue, setPageValue] = useState<number>(1);
    const router = useRouter();
    function handleSearch() {
         return router.push(`/search?query=${searchValue}&page=${pageValue}`);
          }
  return {searchValue, setSearchValue, handleSearch, setPageValue} as const;
  
}

export default useSearchHook;