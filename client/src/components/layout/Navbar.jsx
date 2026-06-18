import {
  FaBars,
  FaBell,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";
import { motion } from "framer-motion";

import { useAuth } from "../../context/AuthContext";

function Navbar({ toggleSidebar }) {
  const { user } = useAuth();

  const initials =
    user?.name
      ?.split(" ")
      .map((item) => item[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <header className="sticky top-0 z-40 bg-transparent">
      <div className="px-6 pt-6 pb-2 lg:px-8">
        <div
          className="
            h-16
            flex
            items-center
            justify-between
            gap-6
          "
        >
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleSidebar}
              className="
                w-11
                h-11
                rounded-2xl
                bg-white
                shadow-md
                flex
                items-center
                justify-center
              "
            >
              <FaBars />
            </button>
          </div>

          {/* Search */}
          <div className="flex flex-1 justify-center">
            <div
              className="
                relative
                w-full
                max-w-2xl
              "
            >
              <FaSearch
                className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                type="text"
                placeholder="Search tasks..."
                className="
                  w-full
                  h-14
                  rounded-3xl
                  border
                  border-gray-100
                  bg-white
                  pl-14
                  pr-6
                  shadow-md
                  outline-none
                  transition-all
                  focus:border-[#57BA98]
                  focus:ring-4
                  focus:ring-[#57BA9820]
                "
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                relative
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-md
              "
            >
              <FaBell
                className="
                  text-lg
                  text-[#57BA98]
                "
              />

              <span
                className="
                  absolute
                  top-4
                  right-4
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-red-500
                "
              />
            </motion.button>

            <motion.div
              whileHover={{ y: -2 }}
              className="
                flex
                items-center
                gap-3
                rounded-3xl
                bg-white
                px-4
                py-2
                shadow-md
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
                {initials}
              </div>

              <div className="hidden lg:block">
                <h3 className="text-sm font-semibold">
                  {user?.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {user?.email}
                </p>
              </div>

              <FaChevronDown className="text-xs text-gray-400" />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;