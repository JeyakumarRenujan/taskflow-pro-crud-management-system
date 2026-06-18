import { FaTasks } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center gap-3 select-none">
      <div
        className="
          w-12
          h-12
          rounded-2xl
          bg-[var(--primary)]
          flex
          items-center
          justify-center
          shadow-lg
        "
      >
        <FaTasks className="text-white text-xl" />
      </div>

      <div className="flex flex-col">
        <h1
          className="
            text-2xl
            font-extrabold
            tracking-tight
            text-[var(--text-primary)]
          "
        >
          TaskFlow
        </h1>

        <span
          className="
            text-xs
            text-[var(--text-secondary)]
            font-medium
          "
        >
          Productivity Manager
        </span>
      </div>
    </div>
  );
}

export default Logo;
