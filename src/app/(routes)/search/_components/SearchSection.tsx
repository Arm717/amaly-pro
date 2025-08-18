"use client"
import React from 'react'
import { ISearchPageData } from '../types/types'
import SearchBar from './search-bar/SearchBar';
import Section from '@/components/section/Section';
import ButtonVector from '@/components/button/button-vector/ButtonVector';
import ProductCard from '@/components/product-card/ProductCard';
import useSearchHook from '@/hooks/useSearchHook';
import Button from '@/components/button/Button';
import Text from '@/components/text/Text';



interface ISearchSection {
  searchData:ISearchPageData;
}

function SearchSection({searchData}:ISearchSection) {
   const {setSearchValue, setPageValue, handleSearch} = useSearchHook();
  return (
    <div className="flex min-h-[calc(100vh-450px)] flex-grow w-full justify-center">
      <Section className='mx-3'>
        
          <div className="mt-[48px] mb-[11px] lg:mt-[83px] lg:mb-[64px] ">
            <SearchBar 
            onChange={(e) => setSearchValue(e.target.value)}
            onLeftIconClick={() => handleSearch()}
            onRightIconClick={() => handleSearch()}
          />
          </div>
            <div className="flex  mb-[40px] justify-center lg:hidden">
              <ButtonVector as="span" variant="mediumVector" text="Поиск" />
           </div>
           <div className="grid grid-cols-1 justify-center  4xxs:grid-cols-2 lg:grid-cols-3 lxl:grid-cols-4 gap-2.5 mb-10">
              {searchData.data.map((product)=>{
                return <ProductCard key={product.id} product={product}/>
              })}
          </div>
        
          <div className='flex w-full gap-[12px] items-center justify-center'>
            {
              Array.from({ length: Number(searchData.last_page) }, (_, i) => {
                if (Number(searchData.current_page) === i + 1) {
                  return (
                  <ButtonVector
                  key={searchData.current_page}
                  as='span'
                  variant='smallVector'
                  text={`${searchData.current_page}`}
                />
              )
                }
                if (Number(searchData.current_page) + 2 <= Number(searchData.last_page) || Number(searchData.current_page) - 2 < 0) {
                  return <Button key={i+1} variant='custom' onClick={()=>{
                  setPageValue(i + 1);
                  handleSearch();
                }
                  } >{i + 1}</Button>
                }
                return <Text as='span' value="..." />
                }
              )
            }
            
          </div>
      </Section>
    </div>
  )
}

export default SearchSection