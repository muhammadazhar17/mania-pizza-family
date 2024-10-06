// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
export default function Header(){
    return(
  <header className="flex justify-between">
  
    <div>
      <Image src="/logo.png" alt="logo" width={150} height={150} className="flex ml-12
      "/>
    </div>
    
   <div>
    <nav>
        <ul className="flex gap-10 mt-4 mr-16 text-orange-400 fonts-bold text-2xl">
    
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/menu">Menu</Link>
            </li><li>
                <Link href="/specialcoupons">Special & Coupons</Link>
            </li><li>
                <Link href="/contact-us">Conatact us</Link>
            </li>
        </ul>
    </nav>
   </div>
  
  </header>
    );
};