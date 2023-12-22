import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const FoodPage = () => {
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
          <Sidebar1 className="!sticky !w-[345px] bg-indigo-500 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-10 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 sm:flex-col flex-row md:gap-10 items-start justify-between w-3/4 md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                  size="txtPoppinsBold36Indigo900"
                >
                  Food
                </Text>
                <Input
                  name="searchbar"
                  placeholder="Search here..."
                  value={searchbarvalue}
                  onChange={(e) => setSearchbarvalue(e)}
                  className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-lg w-full"
                  wrapClassName="flex rounded-[30px] sm:w-full"
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
            <div className="bg-white-A700 flex flex-col items-center justify-start p-4 rounded-[20px] w-full">
              <div className="flex flex-col items-center justify-start mb-4 mt-[5px] w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    Food Menu
                  </Text>
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[417px] sm:w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-col items-center justify-start sm:px-5 px-6 py-4 w-auto">
                          <Text
                            className="text-indigo-500 text-sm w-auto"
                            size="txtPoppinsSemiBold14Indigo500"
                          >
                            All Menus
                          </Text>
                        </div>
                        <Line className="bg-indigo-500 h-1 w-full" />
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-col items-center justify-start sm:px-5 px-6 py-4 w-auto">
                          <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtPoppinsSemiBold14Gray500"
                          >
                            Breakfast
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-col items-center justify-start sm:px-5 px-6 py-4 w-auto">
                          <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtPoppinsSemiBold14Gray500"
                          >
                            Lunch
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-col items-center justify-start sm:px-5 px-6 py-4 w-auto">
                          <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtPoppinsSemiBold14Gray500"
                          >
                            Snack
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-indigo-100 h-0.5 w-full" />
                  </div>
                </div>
                <List
                  className="flex flex-col gap-8 items-start mt-10 w-auto"
                  orientation="vertical"
                >
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="bg-indigo-100 h-[150px] rounded-[18px] w-[150px]"></div>
                      <div className="flex flex-col items-start justify-start">
                        <Button className="cursor-pointer leading-[normal] rounded-[20px] text-center text-sm w-[120px]">
                          Lunch
                        </Button>
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                            <Text
                              className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                              size="txtPoppinsBold24"
                            >
                              Beef Steak with Fried Potato
                            </Text>
                            <div className="flex flex-row gap-2 items-start justify-center md:ml-[0] ml-[57px] w-[11%] md:w-full">
                              <Img
                                className="h-8 rounded-[1px] w-8"
                                src="images/img_star1.svg"
                                alt="starOne"
                              />
                              <Text
                                className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                                size="txtPoppinsBold24"
                              >
                                4.9
                              </Text>
                            </div>
                            <div className="flex flex-row gap-6 items-center justify-between md:ml-[0] ml-[92px] w-1/4 md:w-full">
                              <Img
                                className="h-[53px]"
                                src="images/img_chart.svg"
                                alt="chart"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                                  size="txtPoppinsBold24"
                                >
                                  1.456
                                </Text>
                                <Text
                                  className="mt-1 text-gray-500 text-lg"
                                  size="txtPoppinsRegular18"
                                >
                                  Total Order
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[33px] items-center justify-center">
                            <Img
                              className="h-[33px] w-[33px]"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[69px]">
                              <Text
                                className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                                size="txtPoppinsBold24"
                              >
                                26%
                              </Text>
                              <Text
                                className="text-gray-500 text-lg"
                                size="txtPoppinsRegular18"
                              >
                                Interest
                              </Text>
                            </div>
                          </div>
                          <div className="h-[60px] relative w-[60px]">
                            <div className="!w-[60px] h-[60px] m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[60px] h-[60px] m-auto overflow-visible"
                                value={49}
                                strokeWidth={8}
                                styles={{
                                  trail: { strokeWidth: 8, stroke: "#c1bbeb" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(180deg)",
                                    stroke: "#4d44b5",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <Text
                              className="absolute h-max inset-[0] justify-center m-auto text-indigo-900 text-sm w-max"
                              size="txtPoppinsSemiBold14"
                            >
                              50%
                            </Text>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_dots.svg"
                            alt="dots"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="bg-indigo-100 h-[150px] rounded-[18px] w-[150px]"></div>
                      <div className="flex flex-col items-start justify-start">
                        <Button className="cursor-pointer leading-[normal] rounded-[20px] text-center text-sm w-[120px]">
                          Breakfast
                        </Button>
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                            <Text
                              className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                              size="txtPoppinsBold24"
                            >
                              Pancake with Honey
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[148px] w-[11%] md:w-full">
                              <Img
                                className="h-8 rounded-[1px] w-8"
                                src="images/img_star1_32x32.svg"
                                alt="starOne"
                              />
                              <Text
                                className="h-9 text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                                size="txtPoppinsBold24"
                              >
                                4.7
                              </Text>
                            </div>
                            <div className="flex flex-row gap-6 items-center justify-between md:ml-[0] ml-[94px] w-1/4 md:w-full">
                              <Img
                                className="h-[53px]"
                                src="images/img_chart.svg"
                                alt="chart"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                                  size="txtPoppinsBold24"
                                >
                                  1.456
                                </Text>
                                <Text
                                  className="mt-1 text-gray-500 text-lg"
                                  size="txtPoppinsRegular18"
                                >
                                  Total Order
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[33px] items-center justify-center">
                            <Img
                              className="h-[33px] w-[33px]"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[69px]">
                              <Text
                                className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                                size="txtPoppinsBold24"
                              >
                                26%
                              </Text>
                              <Text
                                className="text-gray-500 text-lg"
                                size="txtPoppinsRegular18"
                              >
                                Interest
                              </Text>
                            </div>
                          </div>
                          <div className="h-[60px] relative w-[60px]">
                            <div className="!w-[60px] h-[60px] m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[60px] h-[60px] m-auto overflow-visible"
                                value={49}
                                strokeWidth={8}
                                styles={{
                                  trail: { strokeWidth: 8, stroke: "#c1bbeb" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(180deg)",
                                    stroke: "#4d44b5",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <Text
                              className="absolute h-max inset-[0] justify-center m-auto text-indigo-900 text-sm w-max"
                              size="txtPoppinsSemiBold14"
                            >
                              50%
                            </Text>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_dots.svg"
                            alt="dots"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="bg-indigo-100 h-[150px] rounded-[18px] w-[150px]"></div>
                      <div className="flex flex-col items-start justify-start">
                        <Button className="cursor-pointer leading-[normal] rounded-[20px] text-center text-sm w-[120px]">
                          Lunch
                        </Button>
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                            <Text
                              className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                              size="txtPoppinsBold24"
                            >
                              Japanese Beef Ramen
                            </Text>
                            <div className="flex flex-row gap-2 items-start justify-center md:ml-[0] ml-[124px] w-[11%] md:w-full">
                              <Img
                                className="h-8 rounded-[1px] w-8"
                                src="images/img_star1_1.svg"
                                alt="starOne"
                              />
                              <Text
                                className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                                size="txtPoppinsBold24"
                              >
                                4.8
                              </Text>
                            </div>
                            <div className="flex flex-row gap-6 items-center justify-between md:ml-[0] ml-[91px] w-1/4 md:w-full">
                              <Img
                                className="h-[53px]"
                                src="images/img_chart.svg"
                                alt="chart"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                                  size="txtPoppinsBold24"
                                >
                                  1.456
                                </Text>
                                <Text
                                  className="mt-1 text-gray-500 text-lg"
                                  size="txtPoppinsRegular18"
                                >
                                  Total Order
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[33px] items-center justify-center">
                            <Img
                              className="h-[33px] w-[33px]"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[69px]">
                              <Text
                                className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                                size="txtPoppinsBold24"
                              >
                                26%
                              </Text>
                              <Text
                                className="text-gray-500 text-lg"
                                size="txtPoppinsRegular18"
                              >
                                Interest
                              </Text>
                            </div>
                          </div>
                          <div className="h-[60px] relative w-[60px]">
                            <div className="!w-[60px] h-[60px] m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[60px] h-[60px] m-auto overflow-visible"
                                value={49}
                                strokeWidth={8}
                                styles={{
                                  trail: { strokeWidth: 8, stroke: "#c1bbeb" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(180deg)",
                                    stroke: "#4d44b5",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <Text
                              className="absolute h-max inset-[0] justify-center m-auto text-indigo-900 text-sm w-max"
                              size="txtPoppinsSemiBold14"
                            >
                              50%
                            </Text>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_dots.svg"
                            alt="dots"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="bg-indigo-100 h-[150px] rounded-[18px] w-[150px]"></div>
                      <div className="flex flex-col items-start justify-start">
                        <Button className="cursor-pointer leading-[normal] rounded-[20px] text-center text-sm w-[120px]">
                          Lunch
                        </Button>
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                            <Text
                              className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                              size="txtPoppinsBold24"
                            >
                              Mixed Salad
                            </Text>
                            <div className="flex flex-row gap-2 items-start justify-center md:ml-[0] ml-[248px] w-[11%] md:w-full">
                              <Img
                                className="h-8 rounded-[1px] w-8"
                                src="images/img_star1_2.svg"
                                alt="starOne"
                              />
                              <Text
                                className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                                size="txtPoppinsBold24"
                              >
                                4.2
                              </Text>
                            </div>
                            <div className="flex flex-row gap-6 items-center justify-between md:ml-[0] ml-[93px] w-1/4 md:w-full">
                              <Img
                                className="h-[53px]"
                                src="images/img_chart.svg"
                                alt="chart"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                                  size="txtPoppinsBold24"
                                >
                                  1.456
                                </Text>
                                <Text
                                  className="mt-1 text-gray-500 text-lg"
                                  size="txtPoppinsRegular18"
                                >
                                  Total Order
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[33px] items-center justify-center">
                            <Img
                              className="h-[33px] w-[33px]"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[69px]">
                              <Text
                                className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                                size="txtPoppinsBold24"
                              >
                                26%
                              </Text>
                              <Text
                                className="text-gray-500 text-lg"
                                size="txtPoppinsRegular18"
                              >
                                Interest
                              </Text>
                            </div>
                          </div>
                          <div className="h-[60px] relative w-[60px]">
                            <div className="!w-[60px] h-[60px] m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[60px] h-[60px] m-auto overflow-visible"
                                value={49}
                                strokeWidth={8}
                                styles={{
                                  trail: { strokeWidth: 8, stroke: "#c1bbeb" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(180deg)",
                                    stroke: "#4d44b5",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <Text
                              className="absolute h-max inset-[0] justify-center m-auto text-indigo-900 text-sm w-max"
                              size="txtPoppinsSemiBold14"
                            >
                              50%
                            </Text>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_dots.svg"
                            alt="dots"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="bg-indigo-100 h-[150px] rounded-[18px] w-[150px]"></div>
                      <div className="flex flex-col items-start justify-start">
                        <Button className="cursor-pointer leading-[normal] rounded-[20px] text-center text-sm w-[120px]">
                          Snack
                        </Button>
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                            <Text
                              className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                              size="txtPoppinsBold24"
                            >
                              Beef Meatball with Vegetable
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[38px] w-[11%] md:w-full">
                              <Img
                                className="h-8 rounded-[1px] w-8"
                                src="images/img_star1_3.svg"
                                alt="starOne"
                              />
                              <Text
                                className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                                size="txtPoppinsBold24"
                              >
                                4.5
                              </Text>
                            </div>
                            <div className="flex flex-row gap-6 items-center justify-between md:ml-[0] ml-[91px] w-1/4 md:w-full">
                              <Img
                                className="h-[53px]"
                                src="images/img_chart.svg"
                                alt="chart"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                                  size="txtPoppinsBold24"
                                >
                                  1.456
                                </Text>
                                <Text
                                  className="mt-1 text-gray-500 text-lg"
                                  size="txtPoppinsRegular18"
                                >
                                  Total Order
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[33px] items-center justify-center">
                            <Img
                              className="h-[33px] w-[33px]"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[69px]">
                              <Text
                                className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                                size="txtPoppinsBold24"
                              >
                                26%
                              </Text>
                              <Text
                                className="text-gray-500 text-lg"
                                size="txtPoppinsRegular18"
                              >
                                Interest
                              </Text>
                            </div>
                          </div>
                          <div className="h-[60px] relative w-[60px]">
                            <div className="!w-[60px] h-[60px] m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[60px] h-[60px] m-auto overflow-visible"
                                value={49}
                                strokeWidth={8}
                                styles={{
                                  trail: { strokeWidth: 8, stroke: "#c1bbeb" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(180deg)",
                                    stroke: "#4d44b5",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <Text
                              className="absolute h-max inset-[0] justify-center m-auto text-indigo-900 text-sm w-max"
                              size="txtPoppinsSemiBold14"
                            >
                              50%
                            </Text>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_dots.svg"
                            alt="dots"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-14 w-full">
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
        </div>
      </div>
    </>
  );
};

export default FoodPage;
