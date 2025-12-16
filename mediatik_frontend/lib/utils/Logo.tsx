import Image from "next/image"; 

export default function Logo () {
    
    return (
        <div className=" relative flex flex-col items-center justify-center h-full bg-gradient-to-b from-pink-600 to-purple-900 text-white p-8 rounded-l-2xl">
            <Image src="/images/1.png" alt="Mediatik" width={60} height={60} />
            {/* <div className=" absolute z-10 flex items-center gap-2 mb-4">
                <h1 className="text-4xl font-bold tracking-wide">MEDIATIK</h1>
                <p className="text-lg opacity-90">Ravi de vous revoir 🎶</p>
            </div> */}
        </div>
    );
}