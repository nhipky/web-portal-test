import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const NotificationLastestActivityPage = () => {
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
        <Img className="h-10 w-10" src="images/img_teacher.svg" alt="teacher" />
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
          src="images/img_activity_indigo_500.svg"
          alt="activity"
        />
      ),
      label: "Lastest Activity",
      href: "/notificationlastestactivity",
      active: window.location.pathname === "/notificationlastestactivity",
    },
  ];
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

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
                className="mb-[164px] md:ml-[0] ml-[34px] mr-[123px] mt-[15px] text-sm text-white-A700"
                size="txtPoppinsRegular14"
              >
                Made with ♥ by Peterdraw
              </Text>
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col gap-10 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-3/4 md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                  size="txtPoppinsBold36Indigo900"
                >
                  Notification & Lastest Activity
                </Text>
                <Input
                  name="searchbar"
                  placeholder="Search here..."
                  value={searchbarvalue}
                  onChange={(e) => setSearchbarvalue(e)}
                  className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-lg w-full"
                  wrapClassName="flex rounded-[30px] md:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-8 mr-4 my-auto"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#a098ae"
                      className="cursor-pointer h-8 my-auto"
                      onClick={() => setSearchbarvalue("")}
                      style={{
                        visibility:
                          searchbarvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={32}
                      width={32}
                      viewBox="0 0 32 32"
                    />
                  }
                  color="white_A700"
                  variant="fill"
                ></Input>
              </div>
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
            <div className="bg-white-A700 flex flex-col gap-[45px] items-start justify-start p-8 sm:px-5 rounded-[20px] w-full">
              <div className="flex flex-col gap-4 items-start justify-start mt-0.5 w-[92%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-indigo-900 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Today
                  </Text>
                </div>
                <div className="md:h-[520px] sm:h-[555px] h-[571px] relative w-full">
                  <Line className="absolute bg-gray-500 h-[520px] left-[1%] top-[2%] w-px" />
                  <div className="absolute flex sm:flex-col flex-row gap-[26px] items-start justify-between left-[0] top-[0] w-2/5">
                    <div className="bg-white-A700 border-4 border-indigo-500 border-solid h-4 mb-[45px] sm:mt-0 mt-1 rounded-[50%] w-4"></div>
                    <div className="flex flex-col gap-[11px] items-start justify-start">
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtPoppinsRegular14Gray500"
                      >
                        Monday, June 31 2020
                      </Text>
                      <Text
                        className="text-indigo-900 text-lg"
                        size="txtCairoSemiBold18"
                      >
                        <span className="text-indigo-900 font-poppins text-left font-bold">
                          Karen Hope
                        </span>
                        <span className="text-indigo-900 font-cairo text-left font-bold">
                          {" "}
                        </span>
                        <span className="text-indigo-900 font-poppins text-left font-normal">
                          has created new task at
                        </span>
                        <span className="text-indigo-900 font-poppins text-left font-bold">
                          {" "}
                        </span>
                        <span className="text-deep_orange-300 font-poppins text-left font-semibold">
                          HIstory Lesson
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-full">
                    <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-[48%] md:w-full">
                      <div className="bg-white-A700 border-4 border-indigo-500 border-solid h-4 mb-[35px] md:mt-0 mt-0.5 rounded-[50%] w-4"></div>
                      <div className="flex flex-col gap-1.5 items-start justify-start">
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtPoppinsRegular14Gray500"
                        >
                          Monday, June 31 2020
                        </Text>
                        <Text
                          className="text-indigo-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          <span className="text-red-A200 font-poppins text-left font-semibold">
                            [REMINDER]
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-semibold">
                            {" "}
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-normal">
                            Due date o
                          </span>
                          <span className="text-indigo-900 font-poppins text-left text-sm font-normal">
                            f
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-semibold">
                            {" "}
                          </span>
                          <span className="text-red-A200 font-poppins text-left font-semibold">
                            Science Homework
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-semibold">
                            {" "}
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-normal">
                            task will be coming
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[26px] items-start justify-start mt-6 w-[36%] md:w-full">
                      <div className="bg-white-A700 border-4 border-indigo-500 border-solid h-4 mb-10 sm:mt-0 mt-0.5 rounded-[50%] w-4"></div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtPoppinsRegular14Gray500"
                        >
                          Monday, June 31 2020
                        </Text>
                        <Text
                          className="mt-1 text-indigo-900 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            Tony Soap
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-semibold">
                            {" "}
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-normal">
                            commented at
                          </span>
                          <span className="text-deep_orange-300 font-poppins text-left font-bold">
                            {" "}
                          </span>
                          <span className="text-red-A200 font-poppins text-left font-semibold">
                            Science Homework
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[19px] w-full">
                      <div className="flex flex-col gap-[21px] justify-start w-full">
                        <div className="flex sm:flex-col flex-row gap-[26px] items-start justify-start w-[34%] md:w-full">
                          <div className="bg-white-A700 border-4 border-indigo-500 border-solid h-4 mb-[37px] sm:mt-0 mt-0.5 rounded-[50%] w-4"></div>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-gray-500 text-sm"
                              size="txtPoppinsRegular14Gray500"
                            >
                              Monday, June 31 2020
                            </Text>
                            <Text
                              className="text-indigo-900 text-lg"
                              size="txtCairoSemiBold18"
                            >
                              <span className="text-indigo-900 font-poppins text-left font-bold">
                                Samantha William
                              </span>
                              <span className="text-indigo-900 font-poppins text-left font-semibold">
                                {" "}
                              </span>
                              <span className="text-indigo-900 font-poppins text-left font-normal">
                                add 4 files on
                              </span>
                              <span className="text-indigo-500 font-poppins text-left font-semibold">
                                {" "}
                                Art Class{" "}
                              </span>
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-[162px] ml-10 md:ml-[0]"
                          src="images/img_placeholder.svg"
                          alt="placeholder_One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[0] flex sm:flex-col flex-row gap-[26px] items-start justify-between left-[0] w-[39%]">
                    <div className="bg-white-A700 border-4 border-indigo-500 border-solid h-4 mb-10 sm:mt-0 mt-0.5 rounded-[50%] w-4"></div>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtPoppinsRegular14Gray500"
                      >
                        Monday, June 31 2020
                      </Text>
                      <Text
                        className="mt-1 text-indigo-900 text-lg"
                        size="txtCairoSemiBold18"
                      >
                        <span className="text-indigo-900 font-poppins text-left font-bold">
                          You{" "}
                        </span>
                        <span className="text-indigo-900 font-poppins text-left font-normal">
                          has moved
                        </span>
                        <span className="text-indigo-900 font-poppins text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-teal-300 font-poppins text-left font-bold">
                          “Biology Homework”{" "}
                        </span>
                        <span className="text-indigo-900 font-poppins text-left font-normal">
                          task to{" "}
                        </span>
                        <span className="text-indigo-900 font-poppins text-left font-semibold">
                          Done
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-[193px] md:h-[237px] sm:h-[401px] justify-end mb-[45px] relative w-2/5 sm:w-full">
                <Line className="bg-gray-500 h-[98px] mb-10 ml-2 mt-auto w-px" />
                <div className="absolute flex flex-col gap-[18px] h-full inset-[0] items-start justify-center m-auto w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-indigo-900 text-lg"
                      size="txtPoppinsBold18"
                    >
                      Yesterday
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[26px] items-start justify-between w-[99%] md:w-full">
                      <div className="bg-white-A700 border-4 border-indigo-500 border-solid h-4 mb-10 sm:mt-0 mt-0.5 rounded-[50%] w-4"></div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtPoppinsRegular14Gray500"
                        >
                          Sunday, June 30 2020
                        </Text>
                        <Text
                          className="mt-1 text-indigo-900 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            Johnny Ahmad{" "}
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-normal">
                            mentioned you at
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            {" "}
                          </span>
                          <span className="text-yellow-700 font-poppins text-left font-bold">
                            Art Class Homework
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[26px] items-start justify-between w-full">
                      <div className="bg-white-A700 border-4 border-indigo-500 border-solid h-4 mb-10 rounded-[50%] w-4"></div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-gray-500"
                          size="txtPoppinsRegular16"
                        >
                          Sunday, June 30 2020
                        </Text>
                        <Text
                          className="text-indigo-900 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            Nadila Adja{" "}
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-normal">
                            mentioned you at
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            {" "}
                          </span>
                          <span className="text-indigo-500 font-poppins text-left font-bold">
                            Programming Homework
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationLastestActivityPage;
