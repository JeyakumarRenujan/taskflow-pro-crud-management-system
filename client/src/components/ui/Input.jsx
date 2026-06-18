function Input({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error = "",
  required = false,
  disabled = false,
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={name}
          className="
            text-sm
            font-semibold
            text-[var(--text-primary)]
          "
        >
          {label}

          {required && (
            <span className="text-red-500 ml-1">
              *
            </span>
          )}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        className="
          w-full
          px-4
          py-3
          rounded-2xl
          border
          border-[var(--border)]
          bg-white
          text-[var(--text-primary)]
          placeholder:text-gray-400
          transition-all
          duration-300
          focus:border-[var(--primary)]
          focus:ring-4
          focus:ring-[var(--accent)]
          outline-none
          disabled:bg-gray-100
          disabled:cursor-not-allowed
        "
      />

      {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;
