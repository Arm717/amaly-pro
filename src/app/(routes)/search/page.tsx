"use server"
import React from 'react'
import getSearchPageData from './services/getSearchPageData';
import SearchSection from './_components/SearchSection';

interface ISearchParams {
  query: string;
  page: string;
}

async function SearchPage({
  searchParams,
}: {
  searchParams: ISearchParams;
}) {
    const { query, page} = searchParams;
    const searchQuery = query || '';
    const pageNumber = Number(page) || 1;
    const searchData = await getSearchPageData({ query:searchQuery, page: pageNumber });
 
  return (
    <SearchSection searchData={searchData} />
  )
}

export default SearchPage