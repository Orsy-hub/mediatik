"use client"

import { Input } from "@/components/ui/input"
import React, { FormEvent } from "react";
import { HiOutlineMail } from "react-icons/hi"

export default function InputEmailPage  ({
    email, 
    setEmail}:{
    email: string, 
    setEmail: (value: string) => void
    }) {

    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState("");

    const gmailregex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        // Réinitialisation des messages
        setSuccess("");
        setError("");

        if (!value.includes("@")) {
            setError("Il manque le caractère '@'");
            return
        }

        if (!value.includes("@gmail.com")) {
             setError("L'adresse doit se terminer par '@gmail.com'.");
            return;
        }

        if (gmailregex.test(value)) {
            setSuccess("Adresse e-mail valide !");
        }
    }

    return (
        <div className="relative">
            {/* Wapper pour éviter de bouger l'icone Email*/}
            <div className="relative">
                <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                <Input className={`relative text-white md:text-black pl-10 ${error
                ? "border-red-500 focus-visible:ring-red-500"
                : success
                ? "border-green-500 focus-visible:ring-green-500"
                : ""}`} type="email" placeholder="Adresse e-mail" value={email} onChange={handleChange}/>
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