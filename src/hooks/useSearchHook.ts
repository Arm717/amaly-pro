import { useRouter } from "next/navigation";
import { useState } from "react";

function useSearchHook() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [pageValue, setPageValue] = useState<number>(1);

  const router = useRouter();
  function handleSearch(page?: number) {
    const totalPageValue = page ?? pageValue
    router.push(`/search?query=${searchValue}&page=${totalPageValue}`);
  }
  return { searchValue, setSearchValue, handleSearch, setPageValue } as const;
}

export default useSearchHook;
