import { FaArrowRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Button = ({ children, buttonType, type, isShowArrow = true }) => {
  var btnClasses = [];
  var commonClasses = ["rounded-[60px] flex p-1 h-[55px] items-center"];
  if (type == "primary") {
    btnClasses = ["bg-orange-dark", ...commonClasses, "text-white"];
  } else if (type == "secondary") {
    btnClasses = ["bg-orange", ...commonClasses];
  }

  return (
    <button type={buttonType} className={btnClasses.join(" ")}>
      {isShowArrow && (
        <div className="bg-white rounded-full h-[50px] w-[50px] text-orange-dark flex items-center justify-center">
          <FaArrowRight color="text-orange-dark" size={25} />
        </div>
      )}

      <span className="px-[39px]"> {children}</span>
    </button>
  );
};

export default Button;
