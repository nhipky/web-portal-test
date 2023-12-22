import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const sortOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FinancePage = () => {
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
      icon: (
        <Img
          className="h-10 w-10"
          src="images/img_settings_indigo_500.svg"
          alt="settings"
        />
      ),
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
          alt="user"
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
                className="mb-[649px] md:ml-[0] ml-[34px] mr-[123px] mt-[15px] text-sm text-white-A700"
                size="txtPoppinsRegular14"
              >
                Made with ♥ by Peterdraw
              </Text>
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[34px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 sm:flex-col flex-row md:gap-10 items-start justify-between w-3/4 md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                  size="txtPoppinsBold36Indigo900"
                >
                  Finance
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
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-10 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-10 grid md:grid-cols-1 grid-cols-2 w-[52%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-col items-center justify-start sm:ml-[0] p-[29px] sm:px-5 rounded-[20px] w-full">
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[99%] md:w-full">
                        <Button
                          className="flex h-[72px] items-center justify-center my-[19px] w-[72px]"
                          shape="circle"
                          size="lg"
                        >
                          <Img
                            className="h-10"
                            src="images/img_student_white_a700.svg"
                            alt="student"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-500 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Total Students
                          </Text>
                          <Text
                            className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                            size="txtPoppinsBold36Indigo900"
                          >
                            932
                          </Text>
                          <Text
                            className="mt-1 text-lg text-teal-300"
                            size="txtPoppinsRegular18Teal300"
                          >
                            <span className="text-teal-300 font-poppins text-left font-semibold">
                              +10%{" "}
                            </span>
                            <span className="text-gray-500 font-poppins text-left font-normal">
                              than last month
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-[20px] w-full">
                      <div className="flex flex-row gap-[30px] items-center justify-between my-1 w-[98%] md:w-full">
                        <Button
                          className="flex h-[72px] items-center justify-center my-5 w-[72px]"
                          shape="circle"
                          color="deep_orange_300"
                          size="lg"
                        >
                          <Img
                            className="h-10"
                            src="images/img_teacher_white_a700.svg"
                            alt="teacher"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-500 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Total Teachers
                          </Text>
                          <Text
                            className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                            size="txtPoppinsBold36Indigo900"
                          >
                            754
                          </Text>
                          <Text
                            className="mt-[5px] text-lg text-red-A200"
                            size="txtPoppinsRegular18RedA200"
                          >
                            <span className="text-red-A200 font-poppins text-left font-semibold">
                              -0,5%{" "}
                            </span>
                            <span className="text-gray-500 font-poppins text-left font-normal">
                              than last month
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="bg-white-A700 flex md:flex-1 md:flex-col flex-row gap-8 items-center justify-evenly p-[29px] sm:px-5 rounded-[20px] w-[46%] md:w-full">
                    <div className="flex flex-row gap-[30px] items-center justify-start w-[49%] md:w-full">
                      <Button
                        className="flex h-[72px] items-center justify-center my-[19px] w-[72px]"
                        shape="circle"
                        color="yellow_700"
                        size="lg"
                      >
                        <Img
                          className="h-10"
                          src="images/img_finance.svg"
                          alt="finance_One"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-500 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          School Balance
                        </Text>
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                          size="txtPoppinsBold36Indigo900"
                        >
                          $123,456
                        </Text>
                        <Text
                          className="mt-0.5 text-gray-500 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          <span className="text-teal-300 font-poppins text-left font-semibold">
                            +23%
                          </span>
                          <span className="text-gray-500 font-poppins text-left font-semibold">
                            {" "}
                          </span>
                          <span className="text-gray-500 font-poppins text-left font-normal">
                            than last month
                          </span>
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-[83px] md:h-auto object-cover"
                      src="images/img_graph.png"
                      alt="graph"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-7 sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start mb-[3px] w-[99%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="md:mt-0 mt-[5px] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        Balance Analytics
                      </Text>
                      <div className="flex md:flex-1 flex-row gap-8 items-center justify-center md:ml-[0] ml-[736px] md:mt-0 mt-[3px] w-[14%] md:w-full">
                        <div className="flex flex-row gap-2 items-start justify-between w-[43%]">
                          <div className="bg-white-A700 border-[3px] border-solid border-yellow-700 h-3 mb-9 mt-1 rounded-[50%] w-3"></div>
                          <div className="flex flex-col gap-1 items-start justify-start w-auto">
                            <Text
                              className="text-gray-500 text-sm w-auto"
                              size="txtPoppinsRegular14Gray500"
                            >
                              Expense
                            </Text>
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsBold18"
                            >
                              1.245
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2 items-start justify-between w-2/5">
                          <div className="bg-white-A700 border-[3px] border-deep_orange-300 border-solid h-3 mb-[35px] mt-1 rounded-[50%] w-3"></div>
                          <div className="flex flex-col gap-1 items-start justify-start w-[53px]">
                            <Text
                              className="text-gray-500 text-sm w-auto"
                              size="txtPoppinsRegular14Gray500"
                            >
                              Income
                            </Text>
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsBold18"
                            >
                              1.356
                            </Text>
                          </div>
                        </div>
                      </div>
                      <SelectBox
                        className="md:flex-1 h-[60px] leading-[normal] ml-12 md:ml-[0] text-left text-lg w-[15%] md:w-full"
                        placeholderClassName="text-indigo-500"
                        indicator={
                          <Img
                            className="h-8 w-8"
                            src="images/img_dropdown_indigo_500.svg"
                            alt="dropdown"
                          />
                        }
                        isMulti={false}
                        name="sort"
                        options={sortOptionsList}
                        isSearchable={false}
                        placeholder="Month"
                        shape="round"
                        size="xs"
                        variant="outline"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between w-[98%] md:w-full">
                      <div className="flex flex-col gap-8 items-start justify-start md:mt-0 mt-[13px]">
                        <Text
                          className="text-gray-500 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          100
                        </Text>
                        <Text
                          className="text-gray-500 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          75
                        </Text>
                        <Text
                          className="text-gray-500 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          50
                        </Text>
                        <Text
                          className="text-gray-500 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          25
                        </Text>
                        <Text
                          className="text-gray-500 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          0
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[27px] items-center justify-start w-[95%] md:w-full">
                        <div className="h-[282px] relative w-[98%] md:w-full">
                          <div className="h-[282px] m-auto w-full">
                            <Img
                              className="absolute h-[282px] inset-[0] justify-center m-auto"
                              src="images/img_line.svg"
                              alt="line"
                            />
                            <Img
                              className="absolute bottom-[0] h-[239px] inset-x-[0] mx-auto object-cover"
                              src="images/img_chart_yellow_700_239x1266.png"
                              alt="chart"
                            />
                          </div>
                          <div className="absolute flex flex-col items-center justify-start right-[41%] top-[0] w-[9%]">
                            <div className="bg-indigo-500 flex flex-col items-center justify-end p-[11px] rounded-[10px] w-full">
                              <Text
                                className="text-center text-lg text-white-A700"
                                size="txtPoppinsBold18WhiteA700"
                              >
                                $1,345
                              </Text>
                              <Text
                                className="mt-[3px] text-center text-shadow-ts text-sm text-white-A700"
                                size="txtPoppinsRegular14"
                              >
                                July 2020
                              </Text>
                            </div>
                            <Img
                              className="h-3 w-3"
                              src="images/img_polygon1.svg"
                              alt="polygonOne"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-10 gap-[81px] h-[29px] md:h-auto items-start justify-start w-auto md:w-full">
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Jan
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Feb
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Mar
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Apr
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            May
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Jun
                          </Text>
                          <Text
                            className="text-indigo-900 text-lg"
                            size="txtPoppinsRegular18Indigo900"
                          >
                            Jul
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Aug
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Sep
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Oct
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Nov
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Dec
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col justify-end py-8 rounded-[20px] w-[58%] md:w-full">
                    <Text
                      className="ml-8 md:ml-[0] mr-[513px] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      Unpaid Student Intuition
                    </Text>
                    <List
                      className="flex flex-col items-start mt-[22px] w-auto"
                      orientation="vertical"
                    >
                      <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[27px] sm:px-5 w-full">
                        <div className="bg-indigo-100 h-12 ml-1 md:ml-[0] rounded-[50%] w-12"></div>
                        <Text
                          className="ml-6 md:ml-[0] text-indigo-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          Samantha W.
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[53px] text-indigo-500 text-lg"
                          size="txtPoppinsSemiBold18Indigo500"
                        >
                          ID 123456789
                        </Text>
                        <div className="flex md:flex-1 flex-row gap-4 items-center justify-center md:ml-[0] ml-[67px] w-[14%] md:w-full">
                          <Button
                            className="flex h-12 items-center justify-center rounded-[50%] w-12"
                            shape="circle"
                            color="deep_orange_300"
                            size="md"
                          >
                            <Img
                              className="h-6"
                              src="images/img_user_white_a700.svg"
                              alt="user"
                            />
                          </Button>
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-gray-500 text-sm"
                              size="txtPoppinsRegular14Gray500"
                            >
                              Class
                            </Text>
                            <Text
                              className="text-indigo-900 text-lg"
                              size="txtPoppinsSemiBold18"
                            >
                              VII A
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[71px] text-indigo-900 text-lg text-right"
                          size="txtPoppinsSemiBold18"
                        >
                          $ 50,036
                        </Text>
                        <Img
                          className="h-6 md:ml-[0] ml-[71px] w-6"
                          src="images/img_dots.svg"
                          alt="dots"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[27px] sm:px-5 w-full">
                        <div className="bg-indigo-100 h-12 ml-1 md:ml-[0] rounded-[50%] w-12"></div>
                        <Text
                          className="ml-6 md:ml-[0] text-indigo-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          Tony Soap
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[82px] text-indigo-500 text-lg"
                          size="txtPoppinsSemiBold18Indigo500"
                        >
                          ID 123456789
                        </Text>
                        <div className="flex md:flex-1 flex-row gap-4 items-center justify-center md:ml-[0] ml-[67px] w-[14%] md:w-full">
                          <Button
                            className="flex h-12 items-center justify-center rounded-[50%] w-12"
                            shape="circle"
                            color="deep_orange_300"
                            size="md"
                          >
                            <Img
                              className="h-6"
                              src="images/img_user_white_a700.svg"
                              alt="user"
                            />
                          </Button>
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-gray-500 text-sm"
                              size="txtPoppinsRegular14Gray500"
                            >
                              Class
                            </Text>
                            <Text
                              className="text-indigo-900 text-lg"
                              size="txtPoppinsSemiBold18"
                            >
                              VII A
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[71px] text-indigo-900 text-lg text-right"
                          size="txtPoppinsSemiBold18"
                        >
                          $ 50,036
                        </Text>
                        <Img
                          className="h-6 md:ml-[0] ml-[71px] w-6"
                          src="images/img_dots.svg"
                          alt="dots"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[27px] sm:px-5 w-full">
                        <div className="bg-indigo-100 h-12 ml-1 md:ml-[0] rounded-[50%] w-12"></div>
                        <Text
                          className="ml-6 md:ml-[0] text-indigo-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          Jordan Nico
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[67px] text-indigo-500 text-lg"
                          size="txtPoppinsSemiBold18Indigo500"
                        >
                          ID 123456789
                        </Text>
                        <div className="flex md:flex-1 flex-row gap-4 items-center justify-center md:ml-[0] ml-[67px] w-[14%] md:w-full">
                          <Button
                            className="flex h-12 items-center justify-center rounded-[50%] w-12"
                            shape="circle"
                            color="deep_orange_300"
                            size="md"
                          >
                            <Img
                              className="h-6"
                              src="images/img_user_white_a700.svg"
                              alt="user"
                            />
                          </Button>
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-gray-500 text-sm"
                              size="txtPoppinsRegular14Gray500"
                            >
                              Class
                            </Text>
                            <Text
                              className="text-indigo-900 text-lg"
                              size="txtPoppinsSemiBold18"
                            >
                              VII A
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[71px] text-indigo-900 text-lg text-right"
                          size="txtPoppinsSemiBold18"
                        >
                          $ 50,036
                        </Text>
                        <Img
                          className="h-6 md:ml-[0] ml-[71px] w-6"
                          src="images/img_dots.svg"
                          alt="dots"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[27px] sm:px-5 w-full">
                        <div className="bg-indigo-100 h-12 ml-1 md:ml-[0] rounded-[50%] w-12"></div>
                        <Text
                          className="ml-6 md:ml-[0] text-indigo-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          Karen Hope
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[71px] text-indigo-500 text-lg"
                          size="txtPoppinsSemiBold18Indigo500"
                        >
                          ID 123456789
                        </Text>
                        <div className="flex md:flex-1 flex-row gap-4 items-center justify-center md:ml-[0] ml-[67px] w-[14%] md:w-full">
                          <Button
                            className="flex h-12 items-center justify-center rounded-[50%] w-12"
                            shape="circle"
                            color="deep_orange_300"
                            size="md"
                          >
                            <Img
                              className="h-6"
                              src="images/img_user_white_a700.svg"
                              alt="user"
                            />
                          </Button>
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-gray-500 text-sm"
                              size="txtPoppinsRegular14Gray500"
                            >
                              Class
                            </Text>
                            <Text
                              className="text-indigo-900 text-lg"
                              size="txtPoppinsSemiBold18"
                            >
                              VII A
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[71px] text-indigo-900 text-lg text-right"
                          size="txtPoppinsSemiBold18"
                        >
                          $ 50,036
                        </Text>
                        <Img
                          className="h-6 md:ml-[0] ml-[71px] w-6"
                          src="images/img_dots.svg"
                          alt="dots"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[27px] sm:px-5 w-full">
                        <div className="bg-indigo-100 h-12 ml-1 md:ml-[0] rounded-[50%] w-12"></div>
                        <Text
                          className="ml-6 md:ml-[0] text-indigo-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          Nadila Adja
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[71px] text-indigo-500 text-lg"
                          size="txtPoppinsSemiBold18Indigo500"
                        >
                          ID 123456789
                        </Text>
                        <div className="flex md:flex-1 flex-row gap-4 items-center justify-center md:ml-[0] ml-[67px] w-[14%] md:w-full">
                          <Button
                            className="flex h-12 items-center justify-center rounded-[50%] w-12"
                            shape="circle"
                            color="deep_orange_300"
                            size="md"
                          >
                            <Img
                              className="h-6"
                              src="images/img_user_white_a700.svg"
                              alt="user"
                            />
                          </Button>
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-gray-500 text-sm"
                              size="txtPoppinsRegular14Gray500"
                            >
                              Class
                            </Text>
                            <Text
                              className="text-indigo-900 text-lg"
                              size="txtPoppinsSemiBold18"
                            >
                              VII A
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[71px] text-indigo-900 text-lg text-right"
                          size="txtPoppinsSemiBold18"
                        >
                          $ 50,036
                        </Text>
                        <Img
                          className="h-6 md:ml-[0] ml-[71px] w-6"
                          src="images/img_dots.svg"
                          alt="dots"
                        />
                      </div>
                    </List>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[41px] mr-8 mt-[30px] w-[92%] md:w-full">
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
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-end p-8 sm:px-5 rounded-[20px] w-2/5 md:w-full">
                    <Text
                      className="mt-0.5 text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl"
                      size="txtPoppinsBold24Bluegray800"
                    >
                      School Expense
                    </Text>
                    <List
                      className="flex flex-col gap-6 items-start mt-[41px] w-auto"
                      orientation="vertical"
                    >
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                          color="red_A200"
                          size="md"
                        >
                          <Img
                            className="h-8"
                            src="images/img_trendingup.svg"
                            alt="trendingup"
                          />
                        </Button>
                        <div className="flex flex-col gap-1 items-start justify-start ml-4 sm:ml-[0] w-auto">
                          <Text
                            className="text-blue_gray-800 text-lg w-auto"
                            size="txtPoppinsSemiBold18Bluegray800"
                          >
                            #123456789
                          </Text>
                          <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtPoppinsRegular14Gray500"
                          >
                            2 March 2021, 13:45 PM
                          </Text>
                        </div>
                        <Text
                          className="sm:ml-[0] ml-[70px] sm:mt-0 mt-[15px] text-indigo-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $ 50,036
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[60px] sm:mt-0 mt-[17px] text-lg text-teal-300"
                          size="txtPoppinsSemiBold18Teal300"
                        >
                          Complete
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[98%] md:w-full">
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                          color="red_A200"
                          size="md"
                        >
                          <Img
                            className="h-8"
                            src="images/img_trendingup.svg"
                            alt="trendingup"
                          />
                        </Button>
                        <div className="flex flex-col gap-1 items-start justify-start ml-4 sm:ml-[0] w-auto">
                          <Text
                            className="text-blue_gray-800 text-lg w-auto"
                            size="txtPoppinsSemiBold18Bluegray800"
                          >
                            #123456789
                          </Text>
                          <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtPoppinsRegular14Gray500"
                          >
                            2 March 2021, 13:45 PM
                          </Text>
                        </div>
                        <Text
                          className="sm:ml-[0] ml-[70px] sm:mt-0 mt-[15px] text-indigo-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $ 50,036
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[60px] sm:mt-0 mt-4 text-gray-500 text-lg"
                          size="txtPoppinsSemiBold18Gray500"
                        >
                          Pending
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                          color="red_A200"
                          size="md"
                        >
                          <Img
                            className="h-8"
                            src="images/img_trendingup.svg"
                            alt="trendingup"
                          />
                        </Button>
                        <div className="flex flex-col gap-1 items-start justify-start ml-4 sm:ml-[0] w-auto">
                          <Text
                            className="text-blue_gray-800 text-lg w-auto"
                            size="txtPoppinsSemiBold18Bluegray800"
                          >
                            #123456789
                          </Text>
                          <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtPoppinsRegular14Gray500"
                          >
                            2 March 2021, 13:45 PM
                          </Text>
                        </div>
                        <Text
                          className="sm:ml-[0] ml-[70px] text-indigo-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $ 50,036
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[60px] text-lg text-red-A200"
                          size="txtPoppinsSemiBold18RedA200"
                        >
                          Canceled
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                          color="red_A200"
                          size="md"
                        >
                          <Img
                            className="h-8"
                            src="images/img_trendingup.svg"
                            alt="trendingup"
                          />
                        </Button>
                        <div className="flex flex-col gap-1 items-start justify-start ml-4 sm:ml-[0] w-auto">
                          <Text
                            className="text-blue_gray-800 text-lg w-auto"
                            size="txtPoppinsSemiBold18Bluegray800"
                          >
                            #123456789
                          </Text>
                          <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtPoppinsRegular14Gray500"
                          >
                            2 March 2021, 13:45 PM
                          </Text>
                        </div>
                        <Text
                          className="sm:ml-[0] ml-[70px] sm:mt-0 mt-[15px] text-indigo-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $ 50,036
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[60px] sm:mt-0 mt-[17px] text-lg text-teal-300"
                          size="txtPoppinsSemiBold18Teal300"
                        >
                          Complete
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                          color="red_A200"
                          size="md"
                        >
                          <Img
                            className="h-8"
                            src="images/img_trendingup.svg"
                            alt="trendingup"
                          />
                        </Button>
                        <div className="flex flex-col gap-1 items-start justify-start ml-4 sm:ml-[0] w-auto">
                          <Text
                            className="text-blue_gray-800 text-lg w-auto"
                            size="txtPoppinsSemiBold18Bluegray800"
                          >
                            #123456789
                          </Text>
                          <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtPoppinsRegular14Gray500"
                          >
                            2 March 2021, 13:45 PM
                          </Text>
                        </div>
                        <Text
                          className="sm:ml-[0] ml-[70px] sm:mt-0 mt-[15px] text-indigo-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $ 50,036
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[60px] sm:mt-0 mt-[17px] text-lg text-teal-300"
                          size="txtPoppinsSemiBold18Teal300"
                        >
                          Complete
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                          color="red_A200"
                          size="md"
                        >
                          <Img
                            className="h-8"
                            src="images/img_trendingup.svg"
                            alt="trendingup"
                          />
                        </Button>
                        <div className="flex flex-col gap-1 items-start justify-start ml-4 sm:ml-[0] w-auto">
                          <Text
                            className="text-blue_gray-800 text-lg w-auto"
                            size="txtPoppinsSemiBold18Bluegray800"
                          >
                            #123456789
                          </Text>
                          <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtPoppinsRegular14Gray500"
                          >
                            2 March 2021, 13:45 PM
                          </Text>
                        </div>
                        <Text
                          className="sm:ml-[0] ml-[70px] sm:mt-0 mt-[15px] text-indigo-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $ 50,036
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[60px] sm:mt-0 mt-[17px] text-lg text-teal-300"
                          size="txtPoppinsSemiBold18Teal300"
                        >
                          Complete
                        </Text>
                      </div>
                    </List>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[74px] w-full">
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
                          alt="refresh_One"
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
                          alt="forward_One"
                        />
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

export default FinancePage;
