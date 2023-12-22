import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const FoodDetailsPage = () => {
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
      <div className="bg-gray-100 flex flex-col font-poppins items-center justify-end mx-auto md:pr-10 sm:pr-5 pr-[50px] w-full">
        <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between mx-auto w-full">
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
                className="mb-20 md:ml-[0] ml-[34px] mr-[123px] mt-[15px] text-sm text-white-A700"
                size="txtPoppinsRegular14"
              >
                Made with ♥ by Peterdraw
              </Text>
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[33px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 sm:flex-col flex-row md:gap-10 items-start justify-between w-3/4 md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                  size="txtPoppinsBold36Indigo900"
                >
                  Food Details
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
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-[20px] w-3/4 md:w-full">
                <div className="flex flex-col gap-[54px] items-start justify-start mb-[78px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between w-full">
                        <div className="bg-indigo-100 h-[239px] rounded-[18px] w-2/5"></div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                            size="txtPoppinsBold24"
                          >
                            Beef Steak with Fried Potato
                          </Text>
                          <Button className="cursor-pointer leading-[normal] mt-4 rounded-[20px] text-center text-sm w-[120px]">
                            Lunch
                          </Button>
                          <Text
                            className="mt-9 text-gray-500 text-lg w-full"
                            size="txtPoppinsRegular18"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_dots.svg"
                      alt="dots"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 gap-16 items-center justify-start w-[64%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[12%] sm:w-full">
                      <Text
                        className="text-gray-500 text-lg"
                        size="txtPoppinsRegular18"
                      >
                        Rating
                      </Text>
                      <div className="flex flex-row gap-2 items-start justify-between w-full">
                        <Img
                          className="h-8 rounded-[1px] w-8"
                          src="images/img_star1_4.svg"
                          alt="starOne"
                        />
                        <Text
                          className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          4.9
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-6 items-center justify-center w-[29%] sm:w-full">
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
                    <div className="flex flex-row gap-[33px] items-center justify-center w-[21%] sm:w-full">
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
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start md:mt-0 mt-[3px]">
                      <Text
                        className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        Ingredients
                      </Text>
                      <Text
                        className="leading-[32.00px] text-gray-500 text-lg"
                        size="txtPoppinsRegular18"
                      >
                        <>
                          2 tablespoons butter, softened, divided
                          <br />1 teaspoon minced fresh parsley
                          <br />
                          1/2 teaspoon minced garlic
                          <br />
                          1/4 teaspoon reduced-sodium soy sauce
                          <br />1 beef flat iron steak or boneless top sirloin
                          steak (3/4 pound)
                          <br />
                          1/8 teaspoon salt
                          <br />
                          1/8 teaspoon pepper
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[17px] items-start justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        Nutrition:
                      </Text>
                      <Text
                        className="leading-[32.00px] text-gray-500 text-lg"
                        size="txtPoppinsRegular18"
                      >
                        <>
                          Calories: 217.
                          <br />
                          Water: 61%
                          <br />
                          Protein: 26.1 grams.
                          <br />
                          Carbs: 0 grams.
                          <br />
                          Sugar: 0 grams.
                          <br />
                          Fiber: 0 grams.
                          <br />
                          Fat: 11.8 grams.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-8 items-start justify-start w-[23%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Student Comments
                </Text>
                <List
                  className="flex flex-col gap-[26px] items-start w-auto"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 flex flex-col items-start justify-start my-0 p-[30px] sm:px-5 rounded-[20px] w-full">
                    <Img
                      className="h-6 ml-0.5 md:ml-[0] mt-0.5 w-6"
                      src="images/img_quote.svg"
                      alt="quote"
                    />
                    <Text
                      className="ml-0.5 md:ml-[0] mt-[7px] text-indigo-900 text-sm w-[98%] sm:w-full"
                      size="txtPoppinsRegular14Indigo900"
                    >
                      Sed eligendi facere repellendus. Ipsam ipsam incidunt
                      minima harum tenetur.
                    </Text>
                    <div className="flex flex-col items-center justify-start mb-0.5 mt-9 w-[71%] md:w-full">
                      <div className="flex flex-row gap-4 items-center justify-between w-full">
                        <Img
                          className="h-[54px] w-[54px]"
                          src="images/img_close_indigo_100.svg"
                          alt="close"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-indigo-900 text-lg"
                            size="txtPoppinsSemiBold18"
                          >
                            Samantha W.
                          </Text>
                          <Text
                            className="mt-1 text-gray-500 text-sm"
                            size="txtPoppinsRegular14Gray500"
                          >
                            5 days ago
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-start justify-start my-0 p-[30px] sm:px-5 rounded-[20px] w-full">
                    <Img
                      className="h-6 ml-0.5 md:ml-[0] mt-0.5 w-6"
                      src="images/img_quote.svg"
                      alt="quote"
                    />
                    <Text
                      className="ml-0.5 md:ml-[0] mt-[7px] text-indigo-900 text-sm w-[98%] sm:w-full"
                      size="txtPoppinsRegular14Indigo900"
                    >
                      Sed eligendi facere repellendus. Ipsam ipsam incidunt
                      minima harum tenetur.
                    </Text>
                    <div className="flex flex-col items-center justify-start mb-0.5 mt-9 w-[64%] md:w-full">
                      <div className="flex flex-row gap-4 items-start justify-between w-full">
                        <Img
                          className="h-[54px] w-[54px]"
                          src="images/img_close_indigo_100.svg"
                          alt="close"
                        />
                        <div className="flex flex-col items-start justify-start mt-[3px]">
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
                            5 days ago
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-start justify-start my-0 p-[30px] sm:px-5 rounded-[20px] w-full">
                    <Img
                      className="h-6 ml-0.5 md:ml-[0] mt-0.5 w-6"
                      src="images/img_quote.svg"
                      alt="quote"
                    />
                    <Text
                      className="ml-0.5 md:ml-[0] mt-[7px] text-indigo-900 text-sm w-[98%] sm:w-full"
                      size="txtPoppinsRegular14Indigo900"
                    >
                      Sed eligendi facere repellendus. Ipsam ipsam incidunt
                      minima harum tenetur.
                    </Text>
                    <div className="flex flex-col items-center justify-start mb-0.5 mt-9 w-3/5 md:w-full">
                      <div className="flex flex-row gap-4 items-start justify-between w-full">
                        <Img
                          className="h-[54px] w-[54px]"
                          src="images/img_close_indigo_100.svg"
                          alt="close"
                        />
                        <div className="flex flex-col items-start justify-start mt-[3px]">
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
                            5 days ago
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetailsPage;
