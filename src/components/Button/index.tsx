import React from "react";
import style from "./Button.module.scss";

interface Props {
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Button({ type, onClick, children }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {/* indica que esse component espera um dom children */}
      {children}
    </button>
  );
}

export default Button;
