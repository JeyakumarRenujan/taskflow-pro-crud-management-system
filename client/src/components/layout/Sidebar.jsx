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
        h-full
        bg-white
        rounded-r-[32px]
        shadow-xl
        border-r
        border-[var(--border)]
        flex
        flex-col
        overflow-hidden
      "
    >
      {/* Logo */}

      <div
        className="
          px-7
          py-8
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
          px-5
          py-7
          space-y-3
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
                  px-5
                  py-4
                  rounded-2xl
                  font-medium
                  text-[16px]
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-[#57BA98] to-[#65CCB8] text-white shadow-lg"
                      : "text-gray-600 hover:bg-[#F5F7F8]"
                  }
                `}
              >
                <span className="text-xl">
                  {item.icon}
                </span>

                {item.name}
              </motion.div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User Section */}

      <div
        className="
          p-5
          border-t
          border-[var(--border)]
        "
      >
        <div
          className="
            rounded-3xl
            border
            border-[#EEF2F4]
            bg-[#FAFCFC]
            p-4
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              w-12
              h-12
              rounded-full
              bg-gradient-to-r
              from-[#57BA98]
              to-[#65CCB8]
              flex
              items-center
              justify-center
              text-white
              font-bold
            "
          >
            {user?.name
              ?.charAt(0)
              ?.toUpperCase() ||
              "U"}
          </div>

          <div className="flex-1 overflow-hidden">
            <h3 className="font-semibold truncate">
              {user?.name ||
                "Guest User"}
            </h3>

            <p className="text-xs text-gray-500 truncate">
              {user?.email}
            </p>
          </div>
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
            h-12
            rounded-2xl
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