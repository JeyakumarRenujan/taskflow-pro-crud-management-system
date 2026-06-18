import {
  FaHome,
  FaTasks,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import Logo from "../common/Logo";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "My Tasks",
      path: "/tasks",
      icon: <FaTasks />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <aside
      className="
      w-64
      h-screen
      bg-white
      border-r
      border-gray-200
      fixed
      left-0
      top-0
      flex
      flex-col
      p-6
      "
    >
      <Logo />

      <div className="mt-10 space-y-2">

        {menuItems.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              transition-all
              ${
                isActive
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-gray-100"
              }
            `}
          >
            {item.icon}

            {item.name}

          </NavLink>

        ))}

      </div>

      <button
        className="
        mt-auto
        flex
        items-center
        gap-3
        px-4
        py-3
        rounded-xl
        hover:bg-red-100
        text-red-500
        "
      >
        <FaSignOutAlt />

        Logout

      </button>

    </aside>
  );
}

export default Sidebar;