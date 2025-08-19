import React from 'react'
import Delivery from '../assets/Delivery.png'
import tick from '../assets/tick.png'
import Purchase from '../assets/Purchase.png'
import Sprout from '../assets/Sprout.png'

const Section1 = () => {
  return (
    <section className="w-[1440px] mx-auto max-[390px]:w-[390px]">
      <div className="w-[1286px] text-[#2A254B] mx-auto py-[80px] max-[390px]:w-[342px] max-[390px]:py-[40px]">
        <h2 className="font-normal text-[24px] text-center max-[390px]:text-[20px]">What makes our brand different</h2>
        <div className="flex gap-[22px] mt-[36px] max-[390px]:flex-col max-[390px]:gap-[16px]">

        <div className="w-[305px] p-[48px] max-[390px]:w-[342px] max-[390px]:p-[24px]">
            <img src={Delivery} alt="" />
            <h3 className="my-[12px] text-[20px] font-normal max-[390px]:text-[18px]">Next day as standard</h3>
            <p className="text-base font-normal max-[390px]:text-[14px]">Order before 3pm and get your order the next day as standard</p>
          </div>

          <div className="w-[305px] p-[48px] max-[390px]:w-[342px] max-[390px]:p-[24px]">
            <img src={tick} alt="" />
            <h3 className="my-[12px] text-[20px] font-normal max-[390px]:text-[18px]">Made by true artisans</h3>
            <p className="text-base font-normal max-[390px]:text-[14px]">Order before 3pm and get your order the next day as standard</p>
          </div>

          <div className="w-[305px] p-[48px] max-[390px]:w-[342px] max-[390px]:p-[24px]">
            <img src={Purchase} alt="" />
            <h3 className="my-[12px] text-[20px] font-normal max-[390px]:text-[18px]">
              Unbeatable prices</h3>
            <p className="text-base font-normal max-[390px]:text-[14px]">Order before 3pm and get your order the next day as standard</p>
          </div>

          <div className="w-[305px] p-[48px] max-[390px]:w-[342px] max-[390px]:p-[24px]">
            <img src={Sprout} alt="" />
            <h3 className="my-[12px] text-[20px] font-normal max-[390px]:text-[18px]">Recycled packaging</h3>
            <p className="text-base font-normal max-[390px]:text-[14px]">Order before 3pm and get your order the next day as standard</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section1
