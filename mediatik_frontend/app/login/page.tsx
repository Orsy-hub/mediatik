"use client"
import Logo from "@/lib/utils/Logo";
import { FormulaireConnexion } from "./FormulaireDeConnexion";

export default function LoginPage () {

    return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
            {/* Desktop */}
            <div className="hidden md:flex bg-white rounded-2xl overflow-hidden shadow-lg w-full max-w-5xl">
                <div className="w-1/2">
                    <Logo />
                </div>
                <div className="w-1/2 flex items-center justify-center p-8">
                    <FormulaireConnexion />
                </div>
            </div>

            {/* Mobile */}
            <div className="flex flex-col md:hidden w-full bg-gradient-to-b from-pink-600 to-[#1a0026] min-h-screen p-8 items-center justify-center">
                <div className="mb-10">
                <Logo />  {/* logo même look, mais on peut le simplifier si tu veux */}
                </div>
                <div className="w-full flex justify-center">
                <FormulaireConnexion />
                </div>
            </div>

    </div>
    );
}