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
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        relative
        overflow-hidden
        bg-white
        rounded-3xl
        p-6
        shadow-lg
        border
        border-[var(--border)]
      "
    >
      {/* Decorative Circle */}

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
              text-sm
              font-medium
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
            shadow-sm
          "
          style={{
            background: `${color}20`,
            color: color,
          }}
        >
          <span className="text-2xl">
            {icon}
          </span>
        </div>
      </div>

      <div
        className="
          mt-6
          h-1
          rounded-full
        "
        style={{
          background: color,
        }}
      />
    </motion.div>
  );
}

export default StatCard;
