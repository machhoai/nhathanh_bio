import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Thay đổi thời gian tải tại đây

    return () => clearTimeout(timer);
  }
  , []);

  return (
    <div className="relative">
      <motion.h1
      animate={loading ? {} : { scale: 0, y: "-150vh" }} // Thu nhỏ ra ngoài màn hình
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed text-5xl font-bold text-white w-full top-1/2 transform -translate-y-1/2 z-[100] transition text-center"
      >
        <h1>Nhã Thanh</h1>
      </motion.h1>
      <motion.div
        initial={{ scale: 5 }} // Ban đầu to che màn hình
        animate={loading ? {} : { scale: 0, y: "-150vh" }} // Thu nhỏ ra ngoài màn hình
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="fixed inset-0 w-screen aspect-square bg-indigo-500 rounded-full flex justify-center items-center z-50 mx-auto"
      >
        
      </motion.div>
    </div>
    
  );
}
