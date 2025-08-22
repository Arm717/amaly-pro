import React from 'react'

function CenteredContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-450px)] flex-grow w-full justify-center">
      {children}
    </div>
  )
}

export default CenteredContainer;