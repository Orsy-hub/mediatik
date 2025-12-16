"use client"

import { Input } from "@/components/ui/input"
import React, { FormEvent } from "react";
import { HiEye, HiEyeOff, HiLockClosed, HiOutlineMail } from "react-icons/hi"

export default function InputPassWord  ({
    password, 
    setPassword}:{
    password: string, 
    setPassword: (value: string) => void
    }) {

    const [estVisible, setEstVisible] = React.useState(false);
    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState("");

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);

        // Réinitialisation des messages
        setSuccess("");
        setError("");

        if (value.length < 8) {
            setError("La taille du mot de passe doit être au moins de 8 caractères");
            return
        }

        
        if (!/[A-Za-z]/.test(value)) {
        setError("Le mot de passe doit contenir au moins une lettre.");
        return;
        }

        if (!/\d/.test(value)) {
            setError("Le mot de passe doit contenir au moins un chiffre.");
            return;
        }

        // Validation finale
        if (passwordRegex.test(value)) {
        setSuccess("Mot de passe valide ✔️");
        }
    }

    return (
        <div className="relative">
            {/* Wapper pour éviter de bouger l'icone Email*/}
            <div className="relative">
                <HiLockClosed className="absolute left-3 translate-y-1/2 text-gray-400" />
                <Input type={ estVisible ? 'text' : 'password'}
                    className={` text-white md:text-black relative pl-10 ${error
                    ? "border-red-500 focus-visible:ring-red-500"
                    : success
                    ? "border-green-500 focus-visible:ring-green-500"
                    : ""}`}
                    placeholder="Mot De Passe" onChange={handleChange}/>
                {
                    estVisible ? (
                        <HiEye className="absolute text-gray-400 right-3 top-3" onClick={ () => setEstVisible(false)}/>
                    ) : (
                        <HiEyeOff className="absolute text-gray-400 right-3 top-3" onClick={ () => setEstVisible(true)} />
                    ) 
                }
            </div>

            {/* Message d'erreur */}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            {/* Message de validation */}
            {
                success && <p className="text-green-500 text-sm mt-1">{success}</p>
            }
        </div>
    );
    
}