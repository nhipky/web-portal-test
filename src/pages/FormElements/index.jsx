import React from "react";

import { Button, CheckBox, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const FormElementsPage = () => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-poppins items-center justify-start mx-auto pb-[317px] w-full">
        <div className="flex flex-col justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[281px] items-start justify-start p-[65px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_information.svg')" }}
          >
            <div className="flex sm:flex-col flex-row gap-[52px] items-center justify-start mb-[33px] md:ml-[0] ml-[111px] w-[30%] md:w-full">
              <div className="bg-gray-50 flex flex-col h-[118px] items-center justify-start p-[34px] sm:px-5 rounded-[30px] w-[118px]">
                <Img
                  className="h-[50px] w-[50px]"
                  src="images/img_inbox.svg"
                  alt="inbox"
                />
              </div>
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-gray-50"
                size="txtPoppinsRegular48"
              >
                Form Elements
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1656px] mt-[58px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[86px] justify-start w-[55%] md:w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                  size="txtPoppinsMedium24"
                >
                  Text Area
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 border-2 border-gray-500 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end p-[9px] rounded-[40px] w-full">
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
              <div className="flex flex-col gap-8 items-start justify-start ml-1.5 md:ml-[0] w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                  size="txtPoppinsMedium24"
                >
                  Search Box
                </Text>
                <Input
                  name="searchbar"
                  placeholder="Search here..."
                  value={searchbarvalue}
                  onChange={(e) => setSearchbarvalue(e)}
                  className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-lg w-full"
                  wrapClassName="flex rounded-[30px] w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-8 mr-4"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#a098ae"
                      className="cursor-pointer h-8"
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
            </div>
            <div className="flex md:flex-1 flex-col gap-8 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                size="txtPoppinsMedium24"
              >
                Default Input{" "}
              </Text>
              <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-indigo-900 text-lg w-auto"
                  size="txtPoppinsSemiBold18"
                >
                  First Name *
                </Text>
                <Input
                  name="form"
                  placeholder="Maria"
                  className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                  wrapClassName="border border-indigo-100 border-solid w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-indigo-900 text-lg w-auto"
                  size="txtPoppinsSemiBold18"
                >
                  Address *
                </Text>
                <div className="flex flex-col gap-[11px] items-end justify-start w-full">
                  <div className="bg-white-A700 border border-indigo-100 border-solid flex sm:flex-col flex-row font-poppins gap-[7px] items-start justify-end p-1 rounded-[5px] w-full">
                    <Text
                      className="sm:flex-1 sm:mt-0 my-2.5 text-gray-500 text-sm w-[97%] sm:w-full"
                      size="txtPoppinsRegular14Gray500"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </Text>
                    <Line className="bg-gray-100_01 sm:h-0.5 h-[70px] mb-[88px] sm:mt-0 mt-[9px] w-0.5 sm:w-full" />
                  </div>
                  <Text
                    className="text-gray-500 text-xs"
                    size="txtDMSansRegular12"
                  >
                    0/2000
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[167px] mt-[29px] md:px-5 w-[19%] md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                size="txtPoppinsMedium24"
              >
                Checkbox
              </Text>
              <div className="flex flex-row gap-10 items-start justify-start w-auto">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[143px] rounded-[14px]"
                  leftIcon={
                    <div className="h-6 mb-px mr-3.5 w-6 bg-blue_gray-800 rounded py-[7px] px-[5px] flex justify-center items-center">
                      <Img src="images/img_checkmark.svg" alt="checkmark" />
                    </div>
                  }
                  color="gray_50"
                  size="lg"
                >
                  <div className="font-medium leading-[normal] text-base text-left tracking-[0.40px]">
                    Check
                  </div>
                </Button>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-left tracking-[0.40px]"
                  inputClassName="mr-[5px] rounded-[14px]"
                  name="title"
                  id="title"
                  label="Uncheck"
                  color="gray_50"
                  size="sm"
                  variant="fill"
                ></CheckBox>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[281px] items-start justify-start mt-[94px] p-[65px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_information.svg')" }}
          >
            <div className="flex sm:flex-col flex-row gap-[52px] items-center justify-start mb-[33px] md:ml-[0] ml-[111px] w-[27%] md:w-full">
              <div className="bg-gray-50 flex flex-col h-[118px] items-center justify-start p-[34px] sm:px-5 rounded-[30px] w-[118px]">
                <Img
                  className="h-[50px] w-[50px]"
                  src="images/img_inbox.svg"
                  alt="inbox_One"
                />
              </div>
              <Text
                className="sm:text-[39px] md:text-[45px] text-[49px] text-gray-50"
                size="txtPoppinsRegular49"
              >
                Badge/Label
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-44 md:ml-[0] mt-[52px] md:px-5 w-[66%] md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl"
                  size="txtPoppinsMedium24"
                >
                  Notification
                </Text>
              </div>
              <Button
                className="flex h-6 items-center justify-center rounded-[50%] w-6"
                shape="circle"
                color="deep_orange_300"
                size="xs"
              >
                <Img src="images/img_settings_white_a700.svg" alt="settings" />
              </Button>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start md:ml-[0] ml-[422px] w-auto">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                size="txtPoppinsMedium24"
              >
                Format Icon
              </Text>
              <Img
                className="h-[72px] w-[248px]"
                src="images/img_frame263.svg"
                alt="frame263"
              />
            </div>
            <div className="flex flex-col gap-8 items-start justify-start md:ml-[0] ml-[239px] w-auto">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                size="txtPoppinsMedium24"
              >
                Icon Transaction
              </Text>
              <Img
                className="h-14 w-14"
                src="images/img_frame276.svg"
                alt="frame276"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between ml-44 md:ml-[0] mt-[25px] md:px-5 w-[42%] md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                size="txtPoppinsMedium24"
              >
                Status label
              </Text>
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <Text
                  className="text-lg text-teal-300 w-auto"
                  size="txtPoppinsSemiBold18Teal300"
                >
                  Complete
                </Text>
                <Text
                  className="text-gray-500 text-lg w-auto"
                  size="txtPoppinsSemiBold18Gray500"
                >
                  Pending
                </Text>
                <Text
                  className="text-lg text-red-A200 w-auto"
                  size="txtPoppinsSemiBold18RedA200"
                >
                  Canceled
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                size="txtPoppinsMedium24"
              >
                Tooltip
              </Text>
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[82px] items-center justify-start p-2 w-[45%]"
                  style={{ backgroundImage: "url('images/img_details.svg')" }}
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
                <div className="flex flex-col items-center justify-start w-[46%]">
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
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between ml-44 md:ml-[0] mt-[53px] md:px-5 w-[38%] md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                size="txtPoppinsMedium24"
              >
                Label
              </Text>
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <Button
                  className="cursor-pointer h-10 leading-[normal] rounded-[20px] text-center text-sm w-20"
                  color="deep_orange_300"
                >
                  VII A
                </Button>
                <Button
                  className="cursor-pointer h-10 leading-[normal] rounded-[20px] text-center text-sm w-20"
                  color="yellow_700"
                >
                  VII B
                </Button>
                <Button className="cursor-pointer h-10 leading-[normal] rounded-[20px] text-center text-sm w-20">
                  VII C
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                size="txtPoppinsMedium24"
              >
                Label Legend
              </Text>
              <div className="flex flex-row gap-2 items-end justify-start w-[52%] md:w-full">
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
          <footer className="flex items-center justify-center mt-[178px] md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[281px] items-center justify-center p-[65px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_information.svg')" }}
            >
              <div className="flex flex-row gap-[52px] items-center justify-center mb-[33px] md:ml-[0] ml-[111px] w-[17%] md:w-full">
                <div className="bg-gray-50 flex flex-col h-[118px] items-center justify-start p-[34px] sm:px-5 rounded-[30px] w-[118px]">
                  <Img
                    className="h-[50px] w-[50px]"
                    src="images/img_inbox.svg"
                    alt="inbox_Two"
                  />
                </div>
                <Text
                  className="sm:text-[39px] md:text-[45px] text-[49px] text-gray-50"
                  size="txtPoppinsRegular49"
                >
                  Icons
                </Text>
              </div>
            </div>
          </footer>
          <Img
            className="h-14 max-w-[1408px] mt-[116px] mx-auto w-full"
            src="images/img_frame269.svg"
            alt="frame269"
          />
          <div className="gap-12 grid sm:grid-cols-1 md:grid-cols-7 grid-cols-[repeat(14,minmax(0,1fr))] items-start justify-start max-w-[1408px] mt-[72px] mx-auto md:px-5 w-full">
            <Img
              className="h-14 w-14"
              src="images/img_gear_indigo_500.svg"
              alt="gear"
            />
            <Img
              className="h-14 w-14"
              src="images/img_email_indigo_500.svg"
              alt="email"
            />
            <Img
              className="h-14 w-14"
              src="images/img_user_indigo_500.svg"
              alt="user"
            />
            <Img
              className="h-14 w-14"
              src="images/img_chat_indigo_500.svg"
              alt="chat"
            />
            <Img
              className="h-14 w-14"
              src="images/img_activity_indigo_500_56x56.svg"
              alt="activity"
            />
            <Img
              className="h-14 w-14"
              src="images/img_dropdown_indigo_500_56x56.svg"
              alt="dropdown"
            />
            <Img className="h-14 w-14" src="images/img_call.svg" alt="call" />
            <Img
              className="h-14 w-14"
              src="images/img_calendar_indigo_500.svg"
              alt="calendar"
            />
            <Img
              className="h-14 w-14"
              src="images/img_clock_indigo_500.svg"
              alt="clock"
            />
            <Img
              className="h-14 w-14"
              src="images/img_trending.svg"
              alt="trending"
            />
            <Img
              className="h-14 w-14"
              src="images/img_location_indigo_500.svg"
              alt="location"
            />
            <Img
              className="h-14 w-14"
              src="images/img_quote_indigo_500.svg"
              alt="quote"
            />
            <Img
              className="h-14 w-14"
              src="images/img_upload_indigo_500.svg"
              alt="upload"
            />
            <Img
              className="h-14 w-14"
              src="images/img_sent_indigo_500.svg"
              alt="sent"
            />
          </div>
          <Img
            className="h-14 ml-64 md:ml-[0] mt-[72px] w-40"
            src="images/img_frame270.svg"
            alt="frame270"
          />
        </div>
      </div>
    </>
  );
};

export default FormElementsPage;
