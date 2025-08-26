import { assets } from "../home/assets/assets"

const PreFooter = () => {
  return (
    <div>
 <div 
  className="relative w-full max-w-[1440px] h-[704px] py-[107px] bg-cover bg-center bg-no-repeat max-[390px]:h-[370px] max-[390px]:py-6 mx-auto max-[390px]:max-w-[390px]"
  style={{ backgroundImage: `url(${assets.extra_content_img})` }}>

  <div className="w-[494px] h-[111px] mx-auto max-[390px]:w-[360px] max-[390px]:h-auto">
    <h2 className="font-normal text-3xl text-white text-center  max-[390px]:text-xl">Join the club and get the benefits</h2>

    <p className="font-normal text-2xl text-center text-white mt-[12px] max-[390px]:text-base">
      Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
    </p>
      <div className='my-[30px] flex gap-9 max-[390px]:flex-col max-[390px]:gap-4'>
  <label class="flex items-center gap-2 text-white font-normal text-base cursor-pointer">
    <input type="radio" name="choice" class="w-4 h-4 text-[#2A254B]" />
    <span class="text-sm">Exclusive offers</span>
  </label>
    <label class="flex items-center gap-2 text-white font-normal text-base cursor-pointer">
    <input type="radio" name="choice" class="w-4 h-4 text-[#2A254B]" />
    <span class="text-sm">Free events</span>
  </label>
    <label class="flex items-center gap-2 text-white font-normal text-base cursor-pointer">
    <input type="radio" name="choice" class="w-4 h-4 text-[#2A254B]" />
    <span class="text-sm">Large discounts</span>
  </label>
        </div>
    <div className="w-[472px] h-[56px] flex items-center max-[390px]:w-[360px] max-[390px]:mb-[32px] max-[390px]:mt-6">
      <input 
        type="text" 
        placeholder="your@email.com" 
        className="h-[56px] px-2 w-[354px] bg-white max-[390px]:h-[44px] max-[390px]:w-[240px]" 
      />
      <button className="w-[118px] h-[56px] bg-[#2A254B] text-white max-[390px]:w-[100px] max-[390px]:h-[44px] max-[390px]:text-sm">
        Sign up
      </button>
    </div>
  </div>
</div>



      <div className="footer sm:footer-horizontal bg-[#2A254B] text-base-content p-10 max-[390px]:pt-[40px] max-[390px]:flex max-[390px]:flex-wrap max-[390px]:mx-auto max-[390px]:w-[390px] max-[390px]:gap-[90px]">
  <nav className="max-w-[108px] max-[390px]:w-[108px]">
    <h6 className="footer-title">Categories</h6>
    <a className="link link-hover">Crockery</a>
    <a className="link link-hover">Furniture</a>
    <a className="link link-hover">Homeware</a>
    <a className="link link-hover">Plant pots</a>
    <a className="link link-hover">Tableware</a>
    <a className="link link-hover">Cutlery</a>
  </nav>
  <nav>
    <h6 className="footer-title">Menu</h6>
    <a className="link link-hover">New arrivals</a>
    <a className="link link-hover">Best sellers</a>
    <a className="link link-hover">Popular this week</a>
    <a className="link link-hover">Sale</a>
    <a className="link link-hover">All products</a>
  </nav>
  <nav>
    <h6 className="footer-title">Our company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Vacancies</a>
    <a className="link link-hover">Contact us</a>
    <a className="link link-hover">Returns policy</a>
    <a className="link link-hover">Privacy </a>
  </nav>
  <form>
    <h6 className="footer-title">Join our mailing list</h6>
    <fieldset className="w-80">
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item bg-white text-black">Sign up</button>
      </div>
    </fieldset>
  </form>
</div>
<footer className="footer sm:footer-horizontal bg-[#2A254B] border-t-2 max-[390px]:mx-auto max-[390px]:w-[390px] text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end max-[390px]:hidden">
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </nav>
</footer>
    </div>
  )
}

export default PreFooter