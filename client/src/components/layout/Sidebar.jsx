import {
  FaHome,
  FaTasks,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import { motion } from "framer-motion";

import { useAuth } from "../../context/AuthContext";
import Logo from "../common/Logo";

function Sidebar() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

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

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <aside
      className="
        w-72
        h-screen
        bg-white
        border-r
        border-[var(--border)]
        flex
        flex-col
        shadow-sm
        overflow-hidden
      "
    >
      {/* Logo */}

      <div
        className="
          px-6
          py-6
          border-b
          border-[var(--border)]
        "
      >
        <Logo />
      </div>

      {/* Navigation */}

      <nav
        className="
          flex-1
          px-4
          py-6
          space-y-2
          overflow-y-auto
        "
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
          >
            {({ isActive }) => (
              <motion.div
                whileHover={{
                  x: 4,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className={`
                  flex
                  items-center
                  gap-4
                  px-4
                  py-3
                  rounded-2xl
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-[var(--primary)] text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                <span className="text-lg">
                  {item.icon}
                </span>

                <span className="font-medium">
                  {item.name}
                </span>
              </motion.div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User */}

      <div
        className="
          p-5
          border-t
          border-[var(--border)]
          bg-white
        "
      >
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">
            {user?.name ||
              "Guest User"}
          </h3>

          <p className="text-sm text-gray-500 break-all">
            {user?.email}
          </p>
        </div>

        <motion.button
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          onClick={handleLogout}
          className="
            w-full
            py-3
            rounded-xl
            bg-red-50
            hover:bg-red-100
            text-red-600
            font-semibold
            flex
            items-center
            justify-center
            gap-2
            transition-all
          "
        >
          <FaSignOutAlt />

          Logout
        </motion.button>
      </div>
    </aside>
  );
}

export default Sidebar;