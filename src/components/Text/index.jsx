import React from "react";

const sizeClasses = {
  txtPoppinsBold18: "font-bold font-poppins",
  txtPoppinsBold32WhiteA700: "font-bold font-poppins",
  txtCairoRegular14: "font-cairo font-normal",
  txtCairoSemiBold18: "font-cairo font-semibold",
  txtPoppinsSemiBold18Gray500: "font-poppins font-semibold",
  txtPoppinsBold32: "font-bold font-poppins",
  txtPoppinsRegular48: "font-normal font-poppins",
  txtPoppinsRegular18RedA200: "font-normal font-poppins",
  txtPoppinsRegular49: "font-normal font-poppins",
  txtPoppinsBold36: "font-bold font-poppins",
  txtPoppinsBold14: "font-bold font-poppins",
  txtPoppinsSemiBold18WhiteA700: "font-poppins font-semibold",
  txtPoppinsSemiBold14Gray500: "font-poppins font-semibold",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsSemiBold18RedA200: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtCairoBold28: "font-bold font-cairo",
  txtPoppinsBold24WhiteA700: "font-bold font-poppins",
  txtPoppinsSemiBold18Indigo500: "font-poppins font-semibold",
  txtPoppinsRegular18Teal300: "font-normal font-poppins",
  txtCairoSemiBold14: "font-cairo font-semibold",
  txtPoppinsRegular18Indigo900: "font-normal font-poppins",
  txtPoppinsMedium18Indigo900: "font-medium font-poppins",
  txtPoppinsBold18WhiteA700: "font-bold font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsSemiBold18Bluegray800: "font-poppins font-semibold",
  txtPoppinsBold14Indigo900: "font-bold font-poppins",
  txtPoppinsBold48: "font-bold font-poppins",
  txtCairoSemiBold14Indigo900: "font-cairo font-semibold",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsBold40: "font-bold font-poppins",
  txtPoppinsSemiBold14WhiteA700: "font-poppins font-semibold",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsBold24: "font-bold font-poppins",
  txtPoppinsBold24Bluegray800: "font-bold font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsSemiBold18Teal300: "font-poppins font-semibold",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsRegular14Indigo900: "font-normal font-poppins",
  txtPoppinsMedium14Bluegray800: "font-medium font-poppins",
  txtPoppinsRegular14Gray500: "font-normal font-poppins",
  txtPoppinsSemiBold14Indigo500: "font-poppins font-semibold",
  txtDMSansRegular12: "font-dmsans font-normal",
  txtPoppinsBold36Indigo900: "font-bold font-poppins",
  txtPoppinsRegular18WhiteA700: "font-normal font-poppins",
  txtPoppinsBold24Gray500: "font-bold font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
