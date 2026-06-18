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
        px-6
        py-6
        shadow-lg
      "
    >
      <Logo />

      <nav className="mt-10 flex flex-col gap-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
          >
            {({ isActive }) => (
              <motion.div
                whileHover={{ x: 4 }}
                className={`
                  flex
                  items-center
                  gap-4
                  px-4
                  py-3
                  rounded-2xl
                  transition-all
                  duration-300
                  font-medium
                  ${
                    isActive
                      ? "bg-[var(--primary)] text-white shadow-md"
                      : "text-gray-600 hover:bg-[var(--accent)] hover:text-[var(--primary)]"
                  }
                `}
              >
                <span className="text-lg">
                  {item.icon}
                </span>

                <span>
                  {item.name}
                </span>
              </motion.div>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto">
        <div
          className="
            bg-[var(--accent)]
            rounded-2xl
            p-4
            mb-5
          "
        >
          <p className="font-semibold text-[var(--text-primary)]">
            {user?.name || "Guest User"}
          </p>

          <p className="text-sm text-[var(--text-secondary)] mt-1">
            {user?.email}
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
          className="
            w-full
            flex
            items-center
            justify-center
            gap-3
            py-3
            rounded-2xl
            bg-red-50
            hover:bg-red-100
            text-red-600
            font-semibold
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
