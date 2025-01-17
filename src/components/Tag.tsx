export const Tag = (props: {
  children: React.ReactNode;
  className?: string;
  otheprops?: any;
}) => {
  const classes =
    "border inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full items-center uppercase";

  return (
    <div className={`${classes} ${props.className} `}>
      <span>&#10038;</span>
      <span className="text-sm"> {props.children}</span>
    </div>
  );
};
