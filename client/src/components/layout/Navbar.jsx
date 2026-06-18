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
      <div className="px-8 pt-7 pb-3">
        <div
          className="
            flex
            items-center
            justify-between
            gap-8
            h-16
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
                shadow-sm
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
                max-w-[640px]
              "
            >
              <FaSearch
                className="
                  absolute
                  left-6
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                  text-[15px]
                "
              />

              <input
                type="text"
                placeholder="Search tasks..."
                className="
                  w-full
                  h-[56px]
                  rounded-[22px]
                  bg-white
                  border
                  border-gray-100
                  shadow-sm
                  pl-14
                  pr-5
                  outline-none
                  focus:ring-2
                  focus:ring-[#57BA98]/20
                "
              />
            </div>
          </div>

          {/* Right */}

          <div className="flex items-center gap-5">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                relative
                w-14
                h-14
                rounded-full
                bg-white
                shadow-sm
                flex
                items-center
                justify-center
              "
            >
              <FaBell
                className="
                  text-[#57BA98]
                  text-lg
                "
              />

              <span
                className="
                  absolute
                  top-4
                  right-4
                  w-2.5
                  h-2.5
                  bg-red-500
                  rounded-full
                "
              />
            </motion.button>

            <motion.div
              whileHover={{ y: -2 }}
              className="
                flex
                items-center
                gap-4
                bg-white
                rounded-[22px]
                px-5
                py-2
                shadow-sm
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
                {initials}
              </div>

              <div className="hidden lg:block">
                <h3 className="font-semibold text-sm">
                  {user?.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {user?.email}
                </p>
              </div>

              <FaChevronDown
                className="
                  text-xs
                  text-gray-400
                "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;