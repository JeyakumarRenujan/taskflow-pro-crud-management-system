import { motion } from "framer-motion";

function Button({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false,
  loading = false,
  fullWidth = true,
}) {
  return (
    <motion.button
      whileHover={
        !disabled && !loading
          ? { scale: 1.02 }
          : {}
      }
      whileTap={
        !disabled && !loading
          ? { scale: 0.98 }
          : {}
      }
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${
          fullWidth ? "w-full" : ""
        }
        flex
        items-center
        justify-center
        gap-2
        py-3
        px-6
        rounded-2xl
        bg-[var(--primary)]
        hover:bg-[var(--primary-hover)]
        text-white
        font-semibold
        shadow-lg
        hover:shadow-xl
        transition-all
        duration-300
        disabled:opacity-60
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {loading ? "Please wait..." : children}
    </motion.button>
  );
}

export default Button;
