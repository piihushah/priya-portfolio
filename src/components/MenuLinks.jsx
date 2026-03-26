import Menu from "../data/menu.ts";

function MenuLinks({ mobile = false, onItemClick }) {
  return (
    <div className={mobile ? "flex flex-col gap-4" : "flex items-center space-x-8"}>
      {Menu.map((item) => (
        <a
          key={item.link}
          href={item.link}
          onClick={onItemClick}
          className="text-(--text-primary) hover:text-(--primary) transition-colors"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}

export default MenuLinks;
