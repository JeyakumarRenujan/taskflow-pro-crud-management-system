import { motion } from "framer-motion";

function Button({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        w-full
        py-3
        rounded-xl
        bg-[var(--primary)]
        hover:bg-[var(--primary-hover)]
        text-white
        font-semibold
        transition-all
        duration-300
        shadow-md
        disabled:opacity-60
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}

export default Button;