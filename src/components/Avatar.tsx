import React from "react";

export const Avatar = (props: {
  className?: string;
  children: React.ReactNode;
}) => {
  const { className, children } = props;
  const classes = "size-20 rounded-full overflow-hidden border-4 p-1 bg-neutral-900";
  return <div className={`${className} ${classes}`}>{children}</div>;
};
