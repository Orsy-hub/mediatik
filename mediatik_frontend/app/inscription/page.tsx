import Logo from "@/lib/utils/Logo";
import PageInscription from "./inscription";

export default function PageAccueilInscription () {

    return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
            {/* Desktop */}
            <div className="hidden md:flex md:bg-white rounded-2xl overflow-hidden shadow-lg w-full max-w-5xl">
                <div className="w-1/2">
                    <Logo />
                </div>
                <div className="w-1/2 flex items-center justify-center p-8">
                    <PageInscription />
                </div>
            </div>

            {/* Mobile */}
            <div className="flex flex-col md:hidden w-full bg-gradient-to-b from-pink-600 to-[#1a0026] min-h-screen p-8 items-center justify-center">
                <div className="mb-10">
                    <Logo />  {/* logo même look, mais on peut le simplifier si tu veux */}
                </div>

                    <p className="text-gray-200 text-sm max-w-xs mb-8">
                        Découvrez la musique autrement. Rejoignez vos artistes préférés et explorez
                        de nouveaux talents dès aujourd’hui.
                    </p>
                <div className="w-full flex justify-center">
                    <PageInscription />
                </div>
            </div>
    </div>
    );
}