"use client"
import React, { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import FormulaireInscription from "./Formulaire_inscription";
import BoutonInscriptionConnexion from "@/components/boutons/bouton_inscription/page";

export default function PageInscription () {
    const [email, setEmail] = React.useState('');
    const[password, setPassword] = React.useState('');
    const [etape, setEtape] = React.useState(1);
    const [afficherLeFormulaire, setAfficherLeFormulaire] = React.useState(false);
    

    const afficherFormulaire = () => {
        setAfficherLeFormulaire(true);
    }

    const envoiDeLemail =(e:React.FormEvent) => {
        e.preventDefault();

        if (email.trim() === "") return ;
        setEtape(2);
    }
    const envoiDesDonnees = (e:React.FormEvent) => {
        e.preventDefault();
        alert(`Inscription avec -> ${email} et mot de passe -> ${password}`);
    }
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm  rounded-2xl ">
            {
                etape === 2 && (<p className="text-violet-700 text-center">Etape 2/{etape}</p>
                )
            }
            <h2 className="text-2xl font-semibold text-center text-[#FFFF]">
                Inscription
            </h2>

            {
                afficherLeFormulaire && (
                    <FormulaireInscription etape={etape} />
                )
            }
            {
                !afficherLeFormulaire ? (
                    <BoutonInscriptionConnexion label="Inscription gratuite" variant="default" className="bg-[#691a77]" rounded="rounded-full" onclick={afficherFormulaire} />
                ) : (
                    <></>
                )
            }

            <div className="text-gray-500 text-center">OU</div>
            <Button type="button" variant="outline" className="flex items-center justify-center gap-2 h-12 text-[#ffff] rounded-full bg-[#545454] hover:bg-gray-300 transition border-none">
                <FcGoogle size={20}/> S’inscrire avec Google
            </Button>

            <Button type="button" variant="outline" className="flex items-center justify-center gap-2 h-12 text-[#ffff] rounded-full bg-[#545454] hover:bg-gray-300 transition border-none">
                <BsFacebook className=" text-blue-600" size={20} /> S’inscrire avec Facebook
            </Button>

            <p className="text-sm text-center text-[#FFFF]">
                Déjà un compte ?{" "}
                <a href="#" className="text-purple-600 font-semibold hover:underline">
                Se connecter
                </a>
            </p>
                   
        </div>
    );
}