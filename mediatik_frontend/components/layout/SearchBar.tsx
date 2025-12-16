import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'

export default function SearchBar () {
    return (
        <motion.div className='mt-6'>
            <div className='relative max-w-2xl'>
                <Search className='absolute left-4 top-1/2 -translate-y-1/2' />
                <motion.input whileFocus={{
                    scale: 1.82,
                    boxShadow: "0 0 30px rgba(22, 255, 110, 0.3"}} 
                    placeholder='Qua souhaitez-vous écouter ?'
                    className='w-full bg-white/10 backdrop-blur-md rounded-full'/>
                <Filter className='absolute right-4 top-1/2 -translate-y-1/2'/>
            </div>
        </motion.div>
    )
}