import Footer from "../components/Footer"
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className="relative bg-[#0d0d0d] text-white">
      <div>
        <header>
          <div className="hero">
            <div className="flex items-center justify-center text-2xl font-bold pt-6">
              <h1>
                <span className="text-[#FF9F0D]">Food</span>tuck
              </h1>
            </div>
            <div className="flex flex-row items-center justify-around p-4 max-lg:flex-col gap-4">
              <div className="flex flex-wrap justify-center items-center gap-5 text-center">
                <div className="relative flex flex-col items-center">
                  <p>Home</p>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full absolute -bottom-2"></div>
                </div>
                <Link href="/menu">Menu</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/pages">Pages</Link>
                <Link href="/about">About</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/contact">Contact</Link>
              </div>
              <div className="flex items-center justify-center gap-2 mt-4 md:mt-0">
                <div className="flex items-center justify-around p-2 searchbox rounded-3xl">
                  <input
                    className="bg-transparent text-white outline-none w-full"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search..."
                  />
                  <img src="images/magnifinglass.png" className="w-5 h-5" alt="" />
                </div>
                <Link href="/cart"> <img src="images/Handbag.png" className="w-6 h-6" alt="" /> </Link>
                <Link href="/signup"> <img src="images/login.png" className="w-6 h-6" alt="" /> </Link>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-5 mt-5 pb-5 max-lg:flex-col">
              <div className="flex items-center justify-center gap-4">
              <div>
                <img src="images/herosocials.png" className="h-30 md:h-10 hidden" alt="" />
              </div>
              <div className="text-center md:text-left">
                <img src="images/herotext.png" className="h-24 md:h-48 mb-4" alt="" />
                <button className="px-6 py-2 rounded-3xl bg-[#FF9F0D] max-lg:mr-5">
                  See More
                </button>
              </div>
              </div>
              <div>
                <img src="images/heroimage.png" className="h-60 md:h-[500px]" alt="" />
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="flex items-center justify-center mt-20 pb-5 gap-4 max-lg:flex-col max-lg:px-5">
        <div>
        <img src="images/aboutustext.png" alt="" />
        <button className="px-6 py-2 mt-5 rounded-3xl bg-[#FF9F0D]">See More</button>
        </div>
        <div> <img src="images/aboutusimages.png" alt="" /></div>
      </div>

      <div className="mt-20">
        <div className="flex items-center justify-center mb-10 max-lg:px-5">
          <img src="images/foodcategory.png" alt="" />
          </div>
        <div className="flex items-center justify-center gap-8 max-lg:flex-col max-lg:px-5">
          <img src="images/foodcategory1.png" alt="" />
          <img src="images/foodcategory2.png" alt="" />
          <img src="images/foodcategory3.png" alt="" />
          <img src="images/foodcategory4.png" alt="" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 mt-32 max-lg:flex-col max-lg:px-5">
        <img src="images/whychooseusimages.png" alt="" />
        <img src="images/whychooseustext.png" alt="" />
      </div>

      <div className="mt-28 max-lg:mt-10">
        <img src="images/clients.png" alt="" />
      </div>

      <div className="flex flex-col items-center justify-center gap-5 mt-20 max-lg:mt-5">
        <img className="max-lg:px-5" src="images/chooseandpick.png" alt="" />
        <div className="flex justify-center items-center gap-20 font-bold max-lg:flex-col max-lg:px-5 max-lg:gap-5 max-lg:hidden">
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
          <button>Dessert</button>
          <button>Drink</button>
          <button>Snack</button>
          <button>Suops</button>
        </div>
        <div className="flex justify-center items-center gap-8 max-lg:flex-col max-lg:px-5">
          <img className="max-lg:hidden max-lg:px-5" src="images/menuitemimage.png" alt="" />
          <div className="flex flex-col gap-5">
            <img src="images/LettuceLeaf.png" alt="" />
            <img src="images/FreshBreakfast.png" alt="" />
            <img src="images/MildButter.png" alt="" />
            <img src="images/MildButter.png" alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <img src="images/GlowCheese.png" alt="" />
            <img src="images/ItalianPizza.png" alt="" />
            <img src="images/SliceBeef.png" alt="" />
            <img src="images/MashroomPizza.png" alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-20 justify-center items-center max-lg:px-5">
        <img src="images/meetourchef.png" alt="" />
        <div className="flex items-center justify-center gap-4 max-lg:flex-col">
          <img src="images/Chef1.png" alt="" />
          <img src="images/Chef2.png" alt="" />
          <img src="images/Chef3.png" alt="" />
          <img src="images/Chef4.png" alt="" />
        </div>
        <button className="px-8 py-3 mt-5 rounded-3xl bg-transparent border-2 border-[#FF9F0D]">See More</button>
      </div>

      <div className="flex items-center justify-center mt-24">
        <img src="images/Testimonials.png" alt="" />
      </div>

      <div className="activeprocess flex justify-end items-center h-96 w-full">
        <div className="mr-6">
          <img src="images/activeprocesstext.png" alt="" />
          <div className="flex items-center justify-end gap-4">
            <button className="px-8 py-3 mt-5 rounded-3xl bg-transparent border-2 border-[#FF9F0D]">See More</button>
              <div className="flex items-center justify-center gap-4">
                <button className="px-3 py-3 mt-5 rounded-full bg-[#FF9F0D]"><img src="images/Play.png" alt="" /></button>
                <p className="pt-5">Play Now</p> 
              </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-20 max-lg:px-5">
        <img src="images/Blogpost.png" alt="" />
        <div className="flex items-center justify-center gap-6 mt-10 max-lg:flex-col">
          <img src="images/Blogcard1.png" alt="" />
          <img src="images/Blogcard2.png" alt="" />
          <img src="images/Blogcard3.png" alt="" />
        </div>
      </div>

      <Footer />

      <img className="absolute bottom-0 right-0 w-44 max-lg:w-24" src="images/footergrass.png" alt="" />
  </div>
    </>
  );
}
