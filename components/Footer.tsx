export default function Footer(){
    return(
        <footer className="bg-[#0d0d0d] text-white">
        <div className="flex items-center justify-center gap-56 mt-20 pb-14 max-lg:flex-col max-lg:px-5 max-lg:gap-5">
          <div>
            <img src="images/stillneedsupport.png" alt="" />
          </div>
          <div className="flex">
            <div className="flex items-center justify-around p-3 bg-[#ff9f0d] rounded text-sm">
                  <input
                    className="bg-transparent text-white outline-none w-full placeholder-white"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                  />
              </div>
                <button className="rounded p-3 text-sm text-nowrap h-full bg-white text-[#ff9f0d]">Subscribe Now</button>
          </div>
        </div>
          <div className="flex items-center justify-center">
            <div className="footerline"></div>
          </div>
        <div className="flex items-start justify-center gap-24 mt-10 mb-10 max-lg:flex-col max-lg:px-5 max-lg:gap-5">
          <img className="h-56" src="images/footeraboutus.png" alt="" />
          <img className="h-56" src="images/usefull links.png" alt="" />
          <img className="h-56" src="images/help.png" alt="" />
          <img className="h-56" src="images/recentpost.png" alt="" />
        </div>
        <img className="max-lg:hidden" src="images/footerectangle.png" alt="" />
        <div className="hidden max-lg:w-full max-lg:h-8 max-lg:z-0 max-lg:bg-[#4F4F4F] max-lg:flex max-lg:items-center max-lg:justify-center"><p className="max-lg:text-sm">Copyright © 2022 by Ayeman. All Rights Reserved.</p></div>
        </footer>
    )
}