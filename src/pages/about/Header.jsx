import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='max-[390px]:w-[390px] max-[390px]:mx-auto flex flex-col justify-center items-center'>
      <Nav/>
      <div className='w-full h-[246px]'>
        <h1 className='font-normal text-[#2A254B] text-4xl text-center mt-[67px] max-[390px]:mt-[32px] max-[390px]:text-3xl max-[390px]:text-start max-[390px]:mx-auto max-[390px]:w-[342px] max-[390px]:h-[225px]'>A brand built on the love of craftmanship, <br /> quality and outstanding customer service</h1>
      </div>
    </div>
  )
}

export default Header