function Badge({ children }) {
  return (
    <span className="bg-(--primary) text-(--surface) border border-(--border) px-3 py-1 rounded-full text-sm font-medium">
      {children}
    </span>
  );
}

export default Badge;
