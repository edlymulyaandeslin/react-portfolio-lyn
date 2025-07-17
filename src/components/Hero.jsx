import { motion } from 'framer-motion';
import profilePic from '../assets/lynprofil.jpg';
import { HERO_CONTENT } from '../constants';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="pb-4 border-b border-neutral-900 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight text-center lg:text-start lg:mt-16 lg:text-8xl"
            >
              Edly Mulya Andeslin
            </motion.h1>
            <motion.span
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
            >
              Web Developer
            </motion.span>
            <motion.p
              style={{ textIndent: '2rem' }}
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-6 my-2 font-light tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              width={'60%'}
              alt="#EdlyMA"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
