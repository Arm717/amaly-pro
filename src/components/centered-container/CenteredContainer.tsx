import React from 'react'

function CenteredContainer({ children, className }: { children: React.ReactNode, className?:string }) {
  return (
    <div className={`flex min-h-[calc(100vh-450px)] flex-grow w-full justify-center ${className}`}>
      {children}
    </div>
  )
}

export default CenteredContainer;