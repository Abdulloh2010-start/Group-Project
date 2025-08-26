import { assets } from "../home/assets/assets";

const Nav = () => {
  return (
    <nav className="w-full h-[134px] px-[28px] font-normal text-base text-[#726E8D] py-[26px] max-[390px]:w-[390px] max-[390px]:h-[69px]">
      <div className="flex justify-between items-center">
        <h1 className="font-normal text-2xl text-[#22202E]">Avion</h1>
        <div>
          <ul className='flex ml-[954px] items-center gap-[32px] max-[390px]:hidden'>
            <li>About us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex items-center gap-[16px] max-[390px]:hidden">
          <img src={assets.chair} alt="" />
          <img src={assets.chair} alt="" />
          <img src={assets.chair} alt="" />
        </div>
        <img src={assets.chair} alt="" className='hidden max-[390px]:block'  />
      </div>

      <div className="w-[675px] my-[20px] h-[22px] mx-auto max-[390px]:hidden">
        <ul className="flex gap-[44px]">
          <li>Plant pots</li>
          <li>Ceramics</li>
          <li>Tables</li>
          <li>Chairs</li>
          <li>Crockery</li>
          <li>Tableware</li>
          <li>Cutlery</li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
