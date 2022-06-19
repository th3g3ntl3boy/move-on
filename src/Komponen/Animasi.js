import {motion} from 'framer-motion';

const setting = {
    initial: {opacity: 0, x: 100},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -100},
}

const Animasi = ({children}) => {
  return (
    <motion.div 
        variants = {setting}
        initial = "initial"
        animate = "animate"
        exit = "exit"
    >
        {children}
    </motion.div>

  )
}

export default Animasi;