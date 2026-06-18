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
        y: -5,
        scale: 1.01,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        relative
        overflow-hidden
        bg-white
        rounded-3xl
        p-5
        shadow-md
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
          w-1.5
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
          -right-8
          -top-8
          w-24
          h-24
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
              text-xs
              uppercase
              tracking-wider
              font-semibold
              text-[var(--text-secondary)]
            "
          >
            {title}
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              text-[var(--text-primary)]
            "
          >
            {value}
          </h2>
        </div>

        <div
          className="
            w-14
            h-14
            rounded-2xl
            flex
            items-center
            justify-center
            shrink-0
          "
          style={{
            background: `${color}20`,
            color,
          }}
        >
          <span className="text-2xl">
            {icon}
          </span>
        </div>
      </div>

      <div
        className="
          mt-5
          h-1.5
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