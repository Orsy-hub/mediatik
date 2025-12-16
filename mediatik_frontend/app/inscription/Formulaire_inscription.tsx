"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { FormEvent } from "react";
import { HiEye, HiEyeOff, HiLockClosed, HiOutlineMail } from "react-icons/hi";
import BoutonInscriptionConnexion from "@/components/boutons/bouton_inscription/page";
import InputEmailPage from "@/components/input/InputEmail/page";
import InputPassWord from "@/components/input/inputPassWord/page";

interface FormulaireInscrProps {
    etape?: number,
}

export default function FormulaireInscription ({
    etape = 1
}:FormulaireInscrProps,
) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [estVisible, setEstVisible] = React.useState(false);
    const [etapeLocale, setEtapeLocale] = React.useState( etape );

    const envoiDeLemail = (e:FormEvent) => {
        e.preventDefault();
        if (email.trim() === "" ) return;
        setEtapeLocale(2);
    }

    const envoiDesDonnees = (e:FormEvent) => {
        e.preventDefault();
        alert(`Inscription avec Email ${email} et le mot de passe ${password}`)
    }

    return (
        <form className="flex flex-col gap-4 w-full max-w-sm p-6  rounded-2xl shadow-md">
            <h3 className="text-[#ffff] font-medium">
                Étape 2/{ etapeLocale}
            </h3>
            <InputEmailPage email={email} setEmail={setEmail}/>

            {/* Champ de mot de passe visible à partir de l'étape 2 */}
            { etapeLocale === 2 &&(

                <InputPassWord password={password} setPassword={setPassword}/>
            )}
            {/* Bouton Continuer ou S'incrire selon l'étape de l'inscription */}
            <BoutonInscriptionConnexion type="submit" variant="default" className="ounded-full h-12" onclick={
                etapeLocale === 1 ? envoiDeLemail : envoiDesDonnees}
                label={etapeLocale === 1 ? "Continuer" : "S'incrire"}
            />
        </form>
    );
}
