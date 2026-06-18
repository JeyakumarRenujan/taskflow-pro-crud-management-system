import { useEffect, useMemo, useState } from "react";
import {
  FaPlus,
  FaSearch,
  FaSyncAlt,
  FaTasks,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
  const [statusFilter, setStatusFilter] =
    useState("All");

  const [openModal, setOpenModal] =
    useState(false);

  const [selectedTask, setSelectedTask] =
    useState(null);

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

  const handleCreateTask = async (
    formData
  ) => {
    await createTask(formData);

    setOpenModal(false);
    loadTasks();
  };

  const handleEditTask = async (
    formData
  ) => {
    await updateTask(
      selectedTask.id,
      formData
    );

    setOpenModal(false);
    setSelectedTask(null);

    loadTasks();
  };

  const handleDeleteTask = async (
    id
  ) => {
    if (
      !window.confirm(
        "Delete this task?"
      )
    ) {
      return;
    }

    await deleteTask(id);
    loadTasks();
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

      return (
        matchesSearch &&
        matchesStatus
      );
    });
  }, [tasks, search, statusFilter]);

  return (
    <div className="space-y-8">
      {/* Hero */}
      <motion.section
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          rounded-[34px]
          bg-gradient-to-r
          from-[#57BA98]
          to-[#65CCB8]
          p-8
          text-white
          shadow-xl
          lg:p-10
        "
      >
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-between
            gap-5
          "
        >
          <div>
            <h1 className="text-4xl font-bold">
              My Tasks
            </h1>

            <p className="mt-3 opacity-90">
              Manage all your projects and
              daily work in one place.
            </p>

            <div
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white/20
                px-4
                py-2
              "
            >
              <FaTasks />
              {tasks.length} Tasks
            </div>
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
              rounded-2xl
              bg-white
              px-6
              py-3
              font-semibold
              text-[#57BA98]
            "
          >
            <FaPlus />
            New Task
          </button>
        </div>
      </motion.section>

      {/* Filters */}
      <section
        className="
          flex
          flex-col
          gap-4
          rounded-[30px]
          bg-white
          p-6
          shadow-lg
          lg:flex-row
        "
      >
        <div className="relative flex-1">
          <FaSearch
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="
              h-12
              w-full
              rounded-2xl
              border
              border-[#EEF2F4]
              bg-[#F8FAFC]
              pl-12
              outline-none
            "
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(
              e.target.value
            )
          }
          className="
            h-12
            rounded-2xl
            border
            border-[#EEF2F4]
            px-5
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
            h-12
            items-center
            gap-2
            rounded-2xl
            bg-[#EEFDF8]
            px-6
            font-semibold
            text-[#57BA98]
          "
        >
          <FaSyncAlt />
          Refresh
        </button>
      </section>

      {/* Task Grid */}
      {loading ? (
        <div className="py-24 text-center">
          Loading...
        </div>
      ) : filteredTasks.length === 0 ? (
        <div
          className="
            rounded-[30px]
            bg-white
            py-24
            text-center
            shadow-lg
          "
        >
          <h2 className="text-3xl font-bold">
            No Tasks Yet
          </h2>

          <p className="mt-3 text-gray-500">
            Create your first task to get
            started.
          </p>
        </div>
      ) : (
        <motion.div
          layout
          className="
            grid
            grid-cols-1
            gap-7
            md:grid-cols-2
            xl:grid-cols-3
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
              onDelete={
                handleDeleteTask
              }
            />
          ))}
        </motion.div>
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