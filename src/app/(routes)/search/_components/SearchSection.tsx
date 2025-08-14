"use client"
import Section from '@/app/_components/section/Section'
import React from 'react'
import { ISearchPageData } from '../types/types'
import SearchBar from './search-bar/SearchBar';
import ButtonVector from '@/app/_components/button/button-vector/ButtonVector';


interface ISearchSection {
  searchData:ISearchPageData;
}

function SearchSection({searchData}:ISearchSection) {
  return (
    <div className="flex min-h-[calc(100vh-450px)] flex-grow w-full justify-center">
      <Section>
          <div className="mt-[83px] mb-[64px] px-3">
            <SearchBar />
            <div className="flex mt-[11px] justify-center lg:hidden">
              <ButtonVector as="span" variant="mediumVector" text="Поиск" />
           </div>
          </div>
      </Section>
    </div>
  )
}

export default SearchSection