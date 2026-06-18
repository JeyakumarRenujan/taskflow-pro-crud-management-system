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
        flex
        h-full
        flex-col
        rounded-[32px]
        border
        border-[#EEF2F4]
        bg-white
        px-5
        py-6
        shadow-lg
      "
    >
      <Logo />

      <nav
        className="
          mt-10
          flex-1
          space-y-2
        "
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
          >
            {({ isActive }) => (
              <motion.div
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  flex
                  h-16
                  items-center
                  gap-4
                  rounded-2xl
                  px-5
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-[#57BA98] to-[#65CCB8] text-white shadow-md"
                      : "text-[#596579] hover:bg-[#F6F8FA]"
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

      <div className="space-y-4">
        <div
          className="
            flex
            items-center
            gap-3
            rounded-3xl
            border
            border-[#EEF2F4]
            bg-[#FAFCFC]
            p-3
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-[#57BA98]
              to-[#65CCB8]
              font-bold
              text-white
            "
          >
            {user?.name
              ?.charAt(0)
              ?.toUpperCase() || "U"}
          </div>

          <div className="flex-1 overflow-hidden">
            <h3 className="truncate font-semibold">
              {user?.name}
            </h3>

            <p className="truncate text-xs text-gray-500">
              {user?.email}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="
            flex
            h-14
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-red-50
            font-semibold
            text-red-600
            transition
            hover:bg-red-100
          "
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;