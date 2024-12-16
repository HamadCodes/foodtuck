import Footer from "../../components/Footer"
import Header from "../../components/Header"

export default function menu(){
    return(
        <>
        <Header />
        <div>
            <img className="max-lg:pt-36" src="images/ourmenu.png" alt="" />
        </div>

      <div className="bg-white flex flex-col justify-center items-center gap-24 py-32 max-lg:px-8 max-lg:py-8 max-lg:gap-12">

        <div className="flex items-center justify-center gap-10 max-lg:flex-col">
          <img src="images/ourmenupic1.png" alt="" />
          <img src="images/ourmenutext1.png" alt="" />
        </div>

        <div className="flex items-center justify-center gap-10 max-lg:flex-col">
          <img src="images/ourmenutext2.png" alt="" />
          <img src="images/ourmenupic2.png" alt="" />
        </div>

        <img src="images/ourmenucustomers.png" alt="" />

        <div className="flex items-center justify-center gap-10 max-lg:flex-col">
          <img src="images/ourmenupic3.png" alt="" />
          <img src="images/ourmenutext3.png" alt="" />
        </div>

        <div className="flex items-center justify-center gap-10 max-lg:flex-col">
          <img src="images/ourmenutext4.png" alt="" />
          <img src="images/ourmenupic4.png" alt="" />
        </div>

      </div>

        <Footer />
        </>
    )
}