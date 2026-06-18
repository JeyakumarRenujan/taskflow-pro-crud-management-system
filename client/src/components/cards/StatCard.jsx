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
        rounded-[30px]
        border
        border-[#EEF2F4]
        bg-white
        p-7
        shadow-lg
      "
    >
      {/* Decorative Circle */}
      <div
        className="
          absolute
          -top-10
          -right-10
          h-32
          w-32
          rounded-full
          opacity-10
        "
        style={{
          background: color,
        }}
      />

      {/* Top Section */}
      <div className="flex items-start justify-between">
        <div>
          <span
            className="
              inline-block
              rounded-full
              bg-[#F5F7F8]
              px-3
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-wider
              text-gray-500
            "
          >
            {title}
          </span>

          <h2
            className="
              mt-5
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
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-3xl
            shadow-sm
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

      {/* Bottom Section */}
      <div className="mt-8 flex items-center gap-2">
        <div
          className="h-2 w-2 rounded-full"
          style={{
            background: color,
          }}
        />

        <span className="text-sm text-gray-500">
          Updated Today
        </span>
      </div>
    </motion.div>
  );
}

export default StatCard;