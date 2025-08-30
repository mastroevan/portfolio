import HeroButton from "./HeroButton";
import Hero from "../assets/hero-bg.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="relative min-h-screen bg-gray-100 overflow-hidden">
      {/* Hero Image */}
      <motion.img
        src={Hero}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      {/* Hero Title */}
      <div className="relative z-10 flex items-center justify-center h-screen text-center -mt-20">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut", delay: 0.4 }}
          className="flex items-center bg-black/80 px-8 py-4 rounded-lg shadow-lg"
        >
          <span className="text-7xl font-extrabold text-white drop-shadow-lg mr-4">EM</span>
          <span className="text-4xl font-light text-white drop-shadow-lg">Software Solutions</span>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-20 flex flex-col items-center pb-8">
        <HeroButton />
        <p className="mt-4 text-white text-sm drop-shadow">&#169; 2025 Evan Mastro</p>
      </div>
    </section>
  );
};

export default Home;