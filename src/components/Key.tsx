import React from "react";

export const Key = (props: {
  className?: string;
  children: React.ReactNode;
}) => {
  const { children, className } = props;
  return (
    <div
      className={`size-14 bg-neutral-300 inline-flex items-center 
        justify-center rounded-2xl text-xl text-neutral-950 font-medium ${className}`}
    >
      {children}
    </div>
  );
};
