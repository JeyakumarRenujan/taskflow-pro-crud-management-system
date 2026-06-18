import { motion } from "framer-motion";

function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="
        bg-white
        rounded-2xl
        shadow-md
        p-6
        flex
        justify-between
        items-center
      "
    >
      <div>
        <p className="text-gray-500">
          {title}
        </p>

        <h2 className="text-4xl font-bold mt-2">
          {value}
        </h2>
      </div>

      <div
        className="text-5xl"
        style={{ color }}
      >
        {icon}
      </div>
    </motion.div>
  );
}

export default StatCard;