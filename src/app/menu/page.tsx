import Image from"next/image";
export default function Header(){
    return(
        <div className="flex items-center ml-20 mt-5">
            
            <Image src="/menu.png" alt="menu" width={1200} height={900}/>
        </div>

    );
};