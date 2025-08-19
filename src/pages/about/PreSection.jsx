import React from 'react'
import bimg from '../assets/bimg.png'
import bimg2 from '../assets/bimg2.png'

const PreSection = () => {
  return (
    <section className="w-[1440px] mx-auto max-[390px]:w-[390px]">
      <div className="w-full flex items-center  max-[390px]:flex-col max-[390px]:px-[24px]">
        <div className="w-[720px] px-[58px] pt-[72px] pb-[48px] max-[390px]:w-[342px] max-[390px]:px-[24px] max-[390px]:pt-[24px] max-[390px]:pb-[24px]">
          <h1 className="font-normal text-[#2A254B] text-3xl mb-[25px] max-[390px]:mb-[12px] max-[390px]:text-xl">From a studio in London to a global brand with over 400 outlets</h1>
          <p className="font-normal text-[#2A254B] text-[18px] mb-[40px] max-[390px]:text-[14px] max-[390px]:mb-[24px]">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br /> <br /> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
          <button className="w-[150px] h-[56px] bg-[#F9F9F9] border-1 max-[390px]:w-[342px] max-[390px]:ml-[-25px] max-[390px]:h-[48px]">Get in touch</button>
        </div>

        <img src={bimg} alt="brand" className="max-[390px]:w-full max-[390px]:h-auto"/>
      </div>

      <div className="w-full flex items-center  max-[390px]:flex-col max-[390px]:px-[24px]">
            <img src={bimg2} alt="brand" className="max-[390px]:w-full max-[390px]:h-auto"/>
        <div className="w-[720px] px-[58px] pt-[72px] pb-[48px] max-[390px]:w-[342px] max-[390px]:px-[24px] max-[390px]:pt-[24px] max-[390px]:pb-[24px]">
          <h1 className="font-normal text-[#2A254B] text-3xl mb-[25px] max-[390px]:mb-[12px] max-[390px]:text-xl">Our service isn’t just personal, it’s actually hyper personally exquisite</h1>
          <p className="font-normal text-[#2A254B] text-[18px] mb-[40px] max-[390px]:text-[14px] max-[390px]:mb-[24px]">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br /> <br /> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
          <button className="w-[150px] h-[56px] border-1 bg-[#F9F9F926] max-[390px]:w-[342px] max-[390px]:ml-[-25px] max-[390px]:h-[48px]">Get in touch</button>
        </div>
      </div>
    </section>
  )
}

export default PreSection
