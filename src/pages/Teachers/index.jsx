import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const sortOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TeachersPage = () => {
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
                className="mb-[526px] md:ml-[0] ml-[34px] mr-[123px] mt-[15px] text-sm text-white-A700"
                size="txtPoppinsRegular14"
              >
                Made with ♥ by Peterdraw
              </Text>
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col gap-10 items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                size="txtPoppinsBold36Indigo900"
              >
                Teachers
              </Text>
              <div className="flex sm:flex-1 flex-row items-center justify-between w-[22%] sm:w-full">
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
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
              <Input
                name="searchbar"
                placeholder="Search here..."
                value={searchbarvalue}
                onChange={(e) => setSearchbarvalue(e)}
                className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-lg w-full"
                wrapClassName="flex sm:flex-1 rounded-[30px] w-[24%] sm:w-full"
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
              <SelectBox
                className="sm:flex-1 h-[60px] leading-[normal] sm:ml-[0] ml-[687px] text-left text-lg w-[15%] sm:w-full"
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
                placeholder="Newest"
                shape="round"
                size="xs"
                variant="outline"
              />
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[207px] ml-6 sm:ml-[0] shadow-bs"
                leftIcon={
                  <div className="h-4 mr-4 w-4 bg-white-A700 my-[5px]">
                    <Img
                      className="h-4"
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
            <div className="flex flex-col items-center justify-start w-full">
              <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-end justify-start p-8 sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-8 justify-start w-[81%] md:w-full">
                    <div className="flex flex-row gap-[29px] items-start justify-between w-full">
                      <div className="flex flex-col gap-6 items-center justify-start">
                        <div className="bg-indigo-100 h-[120px] rounded-[50%] w-[120px]"></div>
                        <div className="flex flex-col gap-[9px] items-center justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl w-auto"
                            size="txtPoppinsBold24"
                          >
                            Dimitres Viga
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Mathematics
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_dots.svg"
                        alt="dots"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start ml-9 md:ml-[0] w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_call_white_a700.svg"
                          alt="call"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_email_white_a700.svg"
                          alt="email"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-end justify-start p-8 sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-8 justify-start w-[89%] md:w-full">
                    <div className="flex flex-row gap-1.5 items-start justify-between w-full">
                      <div className="flex flex-col gap-6 justify-start">
                        <div className="bg-indigo-100 h-[120px] md:ml-[0] ml-[41px] mr-[52px] rounded-[50%] w-[120px]"></div>
                        <div className="flex flex-col gap-[9px] items-center justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl w-auto"
                            size="txtPoppinsBold24"
                          >
                            Tom Housenburg
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Science
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_dots.svg"
                        alt="dots"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start md:ml-[0] ml-[58px] w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_call_white_a700.svg"
                          alt="call"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_email_white_a700.svg"
                          alt="email"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-end justify-start p-8 sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-8 justify-start w-[86%] md:w-full">
                    <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                      <div className="flex flex-col gap-[22px] justify-start">
                        <div className="bg-indigo-100 h-[120px] ml-8 md:ml-[0] mr-[43px] rounded-[50%] w-[120px]"></div>
                        <div className="flex flex-col gap-[9px] items-center justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl w-auto"
                            size="txtPoppinsBold24"
                          >
                            Dana Benevista
                          </Text>
                          <Text
                            className="text-gray-500 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Art
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_dots.svg"
                        alt="dots"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start md:ml-[0] ml-[49px] w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_call_white_a700.svg"
                          alt="call"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_email_white_a700.svg"
                          alt="email"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-[30px] items-center justify-start p-8 sm:px-5 rounded-[20px] w-full">
                  <div className="flex relative w-[95%]">
                    <div className="flex flex-col gap-[23px] justify-start my-auto w-[95%]">
                      <div className="bg-indigo-100 h-[120px] ml-14 md:ml-[0] mr-[67px] rounded-[50%] w-[120px]"></div>
                      <div className="flex flex-col gap-[9px] items-center justify-start w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl w-auto"
                          size="txtPoppinsBold24"
                        >
                          Salvadore Morbeau
                        </Text>
                        <Text
                          className="text-gray-500 text-lg w-auto"
                          size="txtPoppinsRegular18"
                        >
                          Biology
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-6 ml-[-9px] w-6 z-[1]"
                      src="images/img_dots.svg"
                      alt="dots"
                    />
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start w-auto">
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      shape="circle"
                    >
                      <Img
                        className="h-6"
                        src="images/img_call_white_a700.svg"
                        alt="call"
                      />
                    </Button>
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      shape="circle"
                    >
                      <Img
                        className="h-6"
                        src="images/img_email_white_a700.svg"
                        alt="email"
                      />
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-end justify-start p-8 sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-[31px] justify-start w-[82%] md:w-full">
                    <div className="flex flex-row gap-[26px] items-start justify-between w-full">
                      <div className="flex flex-col gap-[22px] items-center justify-start">
                        <div className="bg-indigo-100 h-[120px] rounded-[50%] w-[120px]"></div>
                        <div className="flex flex-col gap-[9px] items-center justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl w-auto"
                            size="txtPoppinsBold24"
                          >
                            Maria Historia
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            History
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_dots.svg"
                        alt="dots"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start md:ml-[0] ml-[39px] w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_call_white_a700.svg"
                          alt="call"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_email_white_a700.svg"
                          alt="email"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-end justify-start p-8 sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-8 justify-start w-[74%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col gap-6 items-start justify-start">
                        <div className="bg-indigo-100 h-[120px] rounded-[50%] w-[120px]"></div>
                        <div className="flex flex-col gap-[9px] items-center justify-start md:ml-[0] ml-[3px] w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl w-auto"
                            size="txtPoppinsBold24"
                          >
                            Jack Sally
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Physics
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_dots.svg"
                        alt="dots"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start md:ml-[0] ml-[17px] w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_call_white_a700.svg"
                          alt="call"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_email_white_a700.svg"
                          alt="email"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-end justify-start p-8 sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-[30px] justify-start w-4/5 md:w-full">
                    <div className="flex flex-row gap-[33px] items-start justify-between w-[217px] md:w-full">
                      <div className="flex flex-col gap-[22px] items-center justify-start">
                        <div className="bg-indigo-100 h-[120px] rounded-[50%] w-[120px]"></div>
                        <div className="flex flex-col gap-[9px] items-center justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl w-auto"
                            size="txtPoppinsBold24"
                          >
                            Lula Beatrice
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Algorithm
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_dots.svg"
                        alt="dots"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start ml-8 md:ml-[0] w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_call_white_a700.svg"
                          alt="call"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_email_white_a700.svg"
                          alt="email"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-end justify-start p-8 sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-[30px] justify-start w-[74%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col gap-[22px] items-start justify-start">
                        <div className="bg-indigo-100 h-[120px] rounded-[50%] w-[120px]"></div>
                        <div className="flex flex-col gap-[9px] items-center justify-start md:ml-[0] ml-[5px] w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl w-auto"
                            size="txtPoppinsBold24"
                          >
                            Nella Vita
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Engilsh
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_dots.svg"
                        alt="dots"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start md:ml-[0] ml-[17px] w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_call_white_a700.svg"
                          alt="call"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_email_white_a700.svg"
                          alt="email"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-end justify-start p-8 sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-[30px] justify-start w-[84%] md:w-full">
                    <div className="flex flex-row gap-[19px] items-start justify-between w-full">
                      <div className="flex flex-col gap-[22px] justify-start">
                        <div className="bg-indigo-100 h-[120px] ml-7 md:ml-[0] mr-[39px] rounded-[50%] w-[120px]"></div>
                        <div className="flex flex-col gap-[9px] items-center justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl w-auto"
                            size="txtPoppinsBold24"
                          >
                            Nadia Laravela
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Programming
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_dots.svg"
                        alt="dots"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start md:ml-[0] ml-[45px] w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_call_white_a700.svg"
                          alt="call"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_email_white_a700.svg"
                          alt="email"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-end justify-start p-8 sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-[33px] justify-start w-[81%] md:w-full">
                    <div className="flex flex-row gap-7 items-start justify-between w-full">
                      <div className="flex flex-col gap-[23px] justify-start">
                        <div className="bg-indigo-100 h-[120px] md:ml-[0] ml-[19px] mr-[30px] rounded-[50%] w-[120px]"></div>
                        <div className="flex flex-col gap-[9px] items-center justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl w-auto"
                            size="txtPoppinsBold24"
                          >
                            Dakota Farral
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Science
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_dots.svg"
                        alt="dots"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start ml-9 md:ml-[0] w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_call_white_a700.svg"
                          alt="call"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_email_white_a700.svg"
                          alt="email"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-end justify-start p-8 sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-8 justify-start w-[82%] md:w-full">
                    <div className="flex flex-row gap-[26px] items-start justify-between w-full">
                      <div className="flex flex-col gap-[22px] items-center justify-start">
                        <div className="bg-indigo-100 h-[120px] rounded-[50%] w-[120px]"></div>
                        <div className="flex flex-col gap-[9px] items-center justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl w-auto"
                            size="txtPoppinsBold24"
                          >
                            Miranda Adila
                          </Text>
                          <Text
                            className="text-gray-500 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Art
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_dots.svg"
                        alt="dots"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start md:ml-[0] ml-[39px] w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_call_white_a700.svg"
                          alt="call"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_email_white_a700.svg"
                          alt="email"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-end justify-start p-8 sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-[30px] justify-start w-[84%] md:w-full">
                    <div className="flex flex-row gap-[21px] items-start justify-between w-full">
                      <div className="flex flex-col gap-[22px] justify-start">
                        <div className="bg-indigo-100 h-[120px] md:ml-[0] ml-[26px] mr-[37px] rounded-[50%] w-[120px]"></div>
                        <div className="flex flex-col gap-[9px] items-center justify-start w-auto">
                          <Text
                            className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl w-auto"
                            size="txtPoppinsBold24"
                          >
                            Indiana Barker
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Biology
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_dots.svg"
                        alt="dots"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start md:ml-[0] ml-[43px] w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_call_white_a700.svg"
                          alt="call"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="images/img_email_white_a700.svg"
                          alt="email"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="text-indigo-900 text-lg"
                size="txtPoppinsRegular18Indigo900"
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
    </>
  );
};

export default TeachersPage;
