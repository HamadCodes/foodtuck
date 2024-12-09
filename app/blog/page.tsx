import Footer from "../../components/Footer"
import Header from "../../components/Header"

export default function blog(){
    return(
        <>
        <Header />
        <div>
            <img className="max-lg:pt-36" src="images/blogheader.png" alt="" />
        </div>

        <div className="bg-white py-10 flex justify-center items-start gap-4">
            <div className="flex flex-col items-center justify-center gap-5">
                <img src="images/Blogcard_1.png" alt="" />
                <img src="images/Blogcard_2.png" alt="" />
                <img src="images/Blogcard_3.png" alt="" />
                <img src="images/Blogcard_4.png" alt="" />
            </div>
            <div>
                <img src="images/Blogsidebar.png" alt="" />
            </div>
        </div>
        
        <Footer />
        </>
    )
}