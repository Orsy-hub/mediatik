"use client"
import React, { useState } from "react"

import BoutonInscriptionConnexion from "@/components/boutons/bouton_inscription/page";
import BoutonResauxSociau from "@/components/boutons/bouton resaux sociau/page";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import InputEmailPage from "@/components/input/InputEmail/page";


export function FormulaireConnexion () {

    const [email, setEmail] = useState('');
    const envoiDesDonnees = (e:React.FormEvent) => {
        e.preventDefault();
        alert(`Connexion avec -> ${email}`)
    }
    return (
        <form onSubmit={envoiDesDonnees} className="flex flex-col gap-4 w-full max-w-sm p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800">
                Connexion
            </h2>

            <InputEmailPage email={email} setEmail={setEmail}/>

            <BoutonInscriptionConnexion type="submit" label="Connexion" variant="default"/>

            <div className="text-center text-gray-500">ou</div>

            <BoutonResauxSociau label="Connexion avec Google" icon={<FcGoogle size={20}/>}  />

            <BoutonResauxSociau label="Connexion avec Facebook" icon={<BsFacebook className="text-blue-800" size={20}/>} />
            <p className="text-sm text-center text-gray-500">
                Pas de compte ?{" "}
                <a href="#" className="text-purple-600 font-semibold hover:underline">
                M’inscrire
                </a>
            </p>
        </form>
    );
}
