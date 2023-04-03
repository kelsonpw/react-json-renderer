import { useToggle } from "./hooks";
import { DOWN, RIGHT } from "./utils";

export const CollapseArrow = ({
  children,
  fallback
}: {
  children: React.ReactNode;
  fallback: string;
}) => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <>
      <button className="toggle" onClick={toggleOpen}>
        {isOpen ? DOWN : RIGHT}{" "}
      </button>
      <span
        style={{
          display: isOpen ? "initial" : "none"
        }}
      >
        {children}
      </span>
      {isOpen === false && <span>{fallback}</span>}
    </>
  );
};
