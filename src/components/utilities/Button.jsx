import { IoArrowForwardOutline } from "react-icons/io5";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  isShowIcon = true,
}) => {
  const baseClass = "rounded-full px-1 h-[55px] text-[16px] cursor-pointer";

  const variantStyle = {
    primary: "bg-orange-dark text-white",
    secondary: "",
  };

  return (
    <button
      type={type}
      className={baseClass + " " + variantStyle[variant] + " flex items-center"}
    >
      {isShowIcon && (
        <span className="h-[49px] text-orange-dark bg-white flex items-center justify-center w-[49px] rounded-full ">
          <IoArrowForwardOutline size={25}></IoArrowForwardOutline>
        </span>
      )}
      <span className="px-[40px]">{children}</span>
    </button>
  );
};

export { Button };
