import { FC } from "react"
import logo from "../../assets/Logo.png"
const Header: FC =() => {

  return (
    <>
    <section className="w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center pt-10 mb-4">
          <div className="flex items-center justify-center w-1/9">
            <img src={logo} alt="Logo" className="w-full" />
          </div>
          <div className="hidden md:flex w-3/5 justify-center">
            <ul className="flex items-center justify-center gap-12">
              <li>
                <a
                  href=""
                  className="text-lg font-medium text-inherit hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                
                  href=""
                  className="text-lg font-medium text-inherit hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-lg font-medium text-inherit hover:text-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-lg font-medium text-inherit hover:text-blue-500"
                >
                  Sign in
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <i className="fa-solid fa-bars block md:hidden text-lg cursor-pointer"></i>

          {/* Search Input and Icons */}
          <div className="flex w-1/3 items-center justify-center gap-5 md:gap-8">
            <div className="hidden md:flex items-center bg-gray-100 px-3 py-2">
              <form className="flex items-center gap-5 w-full">
                <input
                  required
                  placeholder="What are you looking for?"
                  type="text"
                  className="bg-transparent border-none outline-none w-full text-base placeholder-gray-500"
                />
                <button type="submit" className="bg-transparent">
                  <i className="fa-solid fa-magnifying-glass text-base cursor-pointer"></i>
                </button>
              </form>
            </div>
            <i className="fa-regular fa-heart text-lg cursor-pointer"></i>
            <i className="fa-solid fa-cart-shopping text-lg cursor-pointer"></i>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Header