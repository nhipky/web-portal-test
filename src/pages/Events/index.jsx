import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const monthOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const zipcodeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EventsPage = () => {
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
          src="images/img_calendar_indigo_500.svg"
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
                className="mb-[265px] md:ml-[0] ml-[34px] mr-[123px] mt-[15px] text-sm text-white-A700"
                size="txtPoppinsRegular14"
              >
                Made with ♥ by Peterdraw
              </Text>
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col gap-10 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 sm:flex-col flex-row md:gap-10 items-start justify-between w-3/4 md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                  size="txtPoppinsBold36Indigo900"
                >
                  Events
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
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-[20px] w-[69%] md:w-full">
                <div className="flex flex-col items-center justify-start mb-[78px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                      size="txtPoppinsBold36Indigo900"
                    >
                      Calendar
                    </Text>
                    <div className="md:flex-1 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
                      <SelectBox
                        className="h-[60px] leading-[normal] text-left text-lg w-full"
                        placeholderClassName="text-indigo-500"
                        indicator={
                          <Img
                            className="h-8 w-8"
                            src="images/img_dropdown_indigo_500.svg"
                            alt="dropdown"
                          />
                        }
                        isMulti={false}
                        name="month"
                        options={monthOptionsList}
                        isSearchable={false}
                        placeholder="January"
                        shape="round"
                        size="xs"
                        variant="outline"
                      />
                      <SelectBox
                        className="h-[60px] leading-[normal] text-left text-lg w-full"
                        placeholderClassName="text-indigo-500"
                        indicator={
                          <Img
                            className="h-8 w-8"
                            src="images/img_dropdown_indigo_500.svg"
                            alt="dropdown"
                          />
                        }
                        isMulti={false}
                        name="zipcode"
                        options={zipcodeOptionsList}
                        isSearchable={false}
                        placeholder="2021"
                        shape="round"
                        size="xs"
                        variant="outline"
                      />
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[207px] shadow-bs w-full"
                        leftIcon={
                          <div className="h-4 mr-4 w-4 bg-white-A700 my-[5px]">
                            <Img
                              className="h-4 w-[16pxpx]"
                              src="images/img_microphone.svg"
                              alt="microphone"
                            />
                          </div>
                        }
                        shape="round"
                        size="lg"
                      >
                        <div className="leading-[normal] text-left text-lg">
                          New Student
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-10 w-[95%] md:w-full">
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtPoppinsSemiBold14Gray500"
                    >
                      Monday
                    </Text>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtPoppinsSemiBold14Gray500"
                    >
                      Tuesday
                    </Text>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtPoppinsSemiBold14Gray500"
                    >
                      Wednesday
                    </Text>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtPoppinsSemiBold14Gray500"
                    >
                      Thursday
                    </Text>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtPoppinsSemiBold14Gray500"
                    >
                      Friday
                    </Text>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtPoppinsSemiBold14Gray500"
                    >
                      Saturday
                    </Text>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtPoppinsSemiBold14Gray500"
                    >
                      Sunday
                    </Text>
                  </div>
                  <List
                    className="flex flex-col gap-8 items-center mt-[22px] w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="bg-gray-100_01 border border-gray-500 border-solid flex flex-col items-start justify-start p-[9px] rounded-[14px]">
                        <Text
                          className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-gray-500 sm:text-xl"
                          size="txtPoppinsBold24Gray500"
                        >
                          31
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-col items-start justify-start p-[9px] rounded-[14px]">
                        <Text
                          className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          1
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-2 border-indigo-900 border-solid flex md:flex-1 flex-col gap-[42px] items-center justify-start p-2 rounded-[14px] w-[12%] md:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          2
                        </Text>
                        <Img
                          className="h-4 mb-[18px]"
                          src="images/img_settings_yellow_700.svg"
                          alt="settings"
                        />
                      </div>
                      <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-col items-start justify-start p-[9px] rounded-[14px]">
                        <Text
                          className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          3
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-col items-start justify-start p-[9px] rounded-[14px]">
                        <Text
                          className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          4
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-2 border-indigo-900 border-solid flex flex-col items-start justify-start p-[9px] rounded-[14px]">
                        <Text
                          className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          5
                        </Text>
                      </div>
                      <div className="bg-deep_orange-300 border-2 border-solid border-white-A700 flex md:flex-1 flex-col gap-8 items-center justify-start p-[9px] rounded-[14px] w-[12%] md:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtPoppinsBold24WhiteA700"
                        >
                          6
                        </Text>
                        <div className="flex mb-4 relative w-[72%]">
                          <div className="flex my-auto w-[70%]">
                            <div className="bg-indigo-100 h-[26px] my-auto outline outline-[1px] outline-white-A700 rounded-[50%] w-[26px]"></div>
                            <div className="bg-indigo-100 h-[26px] ml-[-6px] my-auto outline outline-[1px] outline-white-A700 rounded-[50%] w-[26px] z-[1]"></div>
                          </div>
                          <Text
                            className="bg-indigo-900 flex h-[26px] items-center justify-center ml-[-6px] my-auto outline outline-[1px] outline-white-A700 rounded-[50%] text-center text-sm text-white-A700 w-[26px] z-[1]"
                            size="txtPoppinsSemiBold14WhiteA700"
                          >
                            7+
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-col items-start justify-start p-[9px] rounded-[14px]">
                        <Text
                          className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          7
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-col items-start justify-start p-[9px] rounded-[14px]">
                        <Text
                          className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          8
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-col items-start justify-start p-[9px] rounded-[14px]">
                        <Text
                          className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          9
                        </Text>
                      </div>
                      <div className="md:h-32 h-[130px] relative w-[13%] md:w-full">
                        <div className="bg-indigo-500 border-2 border-solid border-white-A700 h-[124px] m-auto rounded-[14px] w-[95%]"></div>
                        <div className="absolute border-2 border-indigo-500 border-solid flex flex-col gap-[26px] h-full inset-[0] items-center justify-center m-auto p-[9px] rounded-[14px] w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtPoppinsBold24WhiteA700"
                          >
                            10
                          </Text>
                          <div className="flex flex-row font-cairo gap-1.5 items-start justify-center mb-[13px] w-[68%] md:w-full">
                            <Line className="bg-yellow-700 h-[35px] rounded-[1px] w-[3px]" />
                            <Text
                              className="text-sm text-white-A700"
                              size="txtCairoSemiBold14"
                            >
                              Karen, 2+
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-col items-start justify-start p-[9px] rounded-[14px]">
                        <Text
                          className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          11
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-col items-start justify-start p-[9px] rounded-[14px]">
                        <Text
                          className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          12
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-col items-start justify-start p-[9px] rounded-[14px]">
                        <Text
                          className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          13
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[29px] items-center justify-between w-full">
                      <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-col items-start justify-start p-[9px] rounded-[14px]">
                        <Text
                          className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          14
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-2 border-indigo-900 border-solid flex md:flex-1 flex-col gap-8 items-center justify-start p-[9px] rounded-[14px] w-[12%] md:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          15
                        </Text>
                        <div className="flex mb-4 relative w-[72%]">
                          <div className="flex my-auto w-[70%]">
                            <div className="bg-indigo-100 h-[26px] my-auto outline outline-[1px] outline-white-A700 rounded-[50%] w-[26px]"></div>
                            <div className="bg-indigo-100 h-[26px] ml-[-6px] my-auto outline outline-[1px] outline-white-A700 rounded-[50%] w-[26px] z-[1]"></div>
                          </div>
                          <Text
                            className="bg-indigo-900 flex h-[26px] items-center justify-center ml-[-6px] my-auto outline outline-[1px] outline-white-A700 rounded-[50%] text-center text-sm text-white-A700 w-[26px] z-[1]"
                            size="txtPoppinsSemiBold14WhiteA700"
                          >
                            2+
                          </Text>
                        </div>
                      </div>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[29px] grid grid-cols-2 w-[27%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-col items-start justify-start sm:ml-[0] p-[9px] rounded-[14px] w-full">
                          <Text
                            className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                            size="txtPoppinsBold24"
                          >
                            16
                          </Text>
                        </div>
                        <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-col items-start justify-start sm:ml-[0] p-[9px] rounded-[14px] w-full">
                          <Text
                            className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                            size="txtPoppinsBold24"
                          >
                            17
                          </Text>
                        </div>
                      </List>
                      <div className="bg-white-A700 border-2 border-indigo-900 border-solid flex md:flex-1 flex-col gap-[25px] justify-start p-[9px] rounded-[14px] w-[12%] md:w-full">
                        <Text
                          className="ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          18
                        </Text>
                        <div className="flex flex-row font-cairo gap-1.5 items-end justify-start mb-3.5 md:ml-[0] ml-[3px] mr-7 w-[65%] md:w-full">
                          <Line className="bg-deep_orange-300 h-[35px] rounded-[1px] w-[3px]" />
                          <Text
                            className="mt-2 text-indigo-900 text-sm"
                            size="txtCairoSemiBold14Indigo900"
                          >
                            Tony, 2+
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-col items-start justify-start p-[9px] rounded-[14px]">
                        <Text
                          className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          19
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-2 border-solid border-yellow-700 flex md:flex-1 flex-col gap-10 items-center justify-start p-[9px] rounded-[14px] w-[12%] md:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          20
                        </Text>
                        <PagerIndicator
                          className="flex h-4 justify-center mb-[18px] w-[70px]"
                          count={3}
                          activeCss="inline-block cursor-pointer rounded-[50%] h-4 bg-indigo-500 w-4"
                          activeIndex={1}
                          inactiveCss="inline-block cursor-pointer rounded-[50%] h-4 bg-deep_orange-300 w-4"
                          selectedWrapperCss="inline-block md:ml-[0] mx-[5.50px] sm:ml-[0]"
                          unselectedWrapperCss="inline-block md:ml-[0] mx-[5.50px] sm:ml-[0]"
                        />
                      </div>
                    </div>
                  </List>
                  <div className="md:gap-5 gap-[29px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-center min-h-[auto] mt-8 w-full">
                    <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-1 flex-col items-start justify-start p-[9px] rounded-[14px] w-full">
                      <Text
                        className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        21
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-1 flex-col items-start justify-start p-2 rounded-[14px] w-full">
                      <Text
                        className="mb-[76px] md:ml-[0] ml-[11px] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        22
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-1 flex-col items-start justify-start p-[9px] rounded-[14px] w-full">
                      <Text
                        className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        23
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-2 border-indigo-900 border-solid flex flex-1 flex-col gap-10 items-center justify-start p-[9px] rounded-[14px] w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        24
                      </Text>
                      <Img
                        className="h-4 mb-[18px]"
                        src="images/img_settings_yellow_700.svg"
                        alt="settings"
                      />
                    </div>
                    <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-1 flex-col items-start justify-start p-[9px] rounded-[14px] w-full">
                      <Text
                        className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        25
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-1 flex-col items-start justify-start p-[9px] rounded-[14px] w-full">
                      <Text
                        className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        26
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-1 flex-col items-start justify-start p-[9px] rounded-[14px] w-full">
                      <Text
                        className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        27
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-1 flex-col items-start justify-start p-[9px] rounded-[14px] w-full">
                      <Text
                        className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        28
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-2 border-indigo-900 border-solid flex flex-1 flex-col gap-[25px] items-start justify-start p-[9px] rounded-[14px] w-full">
                      <Text
                        className="ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        29
                      </Text>
                      <div className="flex flex-row font-cairo gap-1.5 items-start justify-start mb-3.5 ml-1.5 md:ml-[0] w-[55%] md:w-full">
                        <Line className="bg-yellow-700 h-[35px] rounded-[1px] w-[3px]" />
                        <Text
                          className="text-indigo-900 text-sm"
                          size="txtCairoSemiBold14Indigo900"
                        >
                          Johnny
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 border-2 border-gray-500 border-solid flex flex-1 flex-col items-start justify-start p-[9px] rounded-[14px] w-full">
                      <Text
                        className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        30
                      </Text>
                    </div>
                    <div className="bg-gray-100_01 border border-gray-500 border-solid flex flex-1 flex-col items-start justify-start p-[9px] rounded-[14px] w-full">
                      <Text
                        className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-gray-500 sm:text-xl"
                        size="txtPoppinsBold24Gray500"
                      >
                        1
                      </Text>
                    </div>
                    <div className="bg-gray-100_01 border border-gray-500 border-solid flex flex-1 flex-col items-start justify-start p-2 rounded-[14px] w-full">
                      <Text
                        className="mb-[76px] md:ml-[0] ml-[11px] text-2xl md:text-[22px] text-gray-500 sm:text-xl"
                        size="txtPoppinsBold24Gray500"
                      >
                        2
                      </Text>
                    </div>
                    <div className="bg-gray-100_01 border border-gray-500 border-solid flex flex-1 flex-col items-start justify-start p-[9px] rounded-[14px] w-full">
                      <Text
                        className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-gray-500 sm:text-xl"
                        size="txtPoppinsBold24Gray500"
                      >
                        3
                      </Text>
                    </div>
                    <div className="bg-gray-100_01 border border-gray-500 border-solid flex flex-1 flex-col items-start justify-start p-[9px] rounded-[14px] w-full">
                      <Text
                        className="mb-[75px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-gray-500 sm:text-xl"
                        size="txtPoppinsBold24Gray500"
                      >
                        4
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[30%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-start p-[30px] sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl"
                      size="txtPoppinsBold24Bluegray800"
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
                    <div className="flex sm:flex-1 flex-col items-start justify-start ml-6 sm:ml-[0] w-[39%] sm:w-full">
                      <Text
                        className="text-blue_gray-800 text-lg"
                        size="txtPoppinsSemiBold18Bluegray800"
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
                      className="h-[60px] sm:ml-[0] ml-[135px] w-[60px]"
                      src="images/img_close_indigo_100.svg"
                      alt="close"
                    />
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start sm:pr-5 pr-8 rounded-[20px] w-full">
                    <div className="bg-deep_orange-300 h-[183px] rounded-bl-[20px] rounded-tl-[20px] w-[7%]"></div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start ml-6 sm:ml-[0] w-[39%] sm:w-full">
                      <Text
                        className="text-blue_gray-800 text-lg"
                        size="txtPoppinsSemiBold18Bluegray800"
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
                      className="h-[60px] sm:ml-[0] ml-[135px] w-[60px]"
                      src="images/img_close_indigo_100.svg"
                      alt="close"
                    />
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start sm:pr-5 pr-8 rounded-[20px] w-full">
                    <div className="bg-yellow-700 h-[183px] rounded-bl-[20px] rounded-tl-[20px] w-[7%]"></div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start ml-6 sm:ml-[0] w-[41%] sm:w-full">
                      <Text
                        className="text-blue_gray-800 text-lg"
                        size="txtPoppinsSemiBold18Bluegray800"
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
                      className="h-[60px] sm:ml-[0] ml-[126px] w-[60px]"
                      src="images/img_close_indigo_100.svg"
                      alt="close"
                    />
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start sm:pr-5 pr-8 rounded-[20px] w-full">
                    <div className="bg-indigo-900 h-[183px] rounded-bl-[20px] rounded-tl-[20px] w-[7%]"></div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start ml-6 sm:ml-[0] w-[42%] sm:w-full">
                      <Text
                        className="text-blue_gray-800 text-lg"
                        size="txtPoppinsSemiBold18Bluegray800"
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
                      className="h-[60px] sm:ml-[0] ml-[122px] w-[60px]"
                      src="images/img_close_indigo_100.svg"
                      alt="close"
                    />
                  </div>
                </List>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[428px] sm:min-w-full mt-12 text-center text-lg"
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

export default EventsPage;
