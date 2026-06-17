import {
  FaHome,
  FaTasks,
  FaChartLine,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      className="
      w-72
      min-h-screen
      bg-slate-950
      border-r
      border-slate-800
      flex
      flex-col
      px-6
      py-8
      "
    >
      {/* Logo */}

      <div className="mb-14">

        <h1
          className="
          text-3xl
          font-bold
          bg-gradient-to-r
          from-indigo-400
          to-purple-500
          bg-clip-text
          text-transparent
          "
        >
          TaskFlow Pro
        </h1>

        <p className="text-slate-500 mt-2 text-sm">
          Smart Task Management
        </p>

      </div>

      {/* Menu */}

      <nav className="flex flex-col gap-3">

        <NavLink
          to="/dashboard"
          className="
          flex
          items-center
          gap-4
          px-4
          py-3
          rounded-xl
          hover:bg-slate-800
          duration-300
          text-slate-300
          hover:text-white
          "
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/tasks"
          className="
          flex
          items-center
          gap-4
          px-4
          py-3
          rounded-xl
          hover:bg-slate-800
          duration-300
          text-slate-300
          hover:text-white
          "
        >
          <FaTasks />
          Tasks
        </NavLink>

        <NavLink
          to="/analytics"
          className="
          flex
          items-center
          gap-4
          px-4
          py-3
          rounded-xl
          hover:bg-slate-800
          duration-300
          text-slate-300
          hover:text-white
          "
        >
          <FaChartLine />
          Analytics
        </NavLink>

        <NavLink
          to="/profile"
          className="
          flex
          items-center
          gap-4
          px-4
          py-3
          rounded-xl
          hover:bg-slate-800
          duration-300
          text-slate-300
          hover:text-white
          "
        >
          <FaUserCircle />
          Profile
        </NavLink>

      </nav>

      {/* Bottom */}

      <div className="mt-auto">

        <NavLink
          to="/"
          className="
          flex
          items-center
          gap-4
          px-4
          py-3
          rounded-xl
          bg-slate-900
          hover:bg-red-500
          duration-300
          text-slate-300
          hover:text-white
          "
        >
          <FaSignOutAlt />
          Logout
        </NavLink>

      </div>

    </aside>
  );
}

export default Sidebar;