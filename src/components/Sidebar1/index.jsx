import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
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

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
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
              fontFamily: "Poppins",
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
            className="mb-[334px] md:ml-[0] ml-[34px] mr-[123px] mt-[15px] text-sm text-white-A700"
            size="txtPoppinsRegular14"
          >
            Made with ♥ by Peterdraw
          </Text>
        )}
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
