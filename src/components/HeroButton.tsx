import { motion } from "framer-motion";

const HeroButton = () => {
  return (
    <motion.button
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
        backgroundColor: "#3a8ef7",
      }}
      className="mt-8 px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-md"
    >
      Looking Forward to Working Together
    </motion.button>
  )
};

export default HeroButton;