import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TeacherDetailsPage = () => {
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
      icon: (
        <Img
          className="h-10 w-10"
          src="images/img_food_indigo_500.svg"
          alt="food"
        />
      ),
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
                className="mb-[264px] md:ml-[0] ml-[34px] mr-[123px] mt-[15px] text-sm text-white-A700"
                size="txtPoppinsRegular14"
              >
                Made with ♥ by Peterdraw
              </Text>
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col gap-10 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between w-3/4 md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                  size="txtPoppinsBold36Indigo900"
                >
                  Teacher Details
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
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col gap-[22px] justify-start pb-[91px] rounded-[20px] w-[69%] md:w-full">
                <div className="flex md:h-[200px] h-[232px] justify-end relative w-full">
                  <Img
                    className="h-6 mb-9 ml-auto mr-[42px] mt-auto w-6"
                    src="images/img_dots.svg"
                    alt="dots"
                  />
                  <div className="absolute md:h-[200px] h-[232px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute bg-indigo-500 flex flex-col inset-x-[0] items-center justify-start mx-auto rounded-tl-[20px] rounded-tr-[20px] shadow-bs top-[0] w-full">
                      <Img
                        className="h-[140px] rounded-tl-[20px] rounded-tr-[20px]"
                        src="images/img_masking.svg"
                        alt="masking"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[200px] left-[3%] w-[200px]"
                      src="images/img_avatar.svg"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-8 md:ml-[0] w-[73%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900"
                    size="txtPoppinsBold32"
                  >
                    Maria Historia
                  </Text>
                  <Text
                    className="mt-[11px] text-gray-500 text-lg"
                    size="txtPoppinsSemiBold18Gray500"
                  >
                    History Teacher
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[38px] w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                        color="deep_orange_300"
                      >
                        <Img
                          className="h-6"
                          src="images/img_location.svg"
                          alt="location"
                        />
                      </Button>
                      <Text
                        className="text-indigo-900 text-lg w-auto"
                        size="txtPoppinsSemiBold18"
                      >
                        Jakarta, Indonesia
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[26%] md:w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Button
                          className="flex h-10 items-center justify-center rounded-[50%] w-10"
                          shape="circle"
                          color="deep_orange_300"
                        >
                          <Img
                            className="h-6"
                            src="images/img_call_white_a700.svg"
                            alt="call"
                          />
                        </Button>
                        <Text
                          className="text-indigo-900 text-lg w-auto"
                          size="txtPoppinsSemiBold18"
                        >
                          +12 345 6789 0
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Button
                          className="flex h-10 items-center justify-center rounded-[50%] w-10"
                          shape="circle"
                          color="deep_orange_300"
                        >
                          <Img
                            className="h-6"
                            src="images/img_email_white_a700_40x40.svg"
                            alt="email_One"
                          />
                        </Button>
                        <Text
                          className="text-indigo-900 text-lg w-auto"
                          size="txtPoppinsSemiBold18"
                        >
                          Historia@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start mt-[39px]">
                    <Text
                      className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      About:
                    </Text>
                    <Text
                      className="text-indigo-900 text-justify text-lg w-full"
                      size="txtPoppinsRegular18Indigo900"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[19px] justify-start mt-[26px] w-[61%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      Education:
                    </Text>
                    <div className="flex flex-col gap-[38px] items-start justify-start md:ml-[0] ml-[9px] w-[98%] md:w-full">
                      <div className="flex flex-col gap-[7px] justify-start">
                        <Text
                          className="text-indigo-900 text-justify text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          History Major, University Akademi Historia
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[17px] text-gray-500 text-justify text-lg"
                          size="txtPoppinsRegular18"
                        >
                          2013-2017
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] justify-start w-full">
                        <Text
                          className="text-indigo-900 text-justify text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          Master of History, University Akademi Historia
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[17px] text-gray-500 text-justify text-lg"
                          size="txtPoppinsRegular18"
                        >
                          2017-2020
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start mt-8">
                    <Text
                      className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      Expertise:
                    </Text>
                    <Text
                      className="text-indigo-900 text-justify text-lg"
                      size="txtPoppinsRegular18Indigo900"
                    >
                      World History, Philosophy, Prehistoric, Culture, Ancient
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[27%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-start p-[30px] sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      Schedule Details
                    </Text>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtPoppinsRegular14Gray500"
                    >
                      Thursday, 10th April , 2021
                    </Text>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-6 items-center mt-6 w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 flex flex-1 flex-row gap-6 items-center justify-start md:pr-10 sm:pr-5 pr-[185px] rounded-[20px] w-full">
                    <div className="bg-indigo-500 h-[183px] rounded-bl-[20px] rounded-tl-[20px] w-[12%]"></div>
                    <div className="flex flex-col items-start justify-start w-[77%]">
                      <Text
                        className="text-indigo-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        World History
                      </Text>
                      <Text
                        className="mt-0.5 text-gray-500 text-sm"
                        size="txtPoppinsRegular14Gray500"
                      >
                        Class VII-B
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start mt-[27px] w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_calendar_deep_orange_300.svg"
                          alt="calendar"
                        />
                        <Text
                          className="text-gray-500 text-sm w-auto"
                          size="txtPoppinsRegular14Gray500"
                        >
                          March 20, 2021
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start mt-2 w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                        <Text
                          className="text-gray-500 text-sm w-auto"
                          size="txtPoppinsRegular14Gray500"
                        >
                          09.00 - 10.00 AM
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-row gap-6 items-center justify-start md:pr-10 sm:pr-5 pr-[185px] rounded-[20px] w-full">
                    <div className="bg-deep_orange-300 h-[183px] rounded-bl-[20px] rounded-tl-[20px] w-[12%]"></div>
                    <div className="flex flex-col items-start justify-start w-[77%]">
                      <Text
                        className="text-indigo-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        Ancient History
                      </Text>
                      <Text
                        className="mt-0.5 text-gray-500 text-sm"
                        size="txtPoppinsRegular14Gray500"
                      >
                        Class VII-A
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start mt-[27px] w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_calendar_deep_orange_300.svg"
                          alt="calendar"
                        />
                        <Text
                          className="text-gray-500 text-sm w-auto"
                          size="txtPoppinsRegular14Gray500"
                        >
                          March 20, 2021
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start mt-2 w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                        <Text
                          className="text-gray-500 text-sm w-auto"
                          size="txtPoppinsRegular14Gray500"
                        >
                          09.00 - 10.00 AM
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-row gap-6 items-center justify-start md:pr-10 sm:pr-5 pr-[185px] rounded-[20px] w-full">
                    <div className="bg-yellow-700 h-[183px] rounded-bl-[20px] rounded-tl-[20px] w-[12%]"></div>
                    <div className="flex flex-col items-start justify-start w-[77%]">
                      <Text
                        className="text-indigo-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        Culture
                      </Text>
                      <Text
                        className="mt-1 text-gray-500 text-sm"
                        size="txtPoppinsRegular14Gray500"
                      >
                        Class VIII-A
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start mt-[27px] w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_calendar_deep_orange_300.svg"
                          alt="calendar"
                        />
                        <Text
                          className="text-gray-500 text-sm w-auto"
                          size="txtPoppinsRegular14Gray500"
                        >
                          March 20, 2021
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start mt-2 w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                        <Text
                          className="text-gray-500 text-sm w-auto"
                          size="txtPoppinsRegular14Gray500"
                        >
                          09.00 - 10.00 AM
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-row gap-6 items-center justify-start md:pr-10 sm:pr-5 pr-[185px] rounded-[20px] w-full">
                    <div className="bg-indigo-900 h-[183px] rounded-bl-[20px] rounded-tl-[20px] w-[12%]"></div>
                    <div className="flex flex-col items-start justify-start w-[77%]">
                      <Text
                        className="text-indigo-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        World History
                      </Text>
                      <Text
                        className="mt-0.5 text-gray-500 text-sm"
                        size="txtPoppinsRegular14Gray500"
                      >
                        Class VII-C
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start mt-[27px] w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_calendar_deep_orange_300.svg"
                          alt="calendar"
                        />
                        <Text
                          className="text-gray-500 text-sm w-auto"
                          size="txtPoppinsRegular14Gray500"
                        >
                          March 20, 2021
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start mt-2 w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                        <Text
                          className="text-gray-500 text-sm w-auto"
                          size="txtPoppinsRegular14Gray500"
                        >
                          09.00 - 10.00 AM
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[386px] sm:min-w-full mt-12 text-center text-lg"
                  shape="round"
                  color="indigo_500_63"
                  size="lg"
                >
                  View More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherDetailsPage;
