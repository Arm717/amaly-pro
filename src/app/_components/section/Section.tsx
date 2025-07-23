import React from 'react'

interface ISection {
  children: React.ReactNode;
}

function Section({children}:ISection) {
  return (
    <section className= 'flex flex-col w-[1380px] '>{children}</section>
  )
}

export default Section