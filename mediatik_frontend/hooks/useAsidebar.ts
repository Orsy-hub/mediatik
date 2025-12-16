// hooks/useSidebar.ts
"use client";

import { useState, useEffect } from "react";

export function useSidebar() {
    const [esOuvert, setEsOuvert] = useState(true);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const handleResize = () => {
            if (mediaQuery.matches) {
                setEsOuvert(true); // TOUJOURS ouvert sur desktop
            }
        };

        handleResize(); 
        mediaQuery.addEventListener("change", handleResize);

        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    return {
        esOuvert,
        open: () => setEsOuvert(true),
        fermerMenu: () => setEsOuvert(false),
        toggle: () => setEsOuvert((v) => !v),
    };
}
