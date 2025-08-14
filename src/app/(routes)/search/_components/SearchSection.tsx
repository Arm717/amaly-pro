import Section from '@/app/_components/section/Section'
import React from 'react'
import { ISearchPageData } from '../types/types'

interface ISearchSection {
  searchData:ISearchPageData;
}

function SearchSection({searchData}:ISearchSection) {
  return (
    <div className="flex min-h-[calc(100vh-450px)] flex-grow w-full justify-center">
      <Section>
          <div></div>
      </Section>
    </div>
  )
}

export default SearchSection