import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  ReactTable,
  SelectBox,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const sortOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const StudentsPage = () => {
  const tableData = React.useRef([
    {
      rowname: "Samanta William",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "Mana William ",
      city: "Jakarta",
      contactOne: "images/img_email_indigo_500.svg",
      grade: "VII A",
      action: "images/img_dots.svg",
    },
    {
      rowname: "Tony Soap",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "James Soap",
      city: "Jakarta",
      contactOne: "images/img_email_indigo_500.svg",
      grade: "VII B",
      action: "images/img_dots.svg",
    },
    {
      rowname: "Karen Hope",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "Justin Hope",
      city: "Jakarta",
      contactOne: "images/img_email_indigo_500.svg",
      grade: "VII C",
      action: "images/img_dots.svg",
    },
    {
      rowname: "Jordan Nico",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "Amanda Nico",
      city: "Jakarta",
      contactOne: "images/img_email_indigo_500.svg",
      grade: "VII A",
      action: "images/img_dots.svg",
    },
    {
      rowname: "Nadila Adja",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "Jack Adja",
      city: "Jakarta",
      contactOne: "images/img_email_indigo_500.svg",
      grade: "VII A",
      action: "images/img_dots.svg",
    },
    {
      rowname: "Johnny Ahmad",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "Danny Ahmad",
      city: "Jakarta",
      contactOne: "images/img_email_indigo_500.svg",
      grade: "VII A",
      action: "images/img_dots.svg",
    },
  ]);
  const { collapseSidebar, collapsed } = useProSidebar();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowname", {
        cell: (info) => (
          <div className="flex flex-row gap-[30px] items-center justify-start p-8 sm:px-5">
            <Button
              className="flex h-6 items-center justify-center my-3 rounded w-6"
              size="xs"
            >
              <Img src="images/img_close.svg" alt="close" />
            </Button>
            <div className="flex flex-row gap-4 items-center justify-center w-[72%]">
              <div className="bg-indigo-100 h-12 rounded-[50%] w-12"></div>
              <Text className="text-indigo-900 text-lg" size="txtPoppinsBold18">
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start min-w-[382px] sm:px-5 px-8 sm:w-full">
            <CheckBox
              className="font-semibold leading-[normal] text-left text-sm"
              inputClassName="h-6 mr-[5px] w-6"
              name="name"
              id="name"
              label="Name"
              shape="round"
            ></CheckBox>
          </div>
        ),
      }),
      tableColumnHelper.accessor("id", {
        cell: (info) => (
          <Text
            className="py-[35px] text-indigo-500 text-lg"
            size="txtPoppinsSemiBold18Indigo500"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[176px] text-indigo-900 text-sm"
            size="txtPoppinsSemiBold14"
          >
            ID
          </Text>
        ),
      }),
      tableColumnHelper.accessor("date", {
        cell: (info) => (
          <Text
            className="py-[35px] text-gray-500 text-sm"
            size="txtPoppinsRegular14Gray500"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[190px] text-indigo-900 text-sm"
            size="txtPoppinsSemiBold14"
          >
            Date
          </Text>
        ),
      }),
      tableColumnHelper.accessor("parentname", {
        cell: (info) => (
          <Text
            className="py-[35px] text-indigo-900 text-sm"
            size="txtPoppinsRegular14Indigo900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[188px] text-indigo-900 text-sm"
            size="txtPoppinsSemiBold14"
          >
            Parent Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("city", {
        cell: (info) => (
          <Text
            className="py-[35px] text-indigo-900 text-sm"
            size="txtPoppinsRegular14Indigo900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[142px] text-indigo-900 text-sm"
            size="txtPoppinsSemiBold14"
          >
            City
          </Text>
        ),
      }),
      tableColumnHelper.accessor("contactOne", {
        cell: (info) => (
          <div className="flex flex-row gap-4 items-center justify-center sm:pr-5 pr-9 py-9">
            <Button
              className="flex h-10 items-center justify-center rounded-[50%] w-10"
              shape="circle"
              color="indigo_500_63"
            >
              <Img className="h-6" src="images/img_call.svg" alt="call" />
            </Button>
            <Button
              className="flex h-10 items-center justify-center mr-[52px] rounded-[50%] w-10"
              shape="circle"
              color="indigo_500_63"
            >
              <Img className="h-6" alt="email_One" src={info?.getValue()} />
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[184px] pl-[3px] text-center text-indigo-900 text-sm"
            size="txtPoppinsSemiBold14"
          >
            Contact
          </Text>
        ),
      }),
      tableColumnHelper.accessor("grade", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center sm:pr-5 pr-9 py-9">
            <Button
              className="cursor-pointer leading-[normal] min-w-[80px] mr-[19px] rounded-[20px] text-center text-sm"
              color="deep_orange_300"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[135px] pl-0.5 text-center text-indigo-900 text-sm"
            size="txtPoppinsSemiBold14"
          >
            Grade
          </Text>
        ),
      }),
      tableColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start p-[22px] sm:px-5">
            <Img
              className="h-6 my-[22px] w-6"
              alt="dots"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[78px] text-indigo-900 text-sm"
            size="txtPoppinsSemiBold14"
          >
            Action
          </Text>
        ),
      }),
    ];
  }, []);

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
        <Img
          className="h-10 w-10"
          src="images/img_student_indigo_500.svg"
          alt="student"
        />
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
                className="mb-[172px] md:ml-[0] ml-[34px] mr-[123px] mt-[15px] text-sm text-white-A700"
                size="txtPoppinsRegular14"
              >
                Made with ♥ by Peterdraw
              </Text>
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col gap-10 items-center justify-start w-full">
            <div className="flex flex-col gap-10 items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                  size="txtPoppinsBold36Indigo900"
                >
                  Students
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
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-white-A700 flex flex-col gap-8 items-center justify-start py-8 rounded-[20px] w-full">
                <div className="h-[726px] relative w-full">
                  <div className="overflow-auto absolute inset-[0] justify-center m-auto w-full">
                    <ReactTable
                      columns={tableColumns}
                      data={tableData.current}
                      rowClass={"border-b-[5px] border-indigo-500"}
                      headerClass=""
                    />
                  </div>
                  <Img
                    className="h-[566px] mt-12 mx-auto"
                    src="images/img_border.svg"
                    alt="border"
                  />
                </div>
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-[96%] md:w-full">
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

export default StudentsPage;
