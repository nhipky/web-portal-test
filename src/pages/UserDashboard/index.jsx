import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const UserDashboardPage = () => {
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
          src="images/img_user_indigo_500.svg"
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
  const [searchbaronevalue, setSearchbaronevalue] = React.useState("");
  const [searchbartwovalue, setSearchbartwovalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-full">
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
                className="mb-[379px] md:ml-[0] ml-[34px] mr-[123px] mt-[15px] text-sm text-white-A700"
                size="txtPoppinsRegular14"
              >
                Made with ♥ by Peterdraw
              </Text>
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col gap-10 items-center justify-start md:px-5 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                size="txtPoppinsBold36Indigo900"
              >
                User Dashboard
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
            <div className="bg-white-A700 flex flex-col gap-3.5 justify-start pb-[29px] rounded-[20px] w-full">
              <div className="flex md:h-[164px] h-[196px] justify-end relative w-full">
                <Img
                  className="h-6 ml-auto mr-8 mt-auto w-6"
                  src="images/img_dots.svg"
                  alt="dots"
                />
                <div className="absolute md:h-[164px] h-[196px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bg-indigo-500 flex flex-col inset-x-[0] items-center justify-start mx-auto rounded-tl-[20px] rounded-tr-[20px] shadow-bs top-[0] w-full">
                    <Img
                      className="h-[140px] rounded-tl-[20px] rounded-tr-[20px]"
                      src="images/img_masking_yellow_700.svg"
                      alt="masking"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[164px] left-[3%] w-[164px]"
                    src="images/img_avatar.svg"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-8 md:ml-[0] w-[81%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[29%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900"
                    size="txtPoppinsBold32"
                  >
                    Nabila Azalea
                  </Text>
                  <Text
                    className="mt-[9px] text-indigo-900 text-lg"
                    size="txtPoppinsSemiBold18"
                  >
                    Admin
                  </Text>
                  <Input
                    name="country"
                    placeholder="Jakarta, Indonesia"
                    className="leading-[normal] p-0 placeholder:text-gray-500 text-gray-500 text-left text-lg w-full"
                    wrapClassName="flex mt-4 w-[88%]"
                    prefix={
                      <Img
                        className="h-6 mr-2 my-px"
                        src="images/img_location_gray_500.svg"
                        alt="Location"
                      />
                    }
                    size="xs"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start md:ml-[0] ml-[67px] md:mt-0 mt-[29px] w-[24%] md:w-full">
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    Phone
                  </Text>
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
                <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[105px] md:mt-0 mt-[29px] w-[28%] md:w-full">
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    Email
                  </Text>
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
                      jordan@mail.com
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[31px] sm:px-5 rounded-[20px] w-[46%] md:w-full">
                <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-8 items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          Contacts
                        </Text>
                        <Text
                          className="mt-1 text-base text-gray-500"
                          size="txtPoppinsRegular16"
                        >
                          <span className="text-gray-500 font-poppins text-left font-normal">
                            You have{" "}
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-semibold">
                            741
                          </span>
                          <span className="text-gray-500 font-poppins text-left font-normal">
                            {" "}
                            contacts
                          </span>
                        </Text>
                      </div>
                      <Button
                        className="flex h-[60px] items-center justify-center mb-1 rounded-[50%] shadow-bs w-[60px]"
                        shape="circle"
                        size="xl"
                      >
                        <Img
                          className="h-4"
                          src="images/img_microphone.svg"
                          alt="microphone"
                        />
                      </Button>
                    </div>
                    <Input
                      name="searchbar_One"
                      placeholder="Search here..."
                      value={searchbaronevalue}
                      onChange={(e) => setSearchbaronevalue(e)}
                      className="!placeholder:text-gray-500 !text-gray-500 leading-[normal] p-0 text-left text-lg w-full"
                      wrapClassName="flex rounded-[30px] w-full"
                      prefix={
                        <Img
                          className="cursor-pointer h-8 mr-4 my-auto"
                          src="images/img_search_indigo_900.svg"
                          alt="search"
                        />
                      }
                      suffix={
                        <CloseSVG
                          fillColor="#a098ae"
                          className="cursor-pointer h-8 my-auto"
                          onClick={() => setSearchbaronevalue("")}
                          style={{
                            visibility:
                              searchbaronevalue?.length <= 0
                                ? "hidden"
                                : "visible",
                          }}
                          height={32}
                          width={32}
                          viewBox="0 0 32 32"
                        />
                      }
                      color="gray_500"
                      variant="outline"
                    ></Input>
                    <List
                      className="flex flex-col gap-8 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                        <Img
                          className="h-[60px] w-[60px]"
                          src="images/img_close_indigo_100.svg"
                          alt="close"
                        />
                        <div className="flex flex-col items-start justify-start ml-4 sm:ml-[0]">
                          <Text
                            className="text-indigo-900 text-lg"
                            size="txtPoppinsSemiBold18"
                          >
                            Samantha William
                          </Text>
                          <Text
                            className="mt-[3px] text-gray-500 text-sm"
                            size="txtPoppinsRegular14Gray500"
                          >
                            Class VII-A
                          </Text>
                        </div>
                        <Button
                          className="flex h-[60px] items-center justify-center sm:ml-[0] ml-[88px] rounded-[50%] w-[60px]"
                          shape="circle"
                          color="gray_500"
                          size="lg"
                          variant="outline"
                        >
                          <Img
                            className="h-8"
                            src="images/img_email.svg"
                            alt="email"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                        <Img
                          className="h-[60px] w-[60px]"
                          src="images/img_close_indigo_100.svg"
                          alt="close"
                        />
                        <div className="flex flex-col items-start justify-start ml-4 sm:ml-[0]">
                          <Text
                            className="text-indigo-900 text-lg"
                            size="txtPoppinsSemiBold18"
                          >
                            Tony Soap
                          </Text>
                          <Text
                            className="text-gray-500 text-sm"
                            size="txtPoppinsRegular14Gray500"
                          >
                            Class VII-A
                          </Text>
                        </div>
                        <Button
                          className="flex h-[60px] items-center justify-center sm:ml-[0] ml-[164px] rounded-[50%] shadow-bs w-[60px]"
                          shape="circle"
                          size="lg"
                        >
                          <Img
                            className="h-8"
                            src="images/img_email_white_a700.svg"
                            alt="email"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                        <Img
                          className="h-[60px] w-[60px]"
                          src="images/img_close_indigo_100.svg"
                          alt="close"
                        />
                        <div className="flex flex-col items-start justify-start ml-4 sm:ml-[0]">
                          <Text
                            className="text-indigo-900 text-lg"
                            size="txtPoppinsSemiBold18"
                          >
                            Karen Hope
                          </Text>
                          <Text
                            className="text-gray-500 text-sm"
                            size="txtPoppinsRegular14Gray500"
                          >
                            Class VII-A
                          </Text>
                        </div>
                        <Button
                          className="flex h-[60px] items-center justify-center sm:ml-[0] ml-[153px] rounded-[50%] w-[60px]"
                          shape="circle"
                          color="gray_500"
                          size="lg"
                          variant="outline"
                        >
                          <Img
                            className="h-8"
                            src="images/img_email.svg"
                            alt="email"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                        <Img
                          className="h-[60px] w-[60px]"
                          src="images/img_close_indigo_100.svg"
                          alt="close"
                        />
                        <div className="flex flex-col items-start justify-start ml-4 sm:ml-[0]">
                          <Text
                            className="text-indigo-900 text-lg"
                            size="txtPoppinsSemiBold18"
                          >
                            Jordan Nico
                          </Text>
                          <Text
                            className="mt-[3px] text-gray-500 text-sm"
                            size="txtPoppinsRegular14Gray500"
                          >
                            Class VII-B
                          </Text>
                        </div>
                        <Button
                          className="flex h-[60px] items-center justify-center sm:ml-[0] ml-[149px] rounded-[50%] w-[60px]"
                          shape="circle"
                          color="gray_500"
                          size="lg"
                          variant="outline"
                        >
                          <Img
                            className="h-8"
                            src="images/img_email.svg"
                            alt="email"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                        <Img
                          className="h-[60px] w-[60px]"
                          src="images/img_close_indigo_100.svg"
                          alt="close"
                        />
                        <div className="flex flex-col items-start justify-start ml-4 sm:ml-[0]">
                          <Text
                            className="text-indigo-900 text-lg"
                            size="txtPoppinsSemiBold18"
                          >
                            Nadila Adja
                          </Text>
                          <Text
                            className="text-gray-500 text-sm"
                            size="txtPoppinsRegular14Gray500"
                          >
                            Class VII-C
                          </Text>
                        </div>
                        <Button
                          className="flex h-[60px] items-center justify-center sm:ml-[0] ml-[153px] rounded-[50%] w-[60px]"
                          shape="circle"
                          color="gray_500"
                          size="lg"
                          variant="outline"
                        >
                          <Img
                            className="h-8"
                            src="images/img_email.svg"
                            alt="email"
                          />
                        </Button>
                      </div>
                    </List>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[396px] sm:min-w-full text-center text-lg"
                      shape="round"
                      color="indigo_500_36"
                      size="lg"
                    >
                      View More
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-center p-8 sm:px-5 rounded-[20px] w-[51%] md:w-full">
                <Text
                  className="mt-0.5 text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Messages
                </Text>
                <Input
                  name="searchbar_Two"
                  placeholder="Search here..."
                  value={searchbartwovalue}
                  onChange={(e) => setSearchbartwovalue(e)}
                  className="!placeholder:text-gray-500 !text-gray-500 leading-[normal] p-0 text-left text-lg w-full"
                  wrapClassName="flex mt-[29px] rounded-[30px] w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-8 mr-4 my-auto"
                      src="images/img_search_indigo_900.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#a098ae"
                      className="cursor-pointer h-8 my-auto"
                      onClick={() => setSearchbartwovalue("")}
                      style={{
                        visibility:
                          searchbartwovalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={32}
                      width={32}
                      viewBox="0 0 32 32"
                    />
                  }
                  color="gray_500"
                  variant="outline"
                ></Input>
                <div className="flex flex-col gap-4 items-start justify-start mt-8 w-auto sm:w-full">
                  <List
                    className="flex flex-col gap-[15px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                          <div className="bg-indigo-100 h-[60px] rounded-[50%] w-[60px]"></div>
                          <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0]">
                            <Text
                              className="text-indigo-900 text-lg"
                              size="txtPoppinsSemiBold18"
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
                          <div className="flex sm:flex-1 flex-col gap-[11px] items-end justify-start sm:ml-[0] ml-[108px] w-[14%] sm:w-full">
                            <Text
                              className="text-gray-500 text-sm"
                              size="txtPoppinsRegular14Gray500"
                            >
                              12:45 PM
                            </Text>
                            <Button
                              className="flex h-6 items-center justify-center rounded-[50%] w-6"
                              shape="circle"
                              color="deep_orange_300"
                              size="xs"
                            >
                              <Img
                                src="images/img_settings_white_a700.svg"
                                alt="settings"
                              />
                            </Button>
                          </div>
                        </div>
                        <Line className="bg-gray-100_01 h-px w-full" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                          <div className="bg-indigo-100 h-[60px] rounded-[50%] w-[60px]"></div>
                          <div className="flex flex-col gap-1.5 items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-1">
                            <Text
                              className="text-indigo-900 text-lg"
                              size="txtPoppinsSemiBold18"
                            >
                              Tony Soap
                            </Text>
                            <Text
                              className="text-gray-500 text-sm"
                              size="txtPoppinsRegular14Gray500"
                            >
                              Lorem ipsum dolor sit amet...
                            </Text>
                          </div>
                          <div className="flex sm:flex-1 flex-col gap-[11px] items-end justify-start sm:ml-[0] ml-[108px] w-[14%] sm:w-full">
                            <Text
                              className="text-gray-500 text-sm"
                              size="txtPoppinsRegular14Gray500"
                            >
                              12:45 PM
                            </Text>
                            <Button
                              className="flex h-6 items-center justify-center rounded-[50%] w-6"
                              shape="circle"
                              color="deep_orange_300"
                              size="xs"
                            >
                              <Img
                                src="images/img_settings_white_a700.svg"
                                alt="settings"
                              />
                            </Button>
                          </div>
                        </div>
                        <Line className="bg-gray-100_01 h-px w-full" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                          <div className="bg-indigo-100 h-[60px] rounded-[50%] w-[60px]"></div>
                          <div className="flex flex-col gap-1.5 items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-1">
                            <Text
                              className="text-indigo-900 text-lg"
                              size="txtPoppinsSemiBold18"
                            >
                              Karen Hope
                            </Text>
                            <Text
                              className="text-gray-500 text-sm"
                              size="txtPoppinsRegular14Gray500"
                            >
                              Lorem ipsum dolor sit amet...
                            </Text>
                          </div>
                          <Text
                            className="sm:ml-[0] ml-[108px] text-gray-500 text-sm"
                            size="txtPoppinsRegular14Gray500"
                          >
                            12:45 PM
                          </Text>
                        </div>
                        <Line className="bg-gray-100_01 h-px w-full" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                          <div className="bg-indigo-100 h-[60px] rounded-[50%] w-[60px]"></div>
                          <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0]">
                            <Text
                              className="text-indigo-900 text-lg"
                              size="txtPoppinsSemiBold18"
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
                          <div className="flex sm:flex-1 flex-col gap-[11px] items-end justify-start sm:ml-[0] ml-[108px] w-[14%] sm:w-full">
                            <Text
                              className="text-gray-500 text-sm"
                              size="txtPoppinsRegular14Gray500"
                            >
                              12:45 PM
                            </Text>
                            <Button
                              className="flex h-6 items-center justify-center rounded-[50%] w-6"
                              shape="circle"
                              color="deep_orange_300"
                              size="xs"
                            >
                              <Img
                                src="images/img_settings_white_a700.svg"
                                alt="settings"
                              />
                            </Button>
                          </div>
                        </div>
                        <Line className="bg-gray-100_01 h-px w-full" />
                      </div>
                    </div>
                  </List>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <div className="bg-indigo-100 h-[60px] rounded-[50%] w-[60px]"></div>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[3px]">
                      <Text
                        className="text-indigo-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        Nadila Adja
                      </Text>
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtPoppinsRegular14Gray500"
                      >
                        Lorem ipsum dolor sit amet...
                      </Text>
                    </div>
                    <Text
                      className="sm:ml-[0] ml-[108px] text-gray-500 text-sm"
                      size="txtPoppinsRegular14Gray500"
                    >
                      12:45 PM
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[443px] sm:min-w-full mt-9 text-center text-lg"
                  shape="round"
                  color="indigo_500_36"
                  size="lg"
                >
                  View More
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col gap-10 items-end justify-center p-8 md:px-5 w-full">
            <div className="flex flex-row items-center justify-end mr-[18px] mt-[18px] w-[78%] md:w-full">
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
            <div className="flex flex-col gap-[41px] items-center justify-start mb-[347px] mr-[18px] w-[96%] md:w-full">
              <div className="bg-gradient  flex flex-col items-center justify-start rounded-[20px] shadow-bs w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[367px] items-center justify-start p-[31px] sm:px-5 w-full"
                  style={{
                    backgroundImage: "url('images/img_masking_yellow_700.svg')",
                  }}
                >
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-lg text-white-A700"
                        size="txtPoppinsRegular18WhiteA700"
                      >
                        Your Plan
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_dots_white_a700.svg"
                        alt="dots_One"
                      />
                    </div>
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtPoppinsBold32WhiteA700"
                    >
                      Free
                    </Text>
                    <div className="flex flex-col gap-[5px] items-start justify-start mt-[34px] w-[53%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-[87%] md:w-full">
                        <div className="bg-white-A700 h-[9px] mb-[11px] mt-1.5 rounded w-[9px]"></div>
                        <Text
                          className="text-lg text-white-A700"
                          size="txtPoppinsSemiBold18WhiteA700"
                        >
                          50 GB Storage
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-full">
                        <div className="bg-white-A700 h-[9px] my-2 rounded w-[9px]"></div>
                        <Text
                          className="text-lg text-white-A700"
                          size="txtPoppinsSemiBold18WhiteA700"
                        >
                          Limited Features
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="mt-4 text-sm text-white-A700 w-full"
                      size="txtPoppinsRegular14"
                    >
                      Upgrade to Premium Plan to get more Features & Storage
                      memory{" "}
                    </Text>
                    <Button
                      className="!text-indigo-900 cursor-pointer font-semibold leading-[normal] min-w-[145px] mt-[39px] rounded-[18px] text-center text-sm"
                      color="white_A700"
                    >
                      Upgrade Plan
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-9 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Lastest Activity
                </Text>
                <div className="md:h-[310px] h-[359px] sm:h-[533px] relative w-full">
                  <Line className="absolute bg-indigo-100 h-[310px] left-[5%] top-[2%] w-0.5" />
                  <List
                    className="absolute flex flex-col gap-[31px] inset-x-[0] items-center mx-auto top-[0] w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 sm:flex-col flex-row gap-4 items-start justify-between my-0 w-full">
                      <div className="bg-indigo-100 h-10 mb-[30px] rounded-[50%] w-10"></div>
                      <div className="flex flex-col gap-2 items-start justify-start">
                        <Text
                          className="text-indigo-900 text-sm w-full"
                          size="txtCairoSemiBold14Indigo900"
                        >
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            Karen Hope
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-semibold">
                            {" "}
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-normal">
                            moved task
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-semibold">
                            {" "}
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            “
                          </span>
                          <span className="text-deep_orange-300 font-poppins text-left font-bold">
                            User Research
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            “
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-semibold">
                            {" "}
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-normal">
                            from
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-semibold">
                            {" "}
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            On Progress
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-semibold">
                            {" "}
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-normal">
                            to
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-semibold">
                            {" "}
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            Done
                          </span>
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtPoppinsRegular14Gray500"
                        >
                          2 March 2021, 13:45 PM
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row gap-4 items-start justify-between my-0 w-full">
                      <div className="bg-indigo-100 h-10 mb-[30px] rounded-[50%] w-10"></div>
                      <div className="flex flex-col gap-2 items-start justify-start">
                        <Text
                          className="text-indigo-900 text-sm w-full"
                          size="txtPoppinsBold14Indigo900"
                        >
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            Samantha William{" "}
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-normal">
                            add new
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            {" "}
                            4{" "}
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-normal">
                            attached files on task
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            {" "}
                            “
                          </span>
                          <span className="text-yellow-700 font-poppins text-left font-bold">
                            Photo’s Assets
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            “
                          </span>
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtPoppinsRegular14Gray500"
                        >
                          2 March 2021, 13:45 PM
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row gap-4 items-start justify-between my-0 w-full">
                      <div className="bg-indigo-100 h-10 mb-[30px] rounded-[50%] w-10"></div>
                      <div className="flex flex-col gap-2 items-start justify-start">
                        <Text
                          className="text-indigo-900 text-sm w-full"
                          size="txtPoppinsBold14Indigo900"
                        >
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            Tony Soap{" "}
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-normal">
                            invite you in task
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            {" "}
                            “
                          </span>
                          <span className="text-indigo-500 font-poppins text-left font-bold">
                            Wireframing
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            “{" "}
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-normal">
                            and
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            {" "}
                            “
                          </span>
                          <span className="text-teal-300 font-poppins text-left font-bold">
                            Hi-fidelity
                          </span>
                          <span className="text-indigo-900 font-poppins text-left font-bold">
                            “
                          </span>
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtPoppinsRegular14Gray500"
                        >
                          2 March 2021, 13:45 PM
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="absolute bottom-[0] flex flex-row gap-4 items-start justify-between left-[0] w-[83%]">
                    <div className="bg-indigo-100 h-10 mb-[9px] mt-0.5 rounded-[50%] w-10"></div>
                    <div className="flex flex-col gap-[9px] items-start justify-start">
                      <Text
                        className="text-indigo-900 text-sm"
                        size="txtPoppinsBold14Indigo900"
                      >
                        <span className="text-indigo-900 font-poppins text-left font-bold">
                          Samantha William{" "}
                        </span>
                        <span className="text-indigo-900 font-poppins text-left font-normal">
                          created new
                        </span>
                        <span className="text-indigo-900 font-poppins text-left font-bold">
                          {" "}
                        </span>
                        <span className="text-red-A200 font-poppins text-left font-bold">
                          Task
                        </span>
                      </Text>
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtPoppinsRegular14Gray500"
                      >
                        2 March 2021, 13:45 PM
                      </Text>
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

export default UserDashboardPage;
