import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function StaffSuccess() {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Navbar />

      <div
        className="
        min-h-screen
        flex justify-center items-center
        px-4
        bg-gradient-to-br
        from-indigo-50
        via-purple-50
        to-pink-50"
      >

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="
          bg-white/80
          backdrop-blur-xl
          rounded-3xl
          shadow-2xl
          border border-gray-200
          p-12
          text-center
          max-w-md w-full"
        >

          {/* SUCCESS ICON */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 200
            }}
            className="text-6xl mb-6"
          >
            ✅
          </motion.div>

          {/* TITLE */}
          <h1 className="
          text-3xl font-bold
          text-indigo-600
          mb-4">
            Login Successful
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-600">
            Redirecting to Dashboard...
          </p>

          {/* LOADING BAR */}
          <motion.div
            className="
            mt-8
            h-2
            bg-gray-200
            rounded-full
            overflow-hidden"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
              className="
              h-full
              bg-gradient-to-r
              from-indigo-600
              to-purple-600"
            />
          </motion.div>

        </motion.div>

      </div>
    </>
  );
}