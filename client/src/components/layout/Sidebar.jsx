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
        fixed
        left-0
        top-0
        w-72
        h-screen
        bg-white
        border-r
        border-[var(--border)]
        flex
        flex-col
        px-6
        py-8
        shadow-sm
      "
    >
      {/* Logo */}

      <div className="pb-8 border-b border-[var(--border)]">
        <Logo />
      </div>

      {/* Navigation */}

      <nav className="flex-1 mt-8 space-y-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
          >
            {({ isActive }) => (
              <motion.div
                whileHover={{
                  x: 5,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className={`
                  flex
                  items-center
                  gap-4
                  px-5
                  py-4
                  rounded-2xl
                  transition-all
                  duration-300
                  font-medium
                  ${
                    isActive
                      ? "bg-[var(--primary)] text-white shadow-lg"
                      : "text-gray-600 hover:bg-[var(--accent)] hover:text-[var(--primary)]"
                  }
                `}
              >
                <span className="text-xl">
                  {item.icon}
                </span>

                <span className="text-[15px]">
                  {item.name}
                </span>
              </motion.div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User */}

      <div className="pt-6 border-t border-[var(--border)]">
        <div
          className="
            bg-[var(--accent)]
            rounded-3xl
            p-5
          "
        >
          <h3
            className="
              font-semibold
              text-[var(--text-primary)]
              text-lg
            "
          >
            {user?.name || "Guest User"}
          </h3>

          <p
            className="
              text-sm
              text-[var(--text-secondary)]
              mt-1
              break-all
            "
          >
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
            mt-5
            w-full
            py-3
            rounded-2xl
            bg-red-50
            hover:bg-red-100
            text-red-600
            font-semibold
            flex
            justify-center
            items-center
            gap-3
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
