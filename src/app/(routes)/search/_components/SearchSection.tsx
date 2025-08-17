"use client"
import React from 'react'
import { ISearchPageData } from '../types/types'
import SearchBar from './search-bar/SearchBar';
import Section from '@/components/section/Section';
import ButtonVector from '@/components/button/button-vector/ButtonVector';
import ProductCard from '@/components/product-card/ProductCard';



interface ISearchSection {
  searchData:ISearchPageData;
}

function SearchSection({searchData}:ISearchSection) {
  return (
    <div className="flex min-h-[calc(100vh-450px)] flex-grow w-full justify-center">
      <Section className='mx-3'>
        <div className=''>
          <div className="mt-[48px] mb-[11px] lg:mt-[83px] lg:mb-[64px] ">
            <SearchBar />
          </div>
            <div className="flex  mb-[40px] justify-center lg:hidden">
              <ButtonVector as="span" variant="mediumVector" text="Поиск" />
           </div>
           <div className="grid grid-cols-1 justify-center  4xxs:grid-cols-2 lg:grid-cols-3 lxl:grid-cols-4 gap-2.5 mb-10">
              {searchData.data.map((product)=>{
                return <ProductCard key={product.id} product={product}/>
              })}
          </div>
        </div>
          
          
      </Section>
    </div>
  )
}

export default SearchSection