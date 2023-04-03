import { useToggle } from "./hooks";
import { DOWN_ARROW, RIGHT_ARROW } from "./utils";

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
        {isOpen ? DOWN_ARROW : RIGHT_ARROW} {!isOpen && fallback}
      </button>
      <span
        style={{
          display: isOpen ? "initial" : "none",
        }}
      >
        {children}
      </span>
    </>
  );
};
