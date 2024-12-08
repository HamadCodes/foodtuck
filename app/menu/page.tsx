import Footer from "../../components/Footer"
import Header from "../../components/Header"

export default function menu(){
    return(
        <>
        <Header />
        <div>
            <img className="max-sm:pt-36" src="images/ourmenu.png" alt="" />
        </div>

        <div className="flex flex-col items-center justify-center gap-5 mt-20 max-sm:mt-5">
        <img className="max-sm:px-5" src="images/chooseandpick.png" alt="" />
        <div className="flex justify-center items-center gap-20 font-bold max-sm:flex-col max-sm:px-5 max-sm:gap-5 max-sm:hidden">
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
          <button>Dessert</button>
          <button>Drink</button>
          <button>Snack</button>
          <button>Suops</button>
        </div>
        <div className="flex justify-center items-center gap-8 max-sm:flex-col max-sm:px-5">
          <img className="max-sm:hidden max-sm:px-5" src="images/menuitemimage.png" alt="" />
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
        <Footer />
        </>
    )
}