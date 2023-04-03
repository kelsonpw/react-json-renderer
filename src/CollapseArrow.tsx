import { useToggle } from "./hooks";
import { DOWN, RIGHT } from "./utils";

type Props = {
  children: React.ReactNode;
  fallback: string;
};

export const CollapseArrow = (props: Props): JSX.Element => {
  const { children, fallback } = props;

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
