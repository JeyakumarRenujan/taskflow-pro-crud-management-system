import { useEffect, useState } from "react";

import {
  FaTasks,
  FaClock,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

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

  return (
    <div>

      <div className="mb-8">

        <h1 className="text-4xl font-bold">

          Good Morning 👋

        </h1>

        <p className="text-gray-500 mt-2">

          Welcome back to TaskFlow Pro

        </p>

      </div>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        "
      >
        <StatCard
          title="Total Tasks"
          value={total}
          icon={<FaTasks />}
          color="#6366F1"
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
      </div>

      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-5">

          Recent Tasks

        </h2>

        <div className="grid gap-4">

          {recentTasks.length === 0 ? (

            <div className="bg-white rounded-2xl p-6 shadow">

              No tasks available.

            </div>

          ) : (

            recentTasks.map((task) => (

              <div
                key={task.id}
                className="
                bg-white
                rounded-xl
                shadow-sm
                p-5
                flex
                justify-between
                items-center
                "
              >
                <div>

                  <h3 className="font-semibold">

                    {task.title}

                  </h3>

                  <p className="text-gray-500 text-sm">

                    {task.description}

                  </p>

                </div>

                <span className="text-sm">

                  {task.status}

                </span>

              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;