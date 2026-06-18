import { useEffect, useState } from "react";
import {
  FaTasks,
  FaClock,
  FaSpinner,
  FaCheckCircle,
  FaArrowRight,
  FaPlus,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { getTasks } from "../../services/taskService";
import StatCard from "../../components/cards/StatCard";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const total = tasks.length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const progress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const recentTasks = tasks.slice(0, 5);

  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="space-y-8">

      {/* Hero */}

      <motion.section
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          rounded-3xl
          bg-gradient-to-r
          from-[#57BA98]
          to-[#65CCB8]
          p-8
          lg:p-10
          shadow-xl
          text-white
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            justify-between
            lg:items-center
            gap-6
          "
        >
          <div>

            <p className="opacity-90">
              {today}
            </p>

            <h1
              className="
                text-4xl
                lg:text-5xl
                font-bold
                mt-2
              "
            >
              Welcome Back 
            </h1>

            <p
              className="
                mt-4
                max-w-xl
                leading-7
                opacity-95
              "
            >
              Stay organized, manage deadlines,
              and keep your productivity high
              with TaskFlow Pro.
            </p>

          </div>

          <Link
            to="/tasks"
            className="
              flex
              items-center
              gap-2
              bg-white
              text-[#57BA98]
              px-6
              py-3
              rounded-2xl
              font-semibold
              hover:scale-105
              transition
              w-fit
            "
          >
            <FaPlus />

            New Task

          </Link>

        </div>

      </motion.section>

      {/* Stats */}

      <section
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >
        <StatCard
          title="Total Tasks"
          value={total}
          icon={<FaTasks />}
          color="#57BA98"
        />

        <StatCard
          title="Pending"
          value={pending}
          icon={<FaClock />}
          color="#F59E0B"
        />

        <StatCard
          title="In Progress"
          value={progress}
          icon={<FaSpinner />}
          color="#3B82F6"
        />

        <StatCard
          title="Completed"
          value={completed}
          icon={<FaCheckCircle />}
          color="#22C55E"
        />

      </section>

      {/* Recent */}

      <section
        className="
          bg-white
          rounded-3xl
          shadow-lg
          border
          border-[var(--border)]
          p-7
        "
      >
        <div
          className="
            flex
            justify-between
            items-center
            mb-6
          "
        >
          <div>

            <h2 className="text-2xl font-bold">
              Recent Tasks
            </h2>

            <p className="text-gray-500 text-sm">
              Latest updates from your workspace
            </p>

          </div>

          <Link
            to="/tasks"
            className="
              flex
              items-center
              gap-2
              text-[#57BA98]
              font-semibold
            "
          >
            View All

            <FaArrowRight />

          </Link>

        </div>

        <div className="space-y-4">

          {recentTasks.length === 0 ? (

            <div
              className="
                py-16
                rounded-2xl
                bg-[var(--background)]
                text-center
                text-gray-500
              "
            >
              No recent tasks available.

            </div>

          ) : (

            recentTasks.map((task) => (

              <motion.div
                key={task.id}
                whileHover={{
                  y: -2,
                }}
                className="
                  p-5
                  rounded-2xl
                  border
                  border-[var(--border)]
                  flex
                  justify-between
                  items-center
                  hover:shadow-md
                  transition-all
                "
              >

                <div>

                  <h3 className="font-semibold text-lg">
                    {task.title}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {task.description}
                  </p>

                </div>

                <span
                  className={`
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-semibold

                    ${
                      task.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : task.status === "Pending"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-blue-100 text-blue-600"
                    }
                  `}
                >
                  {task.status}
                </span>

              </motion.div>

            ))

          )}

        </div>

      </section>

    </div>
  );
}

export default Dashboard;