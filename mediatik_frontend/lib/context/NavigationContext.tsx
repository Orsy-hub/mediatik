"use client"
import { useEffect, useState, createContext, ReactNode, useContext } from "react";

type PageType = 'accueil' | 'decouverte' | 'charts' |'library' | 'favoris' |'creer';

interface NavigationContextType {
    currentPage: PageType;
    setCurrentPage: (page:PageType) => void;
}
const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
    const [currentPage, setCurrentPage] = useState<PageType>('accueil');

    return (
        <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
            { children}
        </NavigationContext.Provider>
    )
}

export default function useNavigation() {
    const context =  useContext(NavigationContext);
    if (!context) {
        throw new Error("useNavigation must be used within a NavigationProvider");
    }
    return context;
}

