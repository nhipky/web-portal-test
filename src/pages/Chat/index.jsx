import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ChatPage = () => {
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
      icon: (
        <Img
          className="h-10 w-10"
          src="images/img_chat_indigo_500.svg"
          alt="chat"
        />
      ),
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
                className="mb-[206px] md:ml-[0] ml-[34px] mr-[123px] mt-[15px] text-sm text-white-A700"
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
                  Chat
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
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-end p-8 sm:px-5 rounded-bl-[20px] rounded-tl-[20px] w-[35%] md:w-full">
                <Text
                  className="mt-0.5 text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Messages
                </Text>
                <Input
                  name="searchbar_One"
                  placeholder="Search here..."
                  value={searchbaronevalue}
                  onChange={(e) => setSearchbaronevalue(e)}
                  className="!placeholder:text-gray-500 !text-gray-500 leading-[normal] p-0 text-left text-lg w-full"
                  wrapClassName="flex mt-[29px] outline-[2px] rounded-[30px] w-full"
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
                          searchbaronevalue?.length <= 0 ? "hidden" : "visible",
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
                  className="flex flex-col gap-[22px] items-center mt-[42px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-[21px] items-start justify-start w-full">
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsSemiBold18Gray500"
                    >
                      Groups
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                            <div className="bg-indigo-500 h-[60px] rounded-[50%] w-[60px]"></div>
                            <div className="flex flex-col gap-[7px] items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[3px]">
                              <Text
                                className="text-indigo-900 text-lg"
                                size="txtPoppinsSemiBold18"
                              >
                                Class History VII-A
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
                          <Line className="bg-indigo-100 h-px w-full" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                            <div className="bg-deep_orange-300 h-[60px] rounded-[50%] w-[60px]"></div>
                            <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0]">
                              <Text
                                className="text-indigo-900 text-lg"
                                size="txtPoppinsSemiBold18"
                              >
                                Class VII-A
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
                                  alt="settings_One"
                                />
                              </Button>
                            </div>
                          </div>
                          <Line className="bg-indigo-100 h-px w-full" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end w-full">
                            <div className="bg-yellow-700 h-[60px] rounded-[50%] w-[60px]"></div>
                            <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0]">
                              <Text
                                className="text-indigo-900 text-lg"
                                size="txtPoppinsSemiBold18"
                              >
                                All Student VII
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
                          <Line className="bg-indigo-100 h-px w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsSemiBold18Gray500"
                    >
                      Chats
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
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
                          <Line className="bg-indigo-100 h-px w-full" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
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
                                  alt="settings_One"
                                />
                              </Button>
                            </div>
                          </div>
                          <Line className="bg-indigo-100 h-px w-full" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end w-full">
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
                          <Line className="bg-indigo-100 h-px w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[443px] sm:min-w-full mt-[31px] text-center text-lg"
                  shape="round"
                  color="indigo_500_19"
                  size="lg"
                >
                  View More
                </Button>
              </div>
              <div className="bg-white-A700 h-[1007px] md:h-[1070px] relative rounded-br-[20px] rounded-tr-[20px] w-[66%] md:w-full">
                <div className="flex flex-row h-full items-center justify-between ml-auto mr-10 mt-[55px] w-[10%]">
                  <Img
                    className="h-8 w-8"
                    src="images/img_upload.svg"
                    alt="upload"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_dots.svg"
                    alt="dots"
                  />
                </div>
                <div className="absolute h-[1007px] md:h-[1070px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[968px]">
                    <div className="flex flex-col items-start justify-start w-[968px] md:w-full">
                      <div className="flex flex-col gap-[33px] justify-start w-full">
                        <div className="flex flex-row gap-6 items-center justify-start ml-10 md:ml-[0] w-auto">
                          <div className="bg-indigo-100 h-16 rounded-[50%] w-16"></div>
                          <div className="flex flex-col items-start justify-start w-[73%]">
                            <Text
                              className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                              size="txtPoppinsBold24"
                            >
                              Samantha WIlliam
                            </Text>
                            <div className="flex flex-row gap-2 items-end justify-start mt-0.5 w-[36%] md:w-full">
                              <div className="bg-teal-300 h-4 my-[5px] rounded-[50%] w-4"></div>
                              <Text
                                className="text-gray-500 text-lg"
                                size="txtPoppinsRegular18"
                              >
                                Online
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-indigo-100 h-px w-full" />
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start ml-10 md:ml-[0] mt-[31px] w-[43%] md:w-full">
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[160px] rounded-[20px] text-center text-lg"
                          color="gray_100_01"
                          size="lg"
                        >
                          Hello Nabila!
                        </Button>
                        <div className="flex flex-col gap-[15px] justify-start w-full">
                          <div className="bg-gray-100_01 flex flex-col items-center justify-end p-[15px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] w-full">
                            <Text
                              className="mt-0.5 text-indigo-900 text-lg"
                              size="txtPoppinsRegular18Indigo900"
                            >
                              Can i see your history lesson homework?{" "}
                            </Text>
                          </div>
                          <Text
                            className="ml-2 md:ml-[0] text-gray-500 text-sm"
                            size="txtPoppinsRegular14Gray500"
                          >
                            12:45 PM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start md:ml-[0] ml-[551px] mt-[18px] w-[39%] md:w-full">
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[199px] rounded-[20px] text-center text-lg"
                          size="lg"
                        >
                          Hello Samantha!
                        </Button>
                        <div className="bg-indigo-500 flex flex-col items-center justify-end mt-[17px] p-3.5 rounded-bl-[20px] rounded-tl-[20px] rounded-tr-[20px] w-full">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtPoppinsRegular18WhiteA700"
                          >
                            <>
                              I’m not finished yet, why don’t work <br />
                              together to finish homework?
                            </>
                          </Text>
                        </div>
                        <Text
                          className="mt-3.5 text-gray-500 text-sm"
                          size="txtPoppinsRegular14Gray500"
                        >
                          12:45 PM
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex flex-col gap-[31px] items-center justify-start mt-[308px] pb-8 rounded-bl-[20px] rounded-br-[20px] w-full">
                        <Line className="bg-indigo-100 h-px w-full" />
                        <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
                          <div className="border-2 border-gray-500 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end p-[9px] rounded-[40px] w-full">
                            <Text
                              className="text-gray-500 text-lg"
                              size="txtPoppinsRegular18"
                            >
                              Write your message...
                            </Text>
                            <Img
                              className="h-10 md:ml-[0] ml-[474px] w-[41px]"
                              src="images/img_attachment.svg"
                              alt="attachment"
                            />
                            <Button
                              className="cursor-pointer flex h-[60px] items-center justify-center ml-3.5 md:ml-[0] w-[135px]"
                              rightIcon={
                                <Img
                                  className="h-8 ml-2"
                                  src="images/img_sent.svg"
                                  alt="Sent"
                                />
                              }
                              shape="round"
                              size="lg"
                            >
                              <div className="font-semibold leading-[normal] text-left text-lg">
                                Send
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="absolute bg-indigo-100 h-[1007px] inset-y-[0] left-[0] my-auto w-px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
