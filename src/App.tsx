import { css } from "#styled-system/css";
import { SystemStyleObject } from "#styled-system/types";
import { ReactNode } from "react";

const Button = ({
  css: cssProp = {},
  children,
}: {
  css?: SystemStyleObject;
  children: ReactNode;
}) => {
  const className = css({ display: "flex" }, cssProp);

  return <button className={className}>{children}</button>;
};

export const App = () => (
  <>
    <h1
      className={css({
        display: "block",
        color: "primary",
      })}
    >
      Hello world
    </h1>
    <Button css={css.raw({ color: "secondary" })}>Hi</Button>
  </>
);
