import { FaEnvelope, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

function Profile() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <div className="max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold">

        My Profile

      </h1>

      <p className="text-gray-500 mt-2">

        Manage your account information

      </p>

      <div
        className="
        mt-10
        bg-white
        rounded-2xl
        shadow-md
        p-8
        "
      >

        <div className="flex flex-col md:flex-row gap-8 items-center">

          <div
            className="
            w-28
            h-28
            rounded-full
            bg-indigo-600
            text-white
            flex
            justify-center
            items-center
            text-5xl
            "
          >
            <FaUser />
          </div>

          <div className="flex-1 space-y-5">

            <div className="flex items-center gap-3">

              <FaUser className="text-indigo-600" />

              <span className="font-semibold">

                {user?.name}

              </span>

            </div>

            <div className="flex items-center gap-3">

              <FaEnvelope className="text-indigo-600" />

              <span>

                {user?.email}

              </span>

            </div>

          </div>

        </div>

        <div className="mt-10">

          <button
            onClick={handleLogout}
            className="
            flex
            items-center
            gap-3
            bg-red-500
            hover:bg-red-600
            text-white
            px-6
            py-3
            rounded-xl
            transition
            "
          >

            <FaSignOutAlt />

            Logout

          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;