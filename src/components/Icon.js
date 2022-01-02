function Icon({ completed }) {
  return (
    <svg
      className={`w-6 h-6 flex-none cursor-pointer stroke-2 inline-block  mr-2  ${
        completed
          ? "fill-gray-100 stroke-gray-300"
          : "fill-green-100 stroke-green-300"
      }`}
    >
      <circle cx="12" cy="12" r="11" />
      <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
    </svg>
  );
}

export default Icon;
