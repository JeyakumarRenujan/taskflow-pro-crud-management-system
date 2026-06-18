import { useEffect, useMemo, useState } from "react";
import { FaPlus, FaSearch, FaSyncAlt } from "react-icons/fa";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../../services/taskService";

import TaskCard from "../../components/cards/TaskCard";
import TaskModal from "../../components/modals/TaskModal";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [openModal, setOpenModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const loadTasks = async () => {
    try {
      setLoading(true);

      const data = await getTasks();

      setTasks(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreateTask = async (formData) => {
    try {
      await createTask(formData);

      setOpenModal(false);
      setSelectedTask(null);

      await loadTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditTask = async (formData) => {
    try {
      await updateTask(
        selectedTask.id,
        formData
      );

      setOpenModal(false);
      setSelectedTask(null);

      await loadTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTask(id);

      await loadTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        task.description
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        task.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [tasks, search, statusFilter]);

  return (
    <div>
      <div
        className="
          flex
          flex-col
          lg:flex-row
          justify-between
          lg:items-center
          gap-5
        "
      >
        <div>
          <h1 className="text-4xl font-bold">
            My Tasks
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all your daily tasks
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedTask(null);
            setOpenModal(true);
          }}
          className="
            flex
            items-center
            gap-2
            bg-indigo-600
            hover:bg-indigo-700
            text-white
            px-5
            py-3
            rounded-xl
            transition-all
          "
        >
          <FaPlus />
          Add Task
        </button>
      </div>

      <div
        className="
          flex
          flex-col
          lg:flex-row
          gap-4
          mt-8
        "
      >
        <div className="relative flex-1">
          <FaSearch
            className="
              absolute
              left-4
              top-4
              text-gray-400
            "
          />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              pl-12
              pr-4
              py-3
              rounded-xl
              border
              outline-none
            "
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
          className="
            px-4
            py-3
            rounded-xl
            border
          "
        >
          <option>All</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button
          onClick={loadTasks}
          className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            border
          "
        >
          <FaSyncAlt />
          Refresh
        </button>
      </div>

      {loading ? (
        <div className="text-center mt-16">
          Loading Tasks...
        </div>
      ) : filteredTasks.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold">
            No Tasks Found
          </h2>

          <p className="text-gray-500 mt-2">
            Create your first task.
          </p>
        </div>
      ) : (
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
            mt-8
          "
        >
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={(task) => {
                setSelectedTask(task);
                setOpenModal(true);
              }}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      )}

      <TaskModal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedTask(null);
        }}
        onSubmit={
          selectedTask
            ? handleEditTask
            : handleCreateTask
        }
        initialData={selectedTask}
      />
    </div>
  );
}

export default Tasks;
