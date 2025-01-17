import React, { ButtonHTMLAttributes, HTMLAttributes, useState } from "react";

export const Button = (props: {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
  size?: "sm";
}) => {
  const classes =
    props.variant === "primary"
      ? "border bg-lime-400 text-neutral-950 border-lime-400 h-12 rounded-full px-6 font-medium"
      : "border border-white h-12 text-white bg-transparent rounded-full px-6 font-medium";

  const size = props.size ? "h-10" : "";

  return (
    <button className={`${classes} ${props.className} ${size}`} type={props.type}>
      {props.children}
    </button>
  );
};
