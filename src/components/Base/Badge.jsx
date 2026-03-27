function Badge({ children }) {
  return (
    <span className="bg-(--primary) text-(--text-surface) border border-(--border) px-4 py-2 rounded-full text-sm font-medium">
      {children}
    </span>
  );
}

export default Badge;
