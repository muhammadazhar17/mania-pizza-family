import Image from "next/image";
import Link from "next/link";
export default function Home(){
  return(
   
      
      <main className="flex mt-28 ">
        <section className="flex gap-9 items-center">
          <div className="flex-1 mt-22 ml-16">
            <h1 className="flex    font-bold font-Quicksand text-5xl
            text-orange-400">
              Pizza family
            </h1>
            <h2 className="flex text-orange-900  mt-9 font-semibold">
            people disappoint,but  <br />  pizza never does.
            </h2>
            <button className="flex bg-orange-600 text-white py-2 mt-4 px-4 ">
             <Link href="/menu">Try Now</Link>
            </button>
          </div>

          <div className="flex-1">
              <Image src="/hero1.png" alt="pizza" width={900} height={700}/>
          </div>

        </section>
      </main>
     
  );
};
 