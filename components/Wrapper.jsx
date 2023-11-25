import cn from "classnames";

const Wrapper = ({ children, className = "" }) => {
  const wrapperClasses = cn(
    "w-full",
    "max-w-[1280px]",
    "px-5",
    "md:px-10",
    "mx-auto",
    className
  );

  return <div className={wrapperClasses}>{children}</div>;
};

export default Wrapper;
