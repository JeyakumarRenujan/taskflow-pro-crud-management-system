import { motion } from "framer-motion";

function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        relative
        overflow-hidden
        bg-white
        rounded-[28px]
        p-7
        shadow-lg
        border
        border-[var(--border)]
      "
    >
      {/* Left Accent */}

      <div
        className="
          absolute
          left-0
          top-0
          w-2
          h-full
        "
        style={{
          background: color,
        }}
      />

      {/* Background Circle */}

      <div
        className="
          absolute
          -right-10
          -top-10
          w-32
          h-32
          rounded-full
          opacity-10
        "
        style={{
          background: color,
        }}
      />

      <div className="flex justify-between items-start">
        <div>
          <p
            className="
              text-sm
              uppercase
              tracking-wide
              font-semibold
              text-[var(--text-secondary)]
            "
          >
            {title}
          </p>

          <h2
            className="
              mt-4
              text-5xl
              font-bold
              text-[var(--text-primary)]
            "
          >
            {value}
          </h2>
        </div>

        <div
          className="
            w-16
            h-16
            rounded-3xl
            flex
            items-center
            justify-center
          "
          style={{
            background: `${color}20`,
            color,
          }}
        >
          <span className="text-3xl">
            {icon}
          </span>
        </div>
      </div>

      <div
        className="
          mt-7
          h-2
          rounded-full
          opacity-90
        "
        style={{
          background: color,
        }}
      />
    </motion.div>
  );
}

export default StatCard;