import React from 'react'

interface ISection {
  className?:string;
  children: React.ReactNode;
}

function Section({children,className}:ISection) {
  return (
    <section className= {`flex flex-col w-[1380px] ${className}`}>{children}</section>
  )
}

export default Section