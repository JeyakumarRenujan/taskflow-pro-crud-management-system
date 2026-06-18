import { FaTasks } from "react-icons/fa";

function Logo() {

  return (

    <div className="flex items-center gap-2">

      <FaTasks

        className="text-3xl text-[var(--primary)]"

      />

      <h2

        className="
        text-2xl
        font-bold
        "

      >

        TaskFlow

      </h2>

    </div>

  );

}

export default Logo;