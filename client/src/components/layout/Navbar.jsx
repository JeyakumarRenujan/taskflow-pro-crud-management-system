import { FaBell } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

function Navbar() {

  const { user } = useAuth();

  return (

    <header

      className="
      h-20
      bg-white
      shadow-sm
      flex
      justify-between
      items-center
      px-8
      "

    >

      <h2

        className="
        text-2xl
        font-bold
        "

      >

        Dashboard

      </h2>

      <div

        className="
        flex
        items-center
        gap-6
        "

      >

        <FaBell className="text-xl" />

        <div className="text-right">

          <p className="font-semibold">

            {user?.name}

          </p>

          <p className="text-sm text-gray-500">

            {user?.email}

          </p>

        </div>

      </div>

    </header>

  );

}

export default Navbar;