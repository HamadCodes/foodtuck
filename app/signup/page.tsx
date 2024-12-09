import Footer from "../../components/Footer"
import Header from "../../components/Header"

export default function signup(){
    return(
        <>
        <Header />
        <div>
            <img className="pt-10" src="images/signupheader.png" alt="" />
        </div>

        <div className="flex items-center justify-center bg-white">
            <img src="images/signup.png" alt="" />
        </div>
        <Footer />
        </>
    )
}