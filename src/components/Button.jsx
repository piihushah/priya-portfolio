function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-(--primary) text-(--text-surface) rounded-md border border-(--border) hover:bg-(--primary-hover) transition-colors duration-300 cursor-pointer"
    >
      {children}
    </button>
  );
}

export default Button;
