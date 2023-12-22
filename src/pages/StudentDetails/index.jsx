import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const StudentDetailsPage = () => {
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
      <div className="bg-gray-100 flex flex-col font-poppins items-center justify-end mx-auto md:pr-10 sm:pr-5 pr-[50px] w-full">
        <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between mx-auto w-full">
          <Sidebar1 className="!sticky !w-[345px] bg-indigo-500 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-10 items-center justify-start md:mt-0 mt-12 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between w-3/4 md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                  size="txtPoppinsBold36Indigo900"
                >
                  Student Details
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
              <div className="flex md:flex-1 flex-col gap-10 items-center justify-start w-[69%] md:w-full">
                <div className="bg-white-A700 flex flex-col gap-7 items-center justify-start pb-12 rounded-[20px] w-full">
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
                          src="images/img_masking_yellow_700.svg"
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
                  <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900"
                      size="txtPoppinsBold32"
                    >
                      Karen Hope
                    </Text>
                    <Text
                      className="mt-[3px] text-gray-500 text-lg"
                      size="txtPoppinsSemiBold18Gray500"
                    >
                      Student
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[35px] w-full">
                      <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[18%] md:w-full">
                        <Text
                          className="text-gray-500 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          Parents:
                        </Text>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row gap-4 items-center justify-start w-auto">
                            <Button
                              className="flex h-10 items-center justify-center rounded-[50%] w-10"
                              shape="circle"
                              color="deep_orange_300"
                            >
                              <Img
                                className="h-6"
                                src="images/img_user_white_a700.svg"
                                alt="user_Two"
                              />
                            </Button>
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsSemiBold18"
                            >
                              Justin Hope
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-2 items-start justify-start w-[24%] md:w-full">
                        <Text
                          className="text-gray-500 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          Address:
                        </Text>
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
                      </div>
                      <div className="flex md:flex-1 flex-col gap-2 items-start justify-start w-1/5 md:w-full">
                        <Text
                          className="text-gray-500 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          Phone:
                        </Text>
                        <div className="flex flex-col items-center justify-start w-full">
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
                      </div>
                      <div className="flex md:flex-1 flex-col gap-2 items-start justify-start w-[23%] md:w-full">
                        <Text
                          className="text-gray-500 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          Email:
                        </Text>
                        <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] w-full">
                          <div className="flex flex-row gap-4 items-center justify-start w-auto">
                            <Button
                              className="flex h-10 items-center justify-center rounded-[50%] w-10"
                              shape="circle"
                              color="deep_orange_300"
                            >
                              <Img
                                className="h-6"
                                src="images/img_email_white_a700_40x40.svg"
                                alt="email_Two"
                              />
                            </Button>
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsSemiBold18"
                            >
                              Hope@mail.com
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-col items-start justify-end p-8 sm:px-5 rounded-[20px] w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      Payment History
                    </Text>
                    <List
                      className="flex flex-col gap-6 items-start mt-[30px] w-auto"
                      orientation="vertical"
                    >
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                          color="red_A200"
                          size="md"
                        >
                          <Img
                            className="h-8"
                            src="images/img_trendingup_white_a700.svg"
                            alt="trendingup"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start ml-4 md:ml-[0] w-auto">
                          <Text
                            className="text-indigo-900 text-lg w-auto"
                            size="txtPoppinsSemiBold18"
                          >
                            #123456789
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[140px] text-gray-500 text-sm"
                          size="txtPoppinsRegular14Gray500"
                        >
                          2 March 2021, 13:45 PM
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[161px] text-indigo-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $ 50,036
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[146px] text-lg text-teal-300"
                          size="txtPoppinsSemiBold18Teal300"
                        >
                          Complete
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                          color="red_A200"
                          size="md"
                        >
                          <Img
                            className="h-8"
                            src="images/img_trendingup_white_a700.svg"
                            alt="trendingup"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start ml-4 md:ml-[0] w-auto">
                          <Text
                            className="text-indigo-900 text-lg w-auto"
                            size="txtPoppinsSemiBold18"
                          >
                            #123456789
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[140px] text-gray-500 text-sm"
                          size="txtPoppinsRegular14Gray500"
                        >
                          2 March 2021, 13:45 PM
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[161px] text-indigo-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $ 50,036
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[146px] text-gray-500 text-lg"
                          size="txtPoppinsSemiBold18Gray500"
                        >
                          Pending
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                          color="red_A200"
                          size="md"
                        >
                          <Img
                            className="h-8"
                            src="images/img_trendingup_white_a700.svg"
                            alt="trendingup"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start ml-4 md:ml-[0] w-auto">
                          <Text
                            className="text-indigo-900 text-lg w-auto"
                            size="txtPoppinsSemiBold18"
                          >
                            #123456789
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[140px] text-gray-500 text-sm"
                          size="txtPoppinsRegular14Gray500"
                        >
                          2 March 2021, 13:45 PM
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[161px] text-indigo-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $ 50,036
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[146px] text-lg text-red-A200"
                          size="txtPoppinsSemiBold18RedA200"
                        >
                          Canceled
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                          color="red_A200"
                          size="md"
                        >
                          <Img
                            className="h-8"
                            src="images/img_trendingup_white_a700.svg"
                            alt="trendingup"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start ml-4 md:ml-[0] w-auto">
                          <Text
                            className="text-indigo-900 text-lg w-auto"
                            size="txtPoppinsSemiBold18"
                          >
                            #123456789
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[140px] text-gray-500 text-sm"
                          size="txtPoppinsRegular14Gray500"
                        >
                          2 March 2021, 13:45 PM
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[161px] text-indigo-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $ 50,036
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[146px] text-lg text-teal-300"
                          size="txtPoppinsSemiBold18Teal300"
                        >
                          Complete
                        </Text>
                      </div>
                    </List>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[9px] mt-12 w-full">
                      <Text
                        className="text-indigo-900 text-sm"
                        size="txtPoppinsRegular14Indigo900"
                      >
                        <span className="text-gray-500 font-poppins text-left font-normal">
                          Showing{" "}
                        </span>
                        <span className="text-indigo-900 font-poppins text-left font-normal">
                          1-5
                        </span>
                        <span className="text-indigo-900 font-poppins text-left font-normal">
                          {" "}
                        </span>
                        <span className="text-gray-500 font-poppins text-left font-normal">
                          from
                        </span>
                        <span className="text-indigo-900 font-poppins text-left font-normal">
                          {" "}
                          100{" "}
                        </span>
                        <span className="text-gray-500 font-poppins text-left font-normal">
                          data
                        </span>
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Img
                          className="h-8 w-8"
                          src="images/img_refresh.svg"
                          alt="refresh"
                        />
                        <Text
                          className="bg-indigo-500 flex h-[50px] items-center justify-center sm:px-5 rounded-[50%] text-center text-lg text-shadow-ts1 text-white-A700 w-[50px]"
                          size="txtPoppinsRegular18WhiteA700"
                        >
                          1
                        </Text>
                        <Text
                          className="border-2 border-gray-500 border-solid flex h-[51px] items-center justify-center rounded-[25px] text-center text-gray-500 text-lg w-[51px]"
                          size="txtPoppinsRegular18"
                        >
                          2
                        </Text>
                        <Text
                          className="border-2 border-gray-500 border-solid flex h-[51px] items-center justify-center rounded-[25px] text-center text-gray-500 text-lg w-[51px]"
                          size="txtPoppinsRegular18"
                        >
                          3
                        </Text>
                        <Img
                          className="h-8 w-8"
                          src="images/img_forward.svg"
                          alt="forward"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[29%] md:w-full">
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
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start sm:pr-5 pr-8 rounded-[20px] w-full">
                    <div className="bg-indigo-500 h-[183px] rounded-bl-[20px] rounded-tl-[20px] w-[7%]"></div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start ml-6 sm:ml-[0] w-2/5 sm:w-full">
                      <Text
                        className="text-indigo-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        Basic Algorithm
                      </Text>
                      <Text
                        className="mt-1 text-gray-500 text-sm"
                        size="txtPoppinsRegular14Gray500"
                      >
                        Algorithm
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start mt-[25px] w-auto">
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
                    <Img
                      className="h-[60px] sm:ml-[0] ml-[125px] w-[60px]"
                      src="images/img_close_indigo_100.svg"
                      alt="close"
                    />
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start sm:pr-5 pr-8 rounded-[20px] w-full">
                    <div className="bg-deep_orange-300 h-[183px] rounded-bl-[20px] rounded-tl-[20px] w-[7%]"></div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start ml-6 sm:ml-[0] w-2/5 sm:w-full">
                      <Text
                        className="text-indigo-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        Basic Art
                      </Text>
                      <Text
                        className="mt-[5px] text-gray-500 text-sm"
                        size="txtPoppinsRegular14Gray500"
                      >
                        Art
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
                    <Img
                      className="h-[60px] sm:ml-[0] ml-[125px] w-[60px]"
                      src="images/img_close_indigo_100.svg"
                      alt="close"
                    />
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start sm:pr-5 pr-8 rounded-[20px] w-full">
                    <div className="bg-yellow-700 h-[183px] rounded-bl-[20px] rounded-tl-[20px] w-[7%]"></div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start ml-6 sm:ml-[0] w-[42%] sm:w-full">
                      <Text
                        className="text-indigo-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        HTML & CSS Class
                      </Text>
                      <Text
                        className="mt-1.5 text-gray-500 text-sm"
                        size="txtPoppinsRegular14Gray500"
                      >
                        Programming
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start mt-[25px] w-auto">
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
                    <Img
                      className="h-[60px] sm:ml-[0] ml-[116px] w-[60px]"
                      src="images/img_close_indigo_100.svg"
                      alt="close"
                    />
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start sm:pr-5 pr-8 rounded-[20px] w-full">
                    <div className="bg-indigo-900 h-[183px] rounded-bl-[20px] rounded-tl-[20px] w-[7%]"></div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start ml-6 sm:ml-[0] w-[44%] sm:w-full">
                      <Text
                        className="text-indigo-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        Simple Past Tense
                      </Text>
                      <Text
                        className="mt-1 text-gray-500 text-sm"
                        size="txtPoppinsRegular14Gray500"
                      >
                        English
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start mt-[25px] w-auto">
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
                    <Img
                      className="h-[60px] ml-28 sm:ml-[0] w-[60px]"
                      src="images/img_close_indigo_100.svg"
                      alt="close"
                    />
                  </div>
                </List>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[418px] sm:min-w-full mt-12 text-center text-lg"
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

export default StudentDetailsPage;
