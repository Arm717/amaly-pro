import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className="flex items-end justify-center w-full h-[378px] box-border  bg-[url(/footer.png)]  bg-[length:100%_100%] bg-center bg-no-repeat">
      <div className='flex items-center w-[1450px] border border-black h-[300px]'>
        <Image width={161} height={289} src="/logo.png" alt='footerLogo' />
      </div>
    </div>
  )
}

export default Footer