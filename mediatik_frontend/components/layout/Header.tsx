import { motion } from 'framer-motion'
import { Menu, Bell, User, Search, Filter, Shuffle, Download, Play } from 'lucide-react'
import useNavigation from '@/lib/context/NavigationContext'
import { pageHeaders } from '@/lib/data';

interface HeaderProps {
    menuCliquer: () => void
}
export default function Header ({ menuCliquer}: HeaderProps) {
    const { currentPage } = useNavigation();

    // Récupérer les infos de la page actuelle
    const headerConfig =pageHeaders[currentPage];
    const titre = headerConfig.avoirTitre();
    const soustitre = headerConfig.subtitle;
    return (
        <motion.header
            initial={{ y: -100, opacity: 0}}
            animate={{ y: 0,opacity: 1 }}
            transition={{duration:0.5}}
            className="relative bg-gradient-to-b from-[#A00097] via-[#B4009E] via-[#C200A9] to-[#D000B3] px-4 lg:px-8 py-6"
        >

            {/* Menu, TItre, Actions et SearchBar */}
            <div className="flex items-center justify-between">
                    {/* Mobile Menu */}
                    <motion.button 
                        whileTap={{ scale: 0.9 }}
                        className="lg:hidden"
                        onClick={menuCliquer}
                        >
                        <Menu className="w-6 h-6" />
                    </motion.button>

                    {/* Titre dynamique avec animation */}
                    <motion.div
                        key={currentPage} // Forcer l'anomation au changement de page
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.3 }}
                        className="flex-1 text-center lg:text-left lg:ml-0"
                    >
                        <h1 className="text-2xl lg:text-3xl font-bold flex-1 text-center lg:text-left lg:ml-0">
                            { titre }
                        </h1>
                        <p className="text-sm text-white/70 mt-1">
                            {soustitre}
                        </p>
                    </motion.div>

                   {/* ================= QUICK ACTIONS ================= */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-6 flex flex-wrap gap-3"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            flex items-center gap-2 
            px-6 py-3 
            bg-[#16FF6E] text-[#1B1B1B] 
            rounded-full font-semibold
          "
        >
          <Play className="w-5 h-5" fill="currentColor" />
          Lire tout
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            flex items-center gap-2 
            px-6 py-3 
            bg-white/10 backdrop-blur-md 
            rounded-full font-medium
          "
        >
          <Shuffle className="w-5 h-5" />
          Aléatoire
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            hidden sm:flex items-center gap-2 
            px-6 py-3 
            bg-white/10 backdrop-blur-md 
            rounded-full font-medium
          "
        >
          <Download className="w-5 h-5" />
          Télécharger
        </motion.button>
      </motion.div>
                </div>

                {/* Barre de recherche */}
                <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6"
                >
                    <div className="relative max-w-2xl mx-auto lg:mx-0">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                        <motion.input
                            whileFocus={{ scale: 1.02, boxShadow: "0 0 30px rgba(22, 255, 110, 0.3)" }}
                            type="text"
                            placeholder="Que souhaitez-vous écouter ?"
                            className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-12 pr-14 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#16FF6E] transition-all"
                        />
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                            <Filter className="w-5 h-5 text-white/70" />
                        </motion.button>
                    </div>
                </motion.div>
        </motion.header>
    )
}