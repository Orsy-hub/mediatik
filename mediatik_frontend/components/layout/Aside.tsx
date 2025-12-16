
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "@/lib/data";
import Image from "next/image";
import { Settings, User } from "lucide-react";
import useNavigation from "@/lib/context/NavigationContext";

interface AsideProps {
    esOuvert: boolean;
    fermerMenu: () => void;
}

export const Aside = ({ esOuvert, fermerMenu }: AsideProps) => {

    const {currentPage, setCurrentPage} = useNavigation();

    const cliquerMenu = (pageId: string) => {
        setCurrentPage(pageId as any);
        // Fermer le sidebar sur mobile après le clic
        if (window.innerWidth < 1024) close();
    }
    
    return (
        <>
            {/* Overlay mobile */}
            <AnimatePresence>
                {esOuvert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={fermerMenu}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(e, info) => {
                    if (info.offset.x < -120) close();
                }}
                initial={{ x: -260, opacity: 0 }}
                animate={{ 
                    x: esOuvert ? 0 : -260, 
                    opacity: 1 
                }}
                exit={{ x: -260, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="
                    fixed lg:relative 
                    w-64 h-full 
                    flex flex-col 
                    bg-black/40 backdrop-blur-lg 
                    border-r border-white/5
                    shadow-xl shadow-black/50 
                    z-50
                "
            >
                {/* Logo */}
                <div className="p-6 border-b border-white/5">
                    <motion.div 
                        whileHover={{ scale: 1.03 }}
                        className="flex items-center gap-3"
                    >
                        <Image 
                            src="/images/1.png" 
                            alt="Logo" 
                            width={34} 
                            height={34}
                            className="rounded-lg"
                        />

                        <span className="text-xl font-bold bg-gradient-to-r from-[#A00097] to-[#D000B3] bg-clip-text text-transparent">
                            Mediatik
                        </span>
                    </motion.div>
                </div>

                {/* Menu */}
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-hide">
                    {menuItems.map((item, index) => {
                        const isActive = currentPage === item.page;
                        
                        return (
                            <motion.button
                                key={item.id}
                                onClick={() => cliquerMenu(item.page)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ 
                                    x: 4, 
                                    backgroundColor: isActive 
                                        ? "rgba(160, 0, 151, 0.2)" 
                                        : "rgba(160, 0, 151, 0.1)" 
                                }}
                                whileTap={{ scale: 0.97 }}
                                className={`
                                    w-full flex items-center gap-3 px-4 py-3 rounded-lg 
                                    transition-all duration-200
                                    ${isActive
                                        ? "bg-gradient-to-r from-[#A00097]/20 to-[#D000B3]/20 text-white"
                                        : "text-white/60 hover:text-white"
                                    }
                                `}
                            >
                                <item.icon className="w-5 h-5" />
                                <span className="text-sm font-medium">{item.label}</span>
                                
                                {/* Indicateur actif */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="ml-auto w-1.5 h-8 bg-[#16FF6E] rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        );
                    })}
                </nav>


                {/* Profile */}
                <div className="p-4 border-t border-white/5">
                    <motion.div
                        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                        className="flex items-center gap-3 p-3 rounded-lg cursor-pointer"
                    >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF4BC3] to-[#C05CFF] flex items-center justify-center">
                            <User className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-semibold">Le Wab</p>
                            <p className="text-xs text-white/50">Premium</p>
                        </div>
                        <Settings className="w-4 h-4 text-white/50" />
                    </motion.div>
                </div>
            </motion.aside>
        </>
    );
};
