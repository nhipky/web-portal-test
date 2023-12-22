import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  round: "rounded-[30px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    indigo_900: "bg-indigo-900",
    white_A700: "bg-white-A700 shadow-bs",
    gray_100_01: "bg-gray-100_01 text-indigo-900",
    gray_50: "bg-gray-50 text-blue_gray-800",
    indigo_500_19: "bg-indigo-500_19 shadow-bs text-indigo-500",
    indigo_500_36: "bg-indigo-500_36 shadow-bs text-indigo-500",
    yellow_700: "bg-yellow-700 text-white-A700",
    indigo_500: "bg-indigo-500 text-white-A700",
    red_A200: "bg-red-A200",
    indigo_500_63: "bg-indigo-500_63 text-indigo-500",
    deep_orange_300: "bg-deep_orange-300 text-white-A700",
  },
  outline: {
    indigo_500: "border-2 border-indigo-500 border-solid text-indigo-500",
    gray_500: "border-2 border-gray-500 border-solid shadow-bs",
    gray_100_01: "border border-gray-100_01 border-solid text-deep_orange-300",
  },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-[9px]",
  md: "p-3",
  lg: "p-4",
  xl: "p-[23px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "indigo_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "indigo_900",
    "white_A700",
    "gray_100_01",
    "gray_50",
    "indigo_500_19",
    "indigo_500_36",
    "yellow_700",
    "indigo_500",
    "red_A200",
    "indigo_500_63",
    "deep_orange_300",
    "gray_500",
  ]),
};

export { Button };
