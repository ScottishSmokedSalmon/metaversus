'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
          <img src="gradient-people-01.png" className="scale-150 blur-lg absolute top-0 right-[1%] w-200 h-200 p-[0px]" />
        </div>
        <div className="absolute top-10 right-[20%] w-[220px] h-[170px] rounded-3xl p-[6px] bg-[#5D6680]">
          <img src="TR img.png" alt="planet" className="w-full h-full rounded-3xl" />
          <img src="TR Glow.png" className="blur-xl scale-150 absolute bottom-[0%] left-[1%] w-200 h-200" />
          <p className="absolute text-2xl font-sans weight-700 text-white bottom-[16%] left-[15%] ">Hawkins Labs</p>
        </div>
        <div className="absolute bottom-[35%] left-[20%] w-[220px] h-[170px] p-[6px] rounded-3xl bg-[#5D6680]">
          <img src="TR img 2.png" alt="planet" className="w-full h-full rounded-3xl" />
          <img src="TR2 Glow.png" className="blur-xl scale-150 absolute bottom-[0.5%] left-[1%] w-200 h-200 p-[0px]" />
          <p className="absolute text-2xl font-sans weight-700 text-white bottom-[16%] left-[8%] ">The Upside Down</p>
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
