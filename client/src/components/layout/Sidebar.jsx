import {
  FaTasks,
  FaHome,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        TaskFlow Pro
      </h1>

      <nav className="space-y-4">

        <a
          href="/dashboard"
          className="flex items-center gap-3"
        >
          <FaHome />
          Dashboard
        </a>

        <a
          href="/tasks"
          className="flex items-center gap-3"
        >
          <FaTasks />
          Tasks
        </a>

        <a
          href="/"
          className="flex items-center gap-3"
        >
          <FaSignOutAlt />
          Logout
        </a>

      </nav>

    </div>
  );
}

export default Sidebar;