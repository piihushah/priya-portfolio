function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-(--accent) text-(--text-primary) rounded-lg border-0 hover:opacity-80 transition-opacity duration-300 cursor-pointer font-medium"
    >
      {children}
    </button>
  );
}

export default Button;
