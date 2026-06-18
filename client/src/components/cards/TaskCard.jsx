import { FaEdit, FaTrash } from "react-icons/fa";

function TaskCard({
  task,
  onEdit,
  onDelete,
}) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-md
        p-6
        hover:shadow-xl
        transition-all
      "
    >
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">
          {task.title}
        </h2>

        <span>
          {task.priority}
        </span>
      </div>

      <p className="mt-3 text-gray-500">
        {task.description}
      </p>

      <div
        className="
          flex
          justify-between
          items-center
          mt-6
        "
      >
        <span>
          {task.status}
        </span>

        <div className="flex gap-4">
          <button
            onClick={() => onEdit(task)}
          >
            <FaEdit />
          </button>

          <button
            onClick={() => onDelete(task.id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;