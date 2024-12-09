import Link from 'next/link'


export default function Header(){
    return(
        <div className="w-full bg-[#0D0D0D] h-16 text-white flex items-center justify-around absolute max-lg:flex-col max-lg:h-auto max-lg:justify-center max-lg:gap-5 max-lg:py-5">
            <Link href="/home"><div><span className="text-[#FF9F0D] font-bold">Food</span>tuck</div></Link>
            <div className='flex items-center justify-center gap-4'>
                <Link href="/menu">Menu</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/pages">Pages</Link>
                <Link href="/about">About</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/contact">Contact</Link></div>
            <div className='flex items-center justify-center gap-4'>
            <Link href="/cart"> <img src="images/Handbag.png" className="w-6 h-6" alt="" /> </Link>
            <Link href="/signup"> <img src="images/login.png" className="w-6 h-6" alt="" /> </Link>
            </div>
        </div>
    )
}