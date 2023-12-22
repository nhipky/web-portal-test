import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Radio, Text } from "components";

const AddNewStudentPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-10 w-10"
          src="images/img_home_indigo_100.svg"
          alt="home"
        />
      ),
      label: "Dashboard",
      href: "/dashboard",
      active: window.location.pathname === "/dashboard",
    },
    {
      icon: (
        <Img className="h-10 w-10" src="images/img_student.svg" alt="student" />
      ),
      label: "Students",
      href: "/students",
      active: window.location.pathname === "/students",
    },
    {
      icon: (
        <Img
          className="h-10 w-10"
          src="images/img_teacher_indigo_500.svg"
          alt="teacher"
        />
      ),
      label: "Teachers",
      href: "/teachers",
      active: window.location.pathname === "/teachers",
    },
    {
      icon: (
        <Img
          className="h-10 w-10"
          src="images/img_calendar.svg"
          alt="calendar"
        />
      ),
      label: "Event",
      href: "/events",
      active: window.location.pathname === "/events",
    },
    {
      icon: <Img className="h-10 w-10" src="images/img_user.svg" alt="user" />,
      label: "Finance",
      href: "/finance",
      active: window.location.pathname === "/finance",
    },
    {
      icon: <Img className="h-10 w-10" src="images/img_food.svg" alt="food" />,
      label: "Food",
      href: "/food",
      active: window.location.pathname === "/food",
    },
    {
      icon: (
        <Img
          className="h-10 w-10"
          src="images/img_user_indigo_100.svg"
          alt="user_One"
        />
      ),
      label: "User",
      href: "/userdashboard",
      active: window.location.pathname === "/userdashboard",
    },
    {
      icon: <Img className="h-10 w-10" src="images/img_chat.svg" alt="chat" />,
      label: "Chat",
      href: "/chat",
      active: window.location.pathname === "/chat",
    },
    {
      icon: (
        <Img
          className="h-10 mb-[3px] w-10"
          src="images/img_activity.svg"
          alt="activity"
        />
      ),
      label: "Lastest Activity",
      href: "/notificationlastestactivity",
      active: window.location.pathname === "/notificationlastestactivity",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[345px] bg-indigo-500 flex h-screen md:hidden justify-start overflow-auto top-[0]"
          >
            <div className="flex flex-row gap-4 items-center justify-center md:ml-[0] ml-[46px] mr-[66px] mt-12 w-[68%]">
              <div className="h-[54px] relative w-[21%]">
                <div className="absolute bg-deep_orange-300 h-12 inset-[0] justify-center m-auto rounded-[16px] w-12"></div>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-max"
                  size="txtPoppinsBold36"
                >
                  A
                </Text>
              </div>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                size="txtPoppinsBold36"
              >
                Akademi
              </Text>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "15px 15px 15px 23px",
                  gap: "24px",
                  marginTop: "4px",
                  color: "#c1bbeb",
                  fontWeight: 500,
                  fontSize: "18px",
                  borderTopLeftRadius: "40px",
                  borderBottomLeftRadius: "40px",
                  [`&:hover, &.ps-active`]: {
                    color: "#4d44b5",
                    backgroundColor: "#f3f4ffff !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-end mt-[23px] md:pl-10 sm:pl-5 pl-[46px] pt-[18px] w-[87%]"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
            {!collapsed && (
              <Text
                className="md:ml-[0] ml-[34px] mr-[19px] mt-[101px] text-sm text-white-A700"
                size="txtPoppinsBold14"
              >
                Akademi - School Admission Dashboard
              </Text>
            )}
            {!collapsed && (
              <Text
                className="mb-[697px] md:ml-[0] ml-[34px] mr-[123px] mt-[15px] text-sm text-white-A700"
                size="txtPoppinsRegular14"
              >
                Made with ♥ by Peterdraw
              </Text>
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                size="txtPoppinsBold36Indigo900"
              >
                Add New Student
              </Text>
              <div className="flex md:flex-1 flex-row items-center justify-between w-[22%] md:w-full">
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_notification.svg"
                  alt="notification"
                />
                <Button
                  className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                  shape="circle"
                  color="white_A700"
                  size="lg"
                >
                  <Img className="h-8" src="images/img_gear.svg" alt="gear" />
                </Button>
                <div className="flex flex-col items-end justify-start">
                  <Text
                    className="text-indigo-900 text-sm"
                    size="txtPoppinsSemiBold14"
                  >
                    Nabila A.
                  </Text>
                  <Text
                    className="mt-1 text-gray-500 text-sm"
                    size="txtPoppinsRegular14Gray500"
                  >
                    Admin
                  </Text>
                </div>
                <div className="bg-indigo-100 h-[60px] rounded-[50%] w-[60px]"></div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start pb-10 rounded-[20px] w-full">
              <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                <div className="bg-indigo-500 flex flex-col items-start justify-start p-2.5 rounded-tl-[20px] rounded-tr-[20px] w-full">
                  <Text
                    className="mb-[3px] md:ml-[0] ml-[29px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsBold24WhiteA700"
                  >
                    Student Details
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-[95%] md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-indigo-900 text-lg w-auto"
                      size="txtPoppinsSemiBold18"
                    >
                      Photo *
                    </Text>
                    <div className="bg-white-A700 border border-dashed border-indigo-100 flex flex-col h-[175px] items-center justify-end p-2.5 rounded-[5px] w-[175px]">
                      <Text
                        className="mb-[53px] mt-[60px] text-center text-gray-500 text-sm"
                        size="txtPoppinsRegular14Gray500"
                      >
                        <>
                          Drag and drop or <br />
                          click here to select file
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[33px] items-start justify-start md:mt-0 mt-0.5 w-[85%] md:w-full">
                    <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-indigo-900 text-lg w-auto"
                          size="txtPoppinsSemiBold18"
                        >
                          First Name *
                        </Text>
                        <Input
                          name="form"
                          placeholder="Samantha"
                          className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                          wrapClassName="border border-indigo-100 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-indigo-900 text-lg w-auto"
                          size="txtPoppinsSemiBold18"
                        >
                          Last Name *
                        </Text>
                        <Input
                          name="form_One"
                          placeholder="William"
                          className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                          wrapClassName="border border-indigo-100 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-indigo-900 text-lg w-auto"
                          size="txtPoppinsSemiBold18"
                        >
                          Date & Place of Birth *
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
                          <Input
                            name="form_Two"
                            placeholder="24 Februari 1997"
                            className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                            wrapClassName="border border-indigo-100 border-solid w-[48%] sm:w-full"
                            shape="round"
                            color="white_A700"
                            variant="fill"
                          ></Input>
                          <Input
                            name="form_Three"
                            placeholder="Jakarta"
                            className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                            wrapClassName="border border-indigo-100 border-solid w-[48%] sm:w-full"
                            shape="round"
                            color="white_A700"
                            variant="fill"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-indigo-900 text-lg w-auto"
                          size="txtPoppinsSemiBold18"
                        >
                          Parent Name *
                        </Text>
                        <Input
                          name="form_Four"
                          placeholder="Mana William"
                          className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                          wrapClassName="border border-indigo-100 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-indigo-900 text-lg w-auto"
                          size="txtPoppinsSemiBold18"
                        >
                          Email *
                        </Text>
                        <Input
                          name="email_Two"
                          placeholder="william@mail.com"
                          className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                          wrapClassName="border border-indigo-100 border-solid w-full"
                          type="email"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-indigo-900 text-lg w-auto"
                          size="txtPoppinsSemiBold18"
                        >
                          Phone *
                        </Text>
                        <Input
                          name="form_Five"
                          placeholder="+1234567890"
                          className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                          wrapClassName="border border-indigo-100 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-indigo-900 text-lg w-auto"
                        size="txtPoppinsSemiBold18"
                      >
                        Address *
                      </Text>
                      <div className="flex flex-col gap-[11px] items-end justify-start w-full">
                        <div className="bg-white-A700 border border-indigo-100 border-solid flex sm:flex-col flex-row font-poppins gap-[7px] items-start justify-end p-1 rounded-[5px] w-full">
                          <Text
                            className="sm:flex-1 sm:mt-0 my-2.5 text-gray-500 text-sm w-[97%] sm:w-full"
                            size="txtPoppinsRegular14Gray500"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.{" "}
                          </Text>
                          <Line className="bg-gray-100_01 sm:h-0.5 h-[70px] mb-[88px] sm:mt-0 mt-[9px] w-0.5 sm:w-full" />
                        </div>
                        <Text
                          className="text-gray-500 text-xs"
                          size="txtDMSansRegular12"
                        >
                          0/2000
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start pb-[34px] rounded-[20px] w-full">
              <div className="flex flex-col gap-[34px] justify-start w-full">
                <div className="bg-indigo-500 flex flex-col items-start justify-start p-2.5 rounded-tl-[20px] rounded-tr-[20px] w-full">
                  <Text
                    className="mb-[3px] md:ml-[0] ml-[29px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsBold24WhiteA700"
                  >
                    Parent Details
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start ml-10 md:ml-[0] w-4/5 md:w-full">
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-indigo-900 text-lg w-auto"
                        size="txtPoppinsSemiBold18"
                      >
                        First Name *
                      </Text>
                      <Input
                        name="form_Six"
                        placeholder="Mana"
                        className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                        wrapClassName="border border-indigo-100 border-solid w-full"
                        shape="round"
                        color="white_A700"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-indigo-900 text-lg w-auto"
                        size="txtPoppinsSemiBold18"
                      >
                        Last Name *
                      </Text>
                      <Input
                        name="form_Seven"
                        placeholder="William"
                        className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                        wrapClassName="border border-indigo-100 border-solid w-full"
                        shape="round"
                        color="white_A700"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-indigo-900 text-lg w-auto"
                        size="txtPoppinsSemiBold18"
                      >
                        Email *
                      </Text>
                      <Input
                        name="email_Four"
                        placeholder="Mana@mail.com"
                        className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                        wrapClassName="border border-indigo-100 border-solid w-full"
                        type="email"
                        shape="round"
                        color="white_A700"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-indigo-900 text-lg w-auto"
                        size="txtPoppinsSemiBold18"
                      >
                        Phone *
                      </Text>
                      <Input
                        name="form_Eight"
                        placeholder="+1234567890"
                        className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                        wrapClassName="border border-indigo-100 border-solid w-full"
                        shape="round"
                        color="white_A700"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[23px] items-start justify-start w-[68%] md:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-indigo-900 text-lg w-auto"
                        size="txtPoppinsSemiBold18"
                      >
                        Address *
                      </Text>
                      <div className="flex flex-col gap-[11px] items-end justify-start w-full">
                        <div className="bg-white-A700 border border-indigo-100 border-solid flex sm:flex-col flex-row font-poppins gap-[7px] items-start justify-end p-1 rounded-[5px] w-full">
                          <Text
                            className="sm:flex-1 sm:mt-0 my-2.5 text-gray-500 text-sm w-[97%] sm:w-full"
                            size="txtPoppinsRegular14Gray500"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.{" "}
                          </Text>
                          <Line className="bg-gray-100_01 sm:h-0.5 h-[70px] mb-[88px] sm:mt-0 mt-[9px] w-0.5 sm:w-full" />
                        </div>
                        <Text
                          className="text-gray-500 text-xs"
                          size="txtDMSansRegular12"
                        >
                          0/2000
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-1/4 md:w-full">
                      <div className="flex flex-col gap-[21px] items-start justify-start w-auto">
                        <Text
                          className="text-indigo-900 text-lg w-auto"
                          size="txtPoppinsSemiBold18"
                        >
                          Payments *
                        </Text>
                        <div className="flex flex-row gap-[17px] items-center justify-start w-[77%] md:w-full">
                          <Radio
                            value="Cash"
                            className="leading-[normal] text-gray-500 text-left text-sm"
                            inputClassName="mr-[5px]"
                            checked={false}
                            name="cash"
                            label="Cash"
                            id="Cash"
                          ></Radio>
                          <div className="flex flex-row items-start justify-evenly w-[45%]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bxbxradiocircle.svg"
                              alt="bxbxradiocircle"
                            />
                            <Text
                              className="mt-0.5 text-gray-500 text-sm"
                              size="txtPoppinsRegular14Gray500"
                            >
                              Debit
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[26px] items-center justify-end md:ml-[0] ml-[1169px] w-[21%] md:w-full">
              <Button
                className="cursor-pointer h-[60px] leading-[normal] min-w-[168px] text-center text-lg"
                shape="round"
                size="lg"
                variant="outline"
              >
                Save as Draft
              </Button>
              <Button
                className="cursor-pointer h-[60px] leading-[normal] min-w-[112px] text-center text-lg"
                shape="round"
                size="lg"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewStudentPage;
