import {
  FaEdit,
  FaTrash,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

function TaskCard({
  task,
  onEdit,
  onDelete,
}) {
  const priorityColor = {
    High: "#EF4444",
    Medium: "#F59E0B",
    Low: "#22C55E",
  };

  const statusColors = {
    Pending:
      "bg-orange-50 text-orange-600",
    "In Progress":
      "bg-blue-50 text-blue-600",
    Completed:
      "bg-green-50 text-green-600",
  };

  return (
    <motion.div
      whileHover={{
        y: -6,
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
        shadow-lg
      "
    >
      {/* Top Accent */}
      <div
        className="h-1"
        style={{
          background:
            priorityColor[
              task.priority
            ] || "#57BA98",
        }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  background:
                    priorityColor[
                      task.priority
                    ] || "#57BA98",
                }}
              />

              <span
                className="
                  rounded-full
                  bg-[#F5F7F8]
                  px-3
                  py-1
                  text-xs
                  text-gray-500
                "
              >
                {task.category || "General"}
              </span>
            </div>

            <h2
              className="
                mt-4
                text-xl
                font-bold
                text-[var(--text-primary)]
              "
            >
              {task.title}
            </h2>
          </div>

          <span
            className="
              h-fit
              rounded-full
              bg-[#F5F7F8]
              px-3
              py-1
              text-xs
              font-semibold
              text-gray-600
            "
          >
            {task.priority}
          </span>
        </div>

        {/* Description */}
        <p
          className="
            mt-4
            line-clamp-3
            text-sm
            leading-7
            text-[var(--text-secondary)]
          "
        >
          {task.description}
        </p>

        {/* Bottom */}
        <div
          className="
            mt-6
            flex
            items-center
            justify-between
          "
        >
          <span
            className={`
              rounded-full
              px-4
              py-2
              text-xs
              font-semibold
              ${
                statusColors[
                  task.status
                ] ||
                "bg-gray-100 text-gray-600"
              }
            `}
          >
            {task.status}
          </span>

          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              text-gray-500
            "
          >
            <FaCalendarAlt />
            {task.deadline || "No Deadline"}
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            mt-6
            flex
            justify-end
            gap-3
            border-t
            border-[#EEF2F4]
            pt-5
          "
        >
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => onEdit(task)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-blue-50
              hover:bg-blue-100
            "
          >
            <FaEdit className="text-blue-600" />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => onDelete(task.id)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-red-50
              hover:bg-red-100
            "
          >
            <FaTrash className="text-red-600" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default TaskCard;