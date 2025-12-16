import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface SectionProps {
    titre: string;
    subtitre?: string;
    action?: string;
    children: React.ReactNode;
}

export const Section = ({ titre, subtitre,action,children}:SectionProps) => {
    
    return (
        <motion.section
            initial={{opacity: 0, y: 20}}
            whileInView={{ opacity:1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
        >

            {/* Titre et Action */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-xl lg:text-2xl font-bold">{titre}</h2>
                    { subtitre && (
                        <p className="text-sm text-white/60 mt-1">{ subtitre }</p>
                    )}
                </div>
                
                {/* Action Boutin */}
                { action && (
                    <motion.button
                        whileHover={{ x: 5 }}
                        className="text-sm text-white/60 hover:text-white flex items-center gap-1"
                    >
                        { action }
                        <ChevronRight className="w-4 h-4" />
                    </motion.button>
                )}
            </div>

            {/* Contenu */}
            { children}
        </motion.section>
    )
}