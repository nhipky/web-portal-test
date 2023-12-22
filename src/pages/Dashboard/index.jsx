import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const marchCounterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: <Img className="h-10 w-10" src="images/img_home.svg" alt="home" />,
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
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[345px] bg-indigo-500 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"
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
                padding: "11px 11px 11px 23px",
                gap: "24px",
                marginTop: "12px",
                color: "#c1bbeb",
                fontWeight: 500,
                fontSize: "18px",
                borderTopLeftRadius: "40px",
                borderBottomLeftRadius: "40px",
                [`&:hover, &.ps-active`]: {
                  color: "#4d44b5",
                  backgroundColor: "#f3f4ffff !important",
                  boxShadow: "0px 20px  50px 0px #bf156c0c",
                },
              },
            }}
            className="flex flex-col items-center justify-end mt-[27px] md:pl-10 sm:pl-5 pl-[46px] pt-[18px] w-[87%]"
          >
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </Menu>
          {!collapsed && (
            <Text
              className="md:ml-[0] ml-[34px] mr-[19px] mt-[97px] text-sm text-white-A700"
              size="txtPoppinsBold14"
            >
              Akademi - School Admission Dashboard
            </Text>
          )}
          {!collapsed && (
            <Text
              className="mb-[1319px] md:ml-[0] ml-[34px] mr-[123px] mt-[15px] text-sm text-white-A700"
              size="txtPoppinsRegular14"
            >
              Made with ♥ by Peterdraw
            </Text>
          )}
        </Sidebar>
        <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-[49px] md:px-5 w-full">
          <div className="flex flex-col gap-10 items-center justify-start mb-[52px] w-full">
            <div className="flex flex-col gap-10 items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                  size="txtPoppinsBold36Indigo900"
                >
                  Dashboard
                </Text>
                <Input
                  name="searchbar"
                  placeholder="Search here..."
                  value={searchbarvalue}
                  onChange={(e) => setSearchbarvalue(e)}
                  className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-lg w-full"
                  wrapClassName="flex sm:flex-1 rounded-[30px] sm:w-full"
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
              <div className="bg-white-A700 flex flex-col items-center justify-end p-[45px] md:px-10 sm:px-5 rounded-[20px] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
                  <div className="flex flex-row gap-[30px] items-center justify-between w-[19%] md:w-full">
                    <Button
                      className="flex h-[72px] items-center justify-center my-1 w-[72px]"
                      shape="circle"
                      size="lg"
                    >
                      <Img
                        className="h-10"
                        src="images/img_student_white_a700.svg"
                        alt="student_One"
                      />
                    </Button>
                    <div className="flex flex-col h-20 items-start justify-start w-20">
                      <Text
                        className="text-gray-500 text-lg"
                        size="txtPoppinsRegular18"
                      >
                        Students
                      </Text>
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                        size="txtPoppinsBold36Indigo900"
                      >
                        932
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-8 items-center justify-center md:ml-[0] ml-[82px] w-1/5 md:w-full">
                    <Button
                      className="flex h-[72px] items-center justify-center my-1 w-[72px]"
                      shape="circle"
                      color="deep_orange_300"
                      size="lg"
                    >
                      <Img
                        className="h-10"
                        src="images/img_teacher_white_a700.svg"
                        alt="teacher_One"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-500 text-lg"
                        size="txtPoppinsRegular18"
                      >
                        Teachers
                      </Text>
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                        size="txtPoppinsBold36Indigo900"
                      >
                        754
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-8 items-center justify-center md:ml-[0] ml-[79px] w-[17%] md:w-full">
                    <Button
                      className="flex h-[72px] items-center justify-center my-[3px] w-[72px]"
                      shape="circle"
                      color="yellow_700"
                      size="lg"
                    >
                      <Img
                        className="h-10"
                        src="images/img_calendar_white_a700.svg"
                        alt="calendar_One"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-500 text-lg"
                        size="txtPoppinsRegular18"
                      >
                        Events
                      </Text>
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                        size="txtPoppinsBold36Indigo900"
                      >
                        40
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-8 items-center justify-between md:ml-[0] ml-[104px] w-[18%] md:w-full">
                    <Button
                      className="flex h-[72px] items-center justify-center my-1 w-[72px]"
                      shape="circle"
                      color="indigo_900"
                      size="lg"
                    >
                      <Img
                        className="h-10"
                        src="images/img_food_white_a700.svg"
                        alt="food_One"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-500 text-lg"
                        size="txtPoppinsRegular18"
                      >
                        Foods
                      </Text>
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                        size="txtPoppinsBold36Indigo900"
                      >
                        32k
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      School Performance
                    </Text>
                    <div className="flex sm:flex-1 flex-row gap-4 items-center justify-between w-1/5 sm:w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-[46%]">
                        <div className="bg-white-A700 border-[3px] border-solid border-yellow-700 h-3 mb-[35px] mt-1 rounded-[50%] w-3"></div>
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtPoppinsRegular14Gray500"
                          >
                            This Week
                          </Text>
                          <Text
                            className="text-indigo-900 text-lg w-auto"
                            size="txtPoppinsBold18"
                          >
                            1.245
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[7px] items-start justify-between w-[46%]">
                        <div className="bg-white-A700 border-[3px] border-deep_orange-300 border-solid h-3 mb-[35px] mt-[5px] rounded-[50%] w-3"></div>
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-gray-500 text-sm w-auto"
                            size="txtPoppinsRegular14Gray500"
                          >
                            Last Week
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
                  </div>
                  <div className="flex md:flex-col flex-row gap-6 items-start justify-between w-full">
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
                    <div className="flex md:flex-1 flex-col gap-[27px] items-center justify-start w-[95%] md:w-full">
                      <div className="h-[282px] relative w-[98%] md:w-full">
                        <Img
                          className="absolute h-[282px] inset-[0] justify-center m-auto"
                          src="images/img_line.svg"
                          alt="line"
                        />
                        <Img
                          className="absolute bottom-[0] h-[239px] inset-x-[0] mx-auto object-cover"
                          src="images/img_chart_yellow_700.png"
                          alt="chart"
                        />
                      </div>
                      <div className="flex md:flex-col flex-row gap-[50px] h-[29px] md:h-auto items-start justify-start w-auto md:w-full">
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
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[31px] sm:px-5 rounded-[24px] w-[49%] md:w-full">
                  <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                    <div className="flex flex-col gap-8 items-center justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          School Calendar
                        </Text>
                        <SelectBox
                          className="sm:flex-1 leading-[normal] text-indigo-900 text-left text-lg w-[31%] sm:w-full"
                          placeholderClassName="text-indigo-900"
                          indicator={
                            <Img
                              className="h-6 mr-[0] w-6"
                              src="images/img_dropdown.svg"
                              alt="dropdown"
                            />
                          }
                          isMulti={false}
                          name="marchCounter"
                          options={marchCounterOptionsList}
                          isSearchable={false}
                          placeholder="March 2021"
                        />
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-7 justify-center w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-center justify-center p-2.5 w-16">
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Sun
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2.5 w-16">
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Mon
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2.5 w-16">
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Tue
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2.5 w-16">
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Wed
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2.5 w-16">
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Thu
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2.5 w-16">
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Fri
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2.5 w-16">
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Sat
                          </Text>
                        </div>
                      </List>
                    </div>
                    <List
                      className="flex flex-col gap-px items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                        <div className="flex sm:flex-1 flex-col items-center justify-start w-[15%] sm:w-full">
                          <Button
                            className="!text-gray-500 cursor-pointer h-[74px] leading-[normal] text-center text-lg w-[65px]"
                            shape="square"
                            color="gray_100_01"
                            size="xl"
                            variant="outline"
                          >
                            31
                          </Button>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              1
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              2
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              3
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              4
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute bg-gray-100_01 border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              5
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col items-center justify-start w-[15%] sm:w-full">
                          <div className="border border-gray-100_01 border-solid flex flex-col h-[74px] md:h-auto items-center justify-center sm:px-5 px-6 py-2.5 w-[65px]">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              6
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                        <div className="flex sm:flex-1 flex-col items-center justify-start w-[15%] sm:w-full">
                          <Button
                            className="cursor-pointer h-[74px] leading-[normal] text-center text-lg w-[65px]"
                            shape="square"
                            color="gray_100_01"
                            size="xl"
                            variant="outline"
                          >
                            7
                          </Button>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <div className="bg-indigo-500 flex flex-col h-12 items-center justify-end p-[9px] rounded-[50%] w-12">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtPoppinsRegular18WhiteA700"
                              >
                                8
                              </Text>
                            </div>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              9
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              10
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              11
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              12
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col items-center justify-start w-[15%] sm:w-full">
                          <div className="border border-gray-100_01 border-solid flex flex-col h-[74px] md:h-auto items-center justify-center sm:px-5 px-6 py-2.5 w-[65px]">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              13
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                        <div className="flex sm:flex-1 flex-col items-center justify-start w-[15%] sm:w-full">
                          <Button
                            className="cursor-pointer h-[74px] leading-[normal] text-center text-lg w-[65px]"
                            shape="square"
                            color="gray_100_01"
                            size="xl"
                            variant="outline"
                          >
                            14
                          </Button>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              15
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              16
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              17
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              18
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              19
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col items-center justify-start w-[15%] sm:w-full">
                          <div className="border border-gray-100_01 border-solid flex flex-col h-[74px] md:h-auto items-center justify-center sm:px-5 px-6 py-2.5 w-[65px]">
                            <Text
                              className="bg-yellow-700 flex h-12 items-center justify-center rounded-[50%] text-center text-lg text-white-A700 w-12"
                              size="txtPoppinsRegular18WhiteA700"
                            >
                              20
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                        <div className="flex sm:flex-1 flex-col items-center justify-start w-[15%] sm:w-full">
                          <Button
                            className="cursor-pointer h-[74px] leading-[normal] text-center text-lg w-[65px]"
                            shape="square"
                            color="gray_100_01"
                            size="xl"
                            variant="outline"
                          >
                            21
                          </Button>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              22
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <div className="bg-deep_orange-300 flex flex-col h-12 items-center justify-end p-2.5 rounded-[50%] w-12">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtPoppinsRegular18WhiteA700"
                              >
                                23
                              </Text>
                            </div>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              24
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              25
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              26
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col items-center justify-start w-[15%] sm:w-full">
                          <div className="border border-gray-100_01 border-solid flex flex-col h-[74px] md:h-auto items-center justify-center sm:px-5 px-6 py-2.5 w-[65px]">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              27
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                        <div className="flex sm:flex-1 flex-col items-center justify-start w-[15%] sm:w-full">
                          <Button
                            className="cursor-pointer h-[74px] leading-[normal] text-center text-lg w-[65px]"
                            shape="square"
                            color="gray_100_01"
                            size="xl"
                            variant="outline"
                          >
                            28
                          </Button>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              29
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              30
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              31
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto sm:px-5 px-6 py-2.5 w-16">
                            <Text
                              className="text-gray-500 text-lg w-auto"
                              size="txtPoppinsRegular18"
                            >
                              1
                            </Text>
                          </div>
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                        <div className="h-[74px] relative w-[15%] sm:w-full">
                          <div className="absolute border border-gray-100_01 border-solid h-[74px] inset-[0] justify-center m-auto w-full"></div>
                          <Button
                            className="!text-gray-500 absolute cursor-pointer h-full inset-[0] leading-[normal] m-auto text-center text-lg w-16"
                            shape="square"
                            color="gray_100_01"
                            size="xl"
                            variant="outline"
                          >
                            2
                          </Button>
                        </div>
                        <div className="flex sm:flex-1 flex-col items-center justify-start w-[15%] sm:w-full">
                          <Button
                            className="!text-gray-500 cursor-pointer h-[74px] leading-[normal] text-center text-lg w-[65px]"
                            shape="square"
                            color="gray_100_01"
                            size="xl"
                            variant="outline"
                          >
                            3
                          </Button>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-[20px] w-[49%] md:w-full">
                  <div className="flex flex-col gap-[22px] items-center justify-start mb-[7px] w-[99%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        School Finance
                      </Text>
                      <div className="flex sm:flex-1 flex-row gap-4 items-center justify-between sm:mt-0 mt-1 w-[44%] sm:w-full">
                        <div className="flex flex-row gap-2 items-start justify-between w-[46%]">
                          <div className="bg-white-A700 border-[3px] border-solid border-yellow-700 h-3 mb-[35px] mt-1 rounded-[50%] w-3"></div>
                          <div className="flex flex-col gap-1 items-start justify-start w-auto">
                            <Text
                              className="text-gray-500 text-sm w-auto"
                              size="txtPoppinsRegular14Gray500"
                            >
                              This Week
                            </Text>
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsBold18"
                            >
                              1.245
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[7px] items-start justify-between w-[46%]">
                          <div className="bg-white-A700 border-[3px] border-deep_orange-300 border-solid h-3 mb-[35px] mt-[5px] rounded-[50%] w-3"></div>
                          <div className="flex flex-col gap-1 items-start justify-start w-auto">
                            <Text
                              className="text-gray-500 text-sm w-auto"
                              size="txtPoppinsRegular14Gray500"
                            >
                              Last Week
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
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-3 justify-start w-full">
                        <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-between w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-gray-500 text-lg"
                              size="txtPoppinsRegular18"
                            >
                              100
                            </Text>
                            <Text
                              className="mt-[42px] text-gray-500 text-lg"
                              size="txtPoppinsRegular18"
                            >
                              80
                            </Text>
                            <Text
                              className="mt-[41px] text-gray-500 text-lg"
                              size="txtPoppinsRegular18"
                            >
                              60
                            </Text>
                            <Text
                              className="mt-[43px] text-gray-500 text-lg"
                              size="txtPoppinsRegular18"
                            >
                              40
                            </Text>
                            <Text
                              className="mt-[41px] text-gray-500 text-lg"
                              size="txtPoppinsRegular18"
                            >
                              20
                            </Text>
                            <Text
                              className="mt-11 text-gray-500 text-lg"
                              size="txtPoppinsRegular18"
                            >
                              0
                            </Text>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-[348px] items-center justify-start pt-1.5 px-1.5 w-[91%] sm:w-full"
                            style={{
                              backgroundImage: "url('images/img_group1.svg')",
                            }}
                          >
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[337px] items-center justify-start mt-1 p-[75px] md:px-10 sm:px-5 w-full"
                              style={{
                                backgroundImage: "url('images/img_group2.svg')",
                              }}
                            >
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[82px] items-center justify-start mb-[104px] p-2 w-[42%] md:w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_details.svg')",
                                }}
                              >
                                <div className="flex flex-col items-center justify-start mb-2.5 mt-0.5">
                                  <Text
                                    className="text-center text-lg text-white-A700"
                                    size="txtPoppinsBold18WhiteA700"
                                  >
                                    42%
                                  </Text>
                                  <Text
                                    className="mt-1 text-center text-shadow-ts text-sm text-white-A700"
                                    size="txtPoppinsRegular14"
                                  >
                                    982 Income
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end md:ml-[0] ml-[49px] w-[88%] md:w-full">
                          <Text
                            className="text-gray-500 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Mon
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[26px] text-gray-500 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Tue
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[27px] text-indigo-900 text-lg"
                            size="txtPoppinsRegular18Indigo900"
                          >
                            Wed
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[25px] text-gray-500 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Thu
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[27px] text-gray-500 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Fri
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[31px] text-gray-500 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Sat
                          </Text>
                          <Text
                            className="ml-7 sm:ml-[0] text-gray-500 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Sun
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col justify-end py-8 rounded-[20px] w-full">
              <Text
                className="ml-8 md:ml-[0] mr-[746px] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
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
                    Samantha William
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[109px] text-indigo-500 text-lg"
                    size="txtPoppinsSemiBold18Indigo500"
                  >
                    ID 123456789
                  </Text>
                  <div className="flex md:flex-1 flex-row gap-4 items-center justify-center md:ml-[0] ml-[93px] w-[11%] md:w-full">
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
                    className="md:ml-[0] ml-[100px] text-indigo-900 text-lg text-right"
                    size="txtPoppinsSemiBold18"
                  >
                    $ 50,036
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[90px]"
                    src="images/img_settings.svg"
                    alt="settings"
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
                    className="md:ml-[0] ml-[185px] text-indigo-500 text-lg"
                    size="txtPoppinsSemiBold18Indigo500"
                  >
                    ID 123456789
                  </Text>
                  <div className="flex md:flex-1 flex-row gap-4 items-center justify-center md:ml-[0] ml-[93px] w-[11%] md:w-full">
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
                    className="md:ml-[0] ml-[100px] text-indigo-900 text-lg text-right"
                    size="txtPoppinsSemiBold18"
                  >
                    $ 50,036
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[90px]"
                    src="images/img_settings.svg"
                    alt="settings"
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
                    className="md:ml-[0] ml-[170px] text-indigo-500 text-lg"
                    size="txtPoppinsSemiBold18Indigo500"
                  >
                    ID 123456789
                  </Text>
                  <div className="flex md:flex-1 flex-row gap-4 items-center justify-center md:ml-[0] ml-[93px] w-[11%] md:w-full">
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
                    className="md:ml-[0] ml-[100px] text-indigo-900 text-lg text-right"
                    size="txtPoppinsSemiBold18"
                  >
                    $ 50,036
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[90px]"
                    src="images/img_settings.svg"
                    alt="settings"
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
                    className="md:ml-[0] ml-[174px] text-indigo-500 text-lg"
                    size="txtPoppinsSemiBold18Indigo500"
                  >
                    ID 123456789
                  </Text>
                  <div className="flex md:flex-1 flex-row gap-4 items-center justify-center md:ml-[0] ml-[93px] w-[11%] md:w-full">
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
                    className="md:ml-[0] ml-[100px] text-indigo-900 text-lg text-right"
                    size="txtPoppinsSemiBold18"
                  >
                    $ 50,036
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[90px]"
                    src="images/img_settings.svg"
                    alt="settings"
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
                    className="md:ml-[0] ml-[174px] text-indigo-500 text-lg"
                    size="txtPoppinsSemiBold18Indigo500"
                  >
                    ID 123456789
                  </Text>
                  <div className="flex md:flex-1 flex-row gap-4 items-center justify-center md:ml-[0] ml-[93px] w-[11%] md:w-full">
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
                    className="md:ml-[0] ml-[100px] text-indigo-900 text-lg text-right"
                    size="txtPoppinsSemiBold18"
                  >
                    $ 50,036
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[90px]"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                </div>
              </List>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[41px] mr-8 mt-[30px] w-[94%] md:w-full">
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
        <div className="bg-white-A700 flex flex-1 flex-col items-start justify-end p-8 md:px-5 w-full">
          <div className="flex flex-row items-center justify-start mt-[18px] w-[95%] md:w-full">
            <Img
              className="h-[60px] w-[60px]"
              src="images/img_notification.svg"
              alt="notification"
            />
            <Button
              className="flex h-[60px] items-center justify-center ml-5 rounded-[50%] w-[60px]"
              shape="circle"
              color="white_A700"
              size="lg"
            >
              <Img className="h-8" src="images/img_gear.svg" alt="gear" />
            </Button>
            <div className="flex flex-col items-end justify-start ml-[25px]">
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
            <div className="bg-indigo-100 h-[60px] ml-6 rounded-[50%] w-[60px]"></div>
          </div>
          <div className="flex flex-col items-center justify-start mt-9 w-[95%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-col items-start justify-start mt-0.5">
                  <Text
                    className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    Recent Students
                  </Text>
                  <Text
                    className="mt-1 text-gray-500 text-sm"
                    size="txtPoppinsRegular14Gray500"
                  >
                    <span className="text-gray-500 font-poppins text-left font-normal">
                      You have{" "}
                    </span>
                    <span className="text-gray-500 font-poppins text-left font-semibold">
                      456
                    </span>
                    <span className="text-gray-500 font-poppins text-left font-normal">
                      {" "}
                      students
                    </span>
                  </Text>
                </div>
                <div className="font-cairo h-[53px] relative w-[16%]">
                  <div className="absolute bg-indigo-500 h-12 inset-[0] justify-center m-auto rounded-[50%] shadow-bs w-12"></div>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-max"
                    size="txtCairoBold28"
                  >
                    +
                  </Text>
                </div>
              </div>
              <List
                className="flex flex-col gap-8 items-center mt-[35px] w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row items-center justify-start w-full">
                  <div className="bg-indigo-100 h-12 rounded-[50%] w-12"></div>
                  <div className="flex flex-col items-start justify-start ml-4">
                    <Text
                      className="text-indigo-900 text-sm"
                      size="txtPoppinsSemiBold14"
                    >
                      Samantha William
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-sm"
                      size="txtPoppinsRegular14Gray500"
                    >
                      Class VII A
                    </Text>
                  </div>
                  <Button
                    className="border-2 border-gray-500 border-solid flex h-12 items-center justify-center ml-[66px] rounded-[50%] w-12"
                    shape="circle"
                    color="white_A700"
                    size="md"
                  >
                    <Img
                      className="h-6"
                      src="images/img_email.svg"
                      alt="email"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start w-full">
                  <div className="bg-indigo-100 h-12 rounded-[50%] w-12"></div>
                  <div className="flex flex-col items-start justify-start ml-4">
                    <Text
                      className="text-indigo-900 text-sm"
                      size="txtPoppinsSemiBold14"
                    >
                      Tony Soap
                    </Text>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtPoppinsRegular14Gray500"
                    >
                      Class VII A
                    </Text>
                  </div>
                  <Button
                    className="flex h-12 items-center justify-center ml-[125px] rounded-[50%] w-12"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-6"
                      src="images/img_email_white_a700.svg"
                      alt="email"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start w-full">
                  <div className="bg-indigo-100 h-12 rounded-[50%] w-12"></div>
                  <div className="flex flex-col items-start justify-start ml-4">
                    <Text
                      className="text-indigo-900 text-sm"
                      size="txtPoppinsSemiBold14"
                    >
                      Karen Hope
                    </Text>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtPoppinsRegular14Gray500"
                    >
                      Class VII A
                    </Text>
                  </div>
                  <Button
                    className="border-2 border-gray-500 border-solid flex h-12 items-center justify-center ml-[117px] rounded-[50%] w-12"
                    shape="circle"
                    color="white_A700"
                    size="md"
                  >
                    <Img
                      className="h-6"
                      src="images/img_email.svg"
                      alt="email"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start w-full">
                  <div className="bg-indigo-100 h-12 rounded-[50%] w-12"></div>
                  <div className="flex flex-col items-start justify-start ml-4">
                    <Text
                      className="text-indigo-900 text-sm"
                      size="txtPoppinsSemiBold14"
                    >
                      Jordan Nico
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-sm"
                      size="txtPoppinsRegular14Gray500"
                    >
                      Class VII B
                    </Text>
                  </div>
                  <Button
                    className="border-2 border-gray-500 border-solid flex h-12 items-center justify-center ml-[114px] rounded-[50%] w-12"
                    shape="circle"
                    color="white_A700"
                    size="md"
                  >
                    <Img
                      className="h-6"
                      src="images/img_email.svg"
                      alt="email"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start w-full">
                  <div className="bg-indigo-100 h-12 rounded-[50%] w-12"></div>
                  <div className="flex flex-col items-start justify-start ml-4">
                    <Text
                      className="text-indigo-900 text-sm"
                      size="txtPoppinsSemiBold14"
                    >
                      Nadila Adja
                    </Text>
                    <Text
                      className="mt-0.5 text-gray-500 text-sm"
                      size="txtPoppinsRegular14Gray500"
                    >
                      Class VII B
                    </Text>
                  </div>
                  <Button
                    className="border-2 border-gray-500 border-solid flex h-12 items-center justify-center ml-[117px] rounded-[50%] w-12"
                    shape="circle"
                    color="white_A700"
                    size="md"
                  >
                    <Img
                      className="h-6"
                      src="images/img_email.svg"
                      alt="email"
                    />
                  </Button>
                </div>
              </List>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[312px] mt-8 text-center text-lg"
                shape="round"
                color="indigo_500_19"
                size="lg"
              >
                View More
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start mt-[66px] w-[95%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
              size="txtPoppinsBold24"
            >
              Messages
            </Text>
            <List
              className="flex flex-col gap-3.5 items-center mt-5 w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                  <div className="flex flex-row gap-4 items-center justify-between w-full">
                    <div className="bg-indigo-100 h-12 my-[5px] rounded-[50%] w-12"></div>
                    <div className="md:h-[47px] h-[59px] relative w-4/5">
                      <div className="absolute flex flex-col gap-[5px] h-max inset-y-[0] items-start justify-start left-[0] my-auto">
                        <Text
                          className="text-indigo-900 text-sm"
                          size="txtPoppinsSemiBold14"
                        >
                          Samantha William
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtPoppinsRegular14Gray500"
                        >
                          Lorem ipsum dolor sit amet...
                        </Text>
                      </div>
                      <Text
                        className="absolute right-[0] text-gray-500 text-sm top-[0]"
                        size="txtPoppinsRegular14Gray500"
                      >
                        12:45 PM
                      </Text>
                      <div className="absolute bottom-[0] flex flex-col font-cairo items-center justify-start right-[10%]">
                        <Text
                          className="text-sm text-white-A700"
                          size="txtCairoRegular14"
                        >
                          2
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-500 h-px w-full" />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                  <div className="flex flex-row gap-4 items-center justify-between w-full">
                    <div className="bg-indigo-100 h-12 my-[5px] rounded-[50%] w-12"></div>
                    <div className="md:h-[45px] h-[59px] relative w-4/5">
                      <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[0] my-auto">
                        <Text
                          className="text-indigo-900 text-sm"
                          size="txtPoppinsSemiBold14"
                        >
                          Tony Soap
                        </Text>
                        <Text
                          className="mt-[3px] text-gray-500 text-sm"
                          size="txtPoppinsRegular14Gray500"
                        >
                          Lorem ipsum dolor sit amet...
                        </Text>
                      </div>
                      <Text
                        className="absolute right-[0] text-gray-500 text-sm top-[0]"
                        size="txtPoppinsRegular14Gray500"
                      >
                        12:45 PM
                      </Text>
                      <div className="absolute bottom-[0] flex flex-col font-cairo items-center justify-start right-[10%]">
                        <Text
                          className="text-sm text-white-A700"
                          size="txtCairoRegular14"
                        >
                          2
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-500 h-px w-full" />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                  <div className="flex flex-row gap-4 items-center justify-between w-full">
                    <div className="bg-indigo-100 h-12 my-[5px] rounded-[50%] w-12"></div>
                    <div className="md:h-[47px] h-[59px] relative w-4/5">
                      <div className="absolute flex flex-col gap-[5px] h-max inset-y-[0] items-start justify-start left-[0] my-auto">
                        <Text
                          className="text-indigo-900 text-sm"
                          size="txtPoppinsSemiBold14"
                        >
                          Jordan Nico
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtPoppinsRegular14Gray500"
                        >
                          Lorem ipsum dolor sit amet...
                        </Text>
                      </div>
                      <Text
                        className="absolute right-[0] text-gray-500 text-sm top-[0]"
                        size="txtPoppinsRegular14Gray500"
                      >
                        12:45 PM
                      </Text>
                      <div className="absolute bottom-[0] flex flex-col font-cairo items-center justify-start right-[10%]">
                        <Text
                          className="text-sm text-white-A700"
                          size="txtCairoRegular14"
                        >
                          2
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-500 h-px w-full" />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                  <div className="flex flex-row gap-4 items-center justify-between w-full">
                    <div className="bg-indigo-100 h-12 my-[5px] rounded-[50%] w-12"></div>
                    <div className="md:h-[46px] h-[59px] relative w-4/5">
                      <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[0] my-auto">
                        <Text
                          className="text-indigo-900 text-sm"
                          size="txtPoppinsSemiBold14"
                        >
                          Nadila Adja
                        </Text>
                        <Text
                          className="mt-1 text-gray-500 text-sm"
                          size="txtPoppinsRegular14Gray500"
                        >
                          Lorem ipsum dolor sit amet...
                        </Text>
                      </div>
                      <Text
                        className="absolute right-[0] text-gray-500 text-sm top-[0]"
                        size="txtPoppinsRegular14Gray500"
                      >
                        12:45 PM
                      </Text>
                      <div className="absolute bottom-[0] flex flex-col font-cairo items-center justify-start right-[10%]">
                        <Text
                          className="text-sm text-white-A700"
                          size="txtCairoRegular14"
                        >
                          2
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-500 h-px w-full" />
                </div>
              </div>
            </List>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[312px] mt-[31px] text-center text-lg"
              shape="round"
              color="indigo_500_19"
              size="lg"
            >
              View More
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start mb-2 mt-[63px] w-[95%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl"
              size="txtPoppinsBold24Bluegray800"
            >
              Current Foods Menu
            </Text>
            <List
              className="flex flex-col gap-[31px] items-center mt-[29px] w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-[23px] items-start justify-start w-full">
                <div className="bg-indigo-100 h-40 rounded-[18px] w-full"></div>
                <div className="flex flex-col gap-[5px] items-start justify-start">
                  <Text
                    className="text-blue_gray-800 text-lg"
                    size="txtPoppinsSemiBold18Bluegray800"
                  >
                    Beef Steak with Fried Potato
                  </Text>
                  <Text
                    className="text-gray-500 text-sm"
                    size="txtPoppinsRegular14Gray500"
                  >
                    Lorem ipsum dolor sit amet...
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[25px] items-start justify-start w-full">
                <div className="bg-indigo-100 h-40 rounded-[18px] w-full"></div>
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-blue_gray-800 text-lg"
                    size="txtPoppinsSemiBold18Bluegray800"
                  >
                    Pancake with Honey
                  </Text>
                  <Text
                    className="mt-[3px] text-gray-500 text-sm"
                    size="txtPoppinsRegular14Gray500"
                  >
                    Lorem ipsum dolor sit amet...
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[25px] items-start justify-start w-full">
                <div className="bg-indigo-100 h-40 rounded-[18px] w-full"></div>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-800 text-lg"
                    size="txtPoppinsSemiBold18Bluegray800"
                  >
                    Japanese Beef Ramen
                  </Text>
                  <Text
                    className="mt-[3px] text-gray-500 text-sm"
                    size="txtPoppinsRegular14Gray500"
                  >
                    Lorem ipsum dolor sit amet...
                  </Text>
                </div>
              </div>
            </List>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[312px] mt-[31px] text-center text-lg"
              shape="round"
              color="indigo_500_19"
              size="lg"
            >
              View More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
