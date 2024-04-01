import React from "react";
import main from "../styles/main.module.css";
import { useFormStatus } from "react-dom";
import Spinner from "./Spinner";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button {...rest} className={className}>
      {pending ? <Spinner /> : children}
    </button>
  );
};
