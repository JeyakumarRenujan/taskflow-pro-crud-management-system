function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2">

      <label className="text-sm font-medium text-[var(--text-primary)]">

        {label}

      </label>

      <input

        type={type}

        value={value}

        onChange={onChange}

        placeholder={placeholder}

        className="
        w-full
        p-3
        rounded-xl
        border
        border-[var(--border)]
        bg-white
        focus:ring-2
        focus:ring-[var(--primary)]
        outline-none
        transition-all
        "

      />

    </div>
  );
}

export default Input;