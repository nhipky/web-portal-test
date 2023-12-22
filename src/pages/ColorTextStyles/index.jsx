import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const sortOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ColorTextStylesPage = () => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-poppins items-center justify-start mx-auto pb-[148px] w-full">
        <div className="flex flex-col justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[281px] items-start justify-start p-[65px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_information.svg')" }}
          >
            <div className="flex sm:flex-col flex-row gap-[52px] items-center justify-start mb-[33px] md:ml-[0] ml-[111px] w-[27%] md:w-full">
              <div className="bg-gray-50 flex flex-col h-[118px] items-center justify-start p-[34px] sm:px-5 rounded-[30px] w-[118px]">
                <Img
                  className="h-[50px] w-[50px]"
                  src="images/img_inbox.svg"
                  alt="inbox"
                />
              </div>
              <Text
                className="sm:text-[39px] md:text-[45px] text-[49px] text-gray-50"
                size="txtPoppinsRegular49"
              >
                Typography
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between ml-44 md:ml-[0] mt-[67px] md:px-5 w-[29%] md:w-full">
            <div className="flex flex-col items-start justify-start sm:mt-0 mt-1">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-indigo-900"
                size="txtPoppinsBold48"
              >
                H1 Heading
              </Text>
              <Text
                className="mt-[11px] sm:text-4xl md:text-[38px] text-[40px] text-indigo-900"
                size="txtPoppinsBold40"
              >
                H2 Heading
              </Text>
              <Text
                className="mt-3 text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                size="txtPoppinsBold36Indigo900"
              >
                H3 Heading
              </Text>
              <Text
                className="mt-1 text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                size="txtPoppinsBold24"
              >
                H4 Heading
              </Text>
              <Text
                className="mt-3 text-indigo-900 text-lg"
                size="txtPoppinsBold18"
              >
                H5 Heading
              </Text>
              <Text
                className="mt-[11px] text-indigo-900 text-sm"
                size="txtPoppinsBold14Indigo900"
              >
                H6 Heading
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[27%] sm:w-full">
              <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                <Text
                  className="text-indigo-900 text-lg"
                  size="txtPoppinsSemiBold18"
                >
                  Text Semi Bold 1{" "}
                </Text>
                <Text
                  className="text-indigo-900 text-sm"
                  size="txtPoppinsSemiBold14"
                >
                  Text Semi Bold 2{" "}
                </Text>
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start mt-6">
                <Text
                  className="text-indigo-900 text-lg"
                  size="txtPoppinsMedium18Indigo900"
                >
                  Text Medium 1
                </Text>
                <Text
                  className="text-indigo-900 text-sm"
                  size="txtPoppinsMedium14"
                >
                  Text Medium 2
                </Text>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start mt-[27px]">
                <Text
                  className="text-indigo-900 text-lg"
                  size="txtPoppinsRegular18Indigo900"
                >
                  Text Regular 1
                </Text>
                <Text
                  className="text-indigo-900 text-sm"
                  size="txtPoppinsRegular14Indigo900"
                >
                  Text Regular 2
                </Text>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[281px] items-start justify-start mt-[151px] p-[65px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_information.svg')" }}
          >
            <div className="flex flex-row gap-[52px] items-start justify-start mb-[33px] md:ml-[0] ml-[115px] w-[19%] md:w-full">
              <div className="bg-gray-50 flex flex-col h-[118px] items-center justify-start p-[34px] sm:px-5 rounded-[30px] w-[118px]">
                <Img
                  className="h-[50px] w-[50px]"
                  src="images/img_inbox.svg"
                  alt="inbox_One"
                />
              </div>
              <Text
                className="mt-[15px] sm:text-[39px] md:text-[45px] text-[49px] text-gray-50"
                size="txtPoppinsRegular49"
              >
                Colors
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[33px] items-start justify-start md:ml-[0] ml-[180px] mt-[93px] md:px-5 w-[45%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl"
              size="txtPoppinsMedium24"
            >
              Theme Color
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-[43px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col gap-[23px] items-center justify-start sm:ml-[0] w-full">
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtPoppinsMedium14Bluegray800"
                    >
                      Purple
                    </Text>
                    <div className="bg-indigo-500 h-[182px] rounded-[15px] w-full"></div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[23px] justify-start sm:ml-[0] sm:mt-0 mt-0.5 w-full">
                    <Text
                      className="ml-1.5 md:ml-[0] text-blue_gray-800 text-sm"
                      size="txtPoppinsMedium14Bluegray800"
                    >
                      Orange
                    </Text>
                    <div className="bg-deep_orange-300 h-[182px] rounded-[15px] w-full"></div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[25px] items-center justify-start sm:ml-[0] w-full">
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtPoppinsMedium14Bluegray800"
                    >
                      Yellow
                    </Text>
                    <div className="bg-yellow-700 h-[182px] rounded-[15px] w-full"></div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[25px] justify-start sm:ml-[0] w-full">
                    <Text
                      className="md:ml-[0] ml-[19px] text-blue_gray-800 text-sm"
                      size="txtPoppinsMedium14Bluegray800"
                    >
                      Text
                    </Text>
                    <div className="bg-indigo-900 h-[182px] rounded-[15px] w-full"></div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[25px] items-center justify-start sm:ml-[0] w-full">
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtPoppinsMedium14Bluegray800"
                    >
                      Green
                    </Text>
                    <div className="bg-teal-300 h-[182px] rounded-[15px] w-full"></div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[25px] items-center justify-start sm:ml-[0] w-full">
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtPoppinsMedium14Bluegray800"
                    >
                      Red
                    </Text>
                    <div className="bg-red-A200 h-[182px] rounded-[15px] w-full"></div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[23px] items-center justify-start sm:ml-[0] w-full">
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtPoppinsMedium14Bluegray800"
                    >
                      Background
                    </Text>
                    <div className="bg-gray-100 h-[182px] outline outline-[0.5px] outline-black-900 rounded-[15px] w-full"></div>
                  </div>
                </List>
                <List
                  className="sm:flex-col flex-row gap-[43px] grid sm:grid-cols-1 grid-cols-4 w-[55%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtPoppinsMedium14Bluegray800"
                    >
                      White
                    </Text>
                    <div className="bg-white-A700 h-[182px] rounded-[15px] w-full"></div>
                  </div>
                  <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtPoppinsMedium14Bluegray800"
                    >
                      Grey 1
                    </Text>
                    <div className="bg-gray-100_01 h-[182px] outline outline-[0.5px] outline-black-900 rounded-[15px] w-full"></div>
                  </div>
                  <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtPoppinsMedium14Bluegray800"
                    >
                      Grey 2
                    </Text>
                    <div className="bg-indigo-100 h-[182px] rounded-[15px] w-full"></div>
                  </div>
                  <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtPoppinsMedium14Bluegray800"
                    >
                      Grey 3
                    </Text>
                    <div className="bg-gray-500 h-[182px] rounded-[15px] w-full"></div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[180px] mt-[155px] md:px-5 w-[35%] md:w-full">
            <div className="flex flex-col gap-[31px] items-start justify-start w-[33%] sm:w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl"
                size="txtPoppinsMedium24"
              >
                Transparent Color
              </Text>
              <div className="flex flex-col items-center justify-start w-2/5 md:w-full">
                <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-800 text-sm"
                    size="txtPoppinsMedium14Bluegray800"
                  >
                    Purple 10%
                  </Text>
                  <div className="bg-indigo-500_19 h-[182px] outline outline-[0.5px] outline-gray-500 rounded-[15px] w-full"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[31px] items-start justify-start mb-0.5 w-[52%] sm:w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl"
                size="txtPoppinsMedium24"
              >
                Gradient Color
              </Text>
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-col gap-[25px] items-center justify-start w-[26%]">
                  <Text
                    className="text-blue_gray-800 text-sm"
                    size="txtPoppinsMedium14Bluegray800"
                  >
                    Linear 1
                  </Text>
                  <div className="bg-gradient1  h-[182px] rounded-[15px] w-full"></div>
                </div>
                <div className="flex flex-col gap-[25px] items-center justify-start w-1/4">
                  <Text
                    className="text-blue_gray-800 text-sm"
                    size="txtPoppinsMedium14Bluegray800"
                  >
                    Linear 2
                  </Text>
                  <div className="bg-gradient2  h-[182px] rounded-[15px] w-full"></div>
                </div>
                <div className="flex flex-col gap-[25px] items-center justify-start w-1/4">
                  <Text
                    className="text-blue_gray-800 text-sm"
                    size="txtPoppinsMedium14Bluegray800"
                  >
                    Linear 3
                  </Text>
                  <div className="bg-gradient  h-[182px] rounded-[15px] w-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[281px] items-start justify-start mt-[220px] p-[65px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_information.svg')" }}
          >
            <div className="flex sm:flex-col flex-row gap-[52px] items-center justify-start mb-[33px] md:ml-[0] ml-[115px] w-1/4 md:w-full">
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
                Navigation
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[167px] mt-[124px] md:px-5 w-[77%] md:w-full">
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
              wrapClassName="flex md:ml-[0] ml-[521px] rounded-[30px] w-[24%] md:w-full"
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
            <div className="flex flex-row items-center justify-between ml-16 md:ml-[0] w-[22%] md:w-full">
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
              <Img
                className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                src="images/img_placeholder_60x60.png"
                alt="placeholder"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[167px] mt-24 md:px-5 w-[53%] md:w-full">
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
          <footer className="flex items-center justify-center mt-[209px] md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[281px] items-center justify-center p-[65px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_information.svg')" }}
            >
              <div className="flex flex-row gap-[52px] items-center justify-center mb-[33px] md:ml-[0] ml-[115px] w-[19%] md:w-full">
                <div className="bg-gray-50 flex flex-col h-[118px] items-center justify-start p-[34px] sm:px-5 rounded-[30px] w-[118px]">
                  <Img
                    className="h-[50px] w-[50px]"
                    src="images/img_inbox.svg"
                    alt="inbox_Three"
                  />
                </div>
                <Text
                  className="sm:text-[39px] md:text-[45px] text-[49px] text-gray-50"
                  size="txtPoppinsRegular49"
                >
                  Button
                </Text>
              </div>
            </div>
          </footer>
          <div className="flex md:flex-col flex-row gap-12 items-start justify-start md:ml-[0] ml-[172px] mt-[133px] md:px-5 w-auto md:w-full">
            <div className="font-cairo h-[53px] relative w-[4%] md:w-full">
              <div className="absolute bg-indigo-500 h-12 inset-[0] justify-center m-auto rounded-[50%] shadow-bs w-12"></div>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-max"
                size="txtCairoBold28"
              >
                +
              </Text>
            </div>
            <Button
              className="flex h-12 items-center justify-center rounded-[50%] w-12"
              shape="circle"
              size="md"
            >
              <Img
                className="h-6"
                src="images/img_email_white_a700.svg"
                alt="email"
              />
            </Button>
            <Button
              className="cursor-pointer font-poppins font-semibold leading-[normal] min-w-[312px] text-center text-lg"
              shape="round"
              color="indigo_500_19"
              size="lg"
            >
              View More
            </Button>
            <div className="flex flex-row font-poppins gap-[26px] items-center justify-center w-[23%] md:w-full">
              <Button
                className="cursor-pointer h-[60px] leading-[normal] min-w-[168px] text-center text-lg"
                shape="round"
                size="lg"
                variant="outline"
              >
                Save as Draft
              </Button>
              <Button
                className="!text-gray-200 cursor-pointer h-[60px] leading-[normal] min-w-[112px] text-center text-lg"
                shape="round"
                size="lg"
              >
                Submit
              </Button>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[207px] shadow-bs"
              leftIcon={
                <div className="h-4 w-4 bg-white-A700 my-[5px]">
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
              <div className="font-poppins leading-[normal] text-left text-lg">
                New Student
              </div>
            </Button>
            <SelectBox
              className="font-poppins h-[60px] leading-[normal] text-left text-lg w-[16%] md:w-full"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorTextStylesPage;
