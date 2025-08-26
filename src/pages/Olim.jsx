function Olim() {
  return (
    <div className="min-h-screen font-sans text-gray-900 flex flex-col">
      <header className="border-b">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-6">
            <button>
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <h1 className="text-xl font-medium">Avion</h1>

          <div className="flex items-center space-x-6">
            <button>
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 3h18l-2 13H5L3 3z" />
                <path d="M16 21a2 2 0 104 0 2 2 0 00-4 0zM4 21a2 2 0 104 0 2 2 0 00-4 0z" />
              </svg>
            </button>
            <button>
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>

        <nav className="flex justify-center space-x-8 py-3 text-sm text-gray-700">
          <a href="#">Plant pots</a>
          <a href="#">Ceramics</a>
          <a href="#">Tables</a>
          <a href="#">Chairs</a>
          <a href="#">Crockery</a>
          <a href="#">Tableware</a>
          <a href="#">Cutlery</a>
        </nav>
      </header>

      <div className="h-48 bg-[url('public/Page Headers (1).png')] bg-cover bg-center"></div>

      <main className="px-8 py-12 flex gap-8 flex-1">
        <aside className="w-1/4 space-y-8 text-sm">
          <div>
            <h2 className="font-medium mb-3">Product type</h2>
            <div className="space-y-2">
              {["Furniture", "Homeware", "Sofas", "Homeware", "Light fittings", "Accessories"].map((item, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked={item === "Homeware"} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-medium mb-3">Price</h2>
            <div className="space-y-2">
              {["0 - 100", "101 - 250", "250 +"].map((item, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-medium mb-3">Designer</h2>
            <div className="space-y-2">
              {["Robert Smith", "Liam Gallagher", "Biggie Smalls", "Thom Yorke"].map((item, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

<section className="flex-1">
          <h2 className="text-2xl font-light mb-8">All products</h2>
          <div className="flex flex-wrap gap-8">
            {[
              { img: "public/Photo.png", title: "The Dandy chair", price: "£250" },
              { img: "public/Photo (1).png", title: "The Dandy chair", price: "£250" },
              { img: "public/Photo (2).png", title: "The Dandy chair", price: "£250" },
              { img: "public/Photo (3).png", title: "The Dandy chair", price: "£250" },
              { img: "public/Photo (4).png", title: "The Dandy chair", price: "£250" },
              { img: "public/Photo (5).png", title: "The Dandy chair", price: "£250" },
              { img: "public/Photo (6).png", title: "The Dandy chair", price: "£250" },
              { img: "public/Photo (7).png", title: "The Dandy chair", price: "£250" },
              { img: "public/Photo (8).png", title: "The Dandy chair", price: "£250" },
            ].map((item, i) => (
              <div key={i} className="w-[30%] min-w-[200px]">
                <img src={item.img} alt="" className="w-full h-80 object-cover" />
                <h3 className="mt-4 text-base">{item.title}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#2A254B] text-white px-8 py-12">
        <div className="flex flex-wrap justify-between gap-12">
          <div>
            <h3 className="mb-4 font-medium">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">New arrivals</a></li>
              <li><a href="#">Best sellers</a></li>
              <li><a href="#">Recently viewed</a></li>
              <li><a href="#">Popular this week</a></li>
              <li><a href="#">All products</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Crockery</a></li>
              <li><a href="#">Furniture</a></li>
              <li><a href="#">Homeware</a></li>
              <li><a href="#">Plant pots</a></li>
              <li><a href="#">Chairs</a></li>
              <li><a href="#">Crockery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Our company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">About us</a></li>
              <li><a href="#">Vacancies</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Returns policy</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-[250px]">
            <h3 className="mb-4 font-medium">Join our mailing list</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 bg-white/20 text-white placeholder-gray-300 focus:outline-none"
              />
              <button className="bg-white text-[#2A254B] px-4 py-2 font-medium">
                Sign up
              </button>
            </div>
          </div>
        </div>

<div className="border-t border-white/20 mt-12 pt-6 flex flex-wrap justify-between items-center gap-6 text-sm">
          <p>Copyright 2022 Avion LTD</p>
          <div className="flex space-x-4">
            <a href="#"><svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M4.98 3C3.34 3 2 4.34 2 5.98c0 1.64 1.34 2.98 2.98 2.98 1.64 0 2.98-1.34 2.98-2.98C7.96 4.34 6.62 3 4.98 3zM2 21h6V9H2v12zM9 9h5.5v1.71h.08c.77-1.38 2.64-2.84 5.42-2.84 5.79 0 6.86 3.81 6.86 8.76V21h-6v-6.33c0-1.51-.03-3.46-2.11-3.46-2.11 0-2.43 1.65-2.43 3.35V21h-6V9z"/></svg></a>
            <a href="#"><svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H8.08v-2.89h2.36V9.41c0-2.34 1.4-3.63 3.54-3.63 1.03 0 2.1.18 2.1.18v2.3h-1.18c-1.17 0-1.54.73-1.54 1.48v1.78h2.62l-.42 2.89h-2.2v6.99C18.34 21.12 22 16.99 22 12z"/></svg></a>
            <a href="#"><svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.07 8.26 8.83v-6.24H8.89v-2.59h2.41V9.84c0-2.39 1.43-3.7 3.62-3.7 1.05 0 2.15.19 2.15.19v2.36h-1.21c-1.19 0-1.56.74-1.56 1.5v1.78h2.65l-.42 2.59h-2.23v6.24c4.66-.76 8.26-4.42 8.26-8.83 0-5.5-4.46-9.96-9.96-9.96z"/></svg></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Olim;