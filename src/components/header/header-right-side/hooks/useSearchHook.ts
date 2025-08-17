import { useRouter } from 'next/navigation';
import { useState } from 'react'

function useSearchHook() {
    const [searchValue, setSearchValue] = useState<string>("");
    const router = useRouter();
    function handleSearch() {
         return router.push(`/search?query=${searchValue}&page=1`);
          }
  return {searchValue, setSearchValue, handleSearch} as const
  
}

export default useSearchHook;