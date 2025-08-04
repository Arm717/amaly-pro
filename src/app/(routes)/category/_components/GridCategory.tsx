"use client"
import Section from '@/app/_components/section/Section'
import { useProductContext } from '@/app/context/useProductContext'
import Link from 'next/link'
import React from 'react'

function GridCategory() {
    const {categorie} = useProductContext()
  return (
    <div className="flex min-h-[calc(100vh-450px)] flex-grow w-full justify-center">
  
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 sxl:grid-cols-3 mx-3 my-[80px] gap-4">
            {categorie.map((item) => (
              
               <Link
              key={item.id}
              className="min-w-0 text-xl font-bold  text-center lg:text-start  xxl:min-w-[392px]:"
              href={`/category/${item.id}`}
            >
              {item.name}
            </Link>
                
            ))}
          </div>
        </Section>
      
    </div>
  )
}

export default GridCategory