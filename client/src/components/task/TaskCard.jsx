function TaskCard({ task }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h3 className="font-bold text-xl">
        {task.title}
      </h3>

      <p className="text-gray-500 mt-2">
        {task.description}
      </p>

      <span className="inline-block mt-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
        {task.priority}
      </span>

    </div>
  );
}

export default TaskCard;