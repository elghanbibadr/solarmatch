/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import arrow from "@/public/images/icons/arrow.svg";
import close from "@/public/images/icons/close.svg";
import question1Icon from "@/public/images/icons/question1Icon.svg";
import question2 from "@/public/images/icons/question2.svg";
import question3 from "@/public/images/icons/question3.svg";
import noIcon from "@/public/images/icons/no.svg";
import yesIcon from "@/public/images/icons/yes.svg";
import solarPowerSystemLogo from "@/public/images/icons/solarPowerSystem.svg";
import solarandbattery from "@/public/images/icons/solarandbattery.svg";
import question4 from "@/public/images/icons/question4.svg";
import question5 from "@/public/images/icons/question5.svg";
import question6 from "@/public/images/icons/question6.svg";
import question7 from "@/public/images/icons/question7.svg";
import stars from "@/public/images/icons/stars.svg";
import PlacesAutocomplete from "./PlacesAutoComplete";
import SummaryForm from "./SummaryForm";
import { AnimatePresence, motion } from "framer-motion";

export const questions = [
  {
    id: 1,
    text: "What are you interested in?",
    option1: "Solar Power System",
    option2: "Solar and Battery Storage",
    icon: question1Icon,
    clientName: "Pat",
    review:
      "Quotes received, no hard sell, plenty of information provided, solar installed and operating with minimal fuss.",
  },
  {
    id: 2,
    text: "Do you own or rent the property?",
    option1: "Own",
    option2: "Rent",
    icon: question2,
    clientName: "Leigh",

    review:
      "I received three quotes, two were close and I settled on one. It all worked out fine.",
  },
  {
    id: 3,
    text: "What material is the roof?",
    option1: "Tin",
    option2: "Tile",
    option3: "Other",
    icon: question3,
    clientName: "Emma",
    review:
      "All help arrived quickly and am very satisfied with the overall service. Thank you!",
  },
  {
    id: 4,
    text: "How many storeys are there?",
    option1: "Single-storey",
    option2: "Multi-storey",
    icon: question4,
    clientName: "Pat",
    review:
      "Quotes received, no hard sell, plenty of information provided, solar installed and operating with minimal fuss.",
  },
  {
    id: 5,
    text: "Roughly how much is your power bill per quarter?",
    option1: "Less than $500",
    option2: "$500 - $1000",
    option3: "$1000 - $2000",
    option4: "$2000 or more",
    option5: "Not sure",
    icon: question5,
    clientName: "Leigh",

    review:
      "I received three quotes, two were close and I settled on one. It all worked out fine.",
  },
  {
    id: 6,
    text: "Would you also like a quote for Solar Hot Water?",
    option1: "Yes",
    option2: "No Thanks",
    icon: question6,
    clientName: "Emma",
    review:
      "All help arrived quickly and am very satisfied with the overall service. Thank you!",
  },
  {
    id: 7,
    text: "Where do you live?",
    isAddress: true,
    icon: question7,
    clientName: "Pat",
    review:
      "Quotes received, no hard sell, plenty of information provided, solar installed and operating with minimal fuss.",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [displaySummary, setDisplaySummary] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<any>({});
  const [address, setAddress] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const router = useRouter();
  const [isNotAvailable, setIsNotAvailable] = useState(false);
  const [fullAdressInfo, setFullAdressInfo] = useState({});

  const handleOptionSelect = (option: string) => {
    // Get the current question
    const question = questions[currentQuestion];

    // Check if the user selected "Rent" on the second question
    if (currentQuestion === 1 && option === "Rent") {
      setIsNotAvailable(true); // Show the "Sorry, not available" message
      return;
    }

    // Find the corresponding icon for the selected option
    const optionKey = Object.keys(question).find(
      (key) => question[key as keyof typeof question] === option
    );
    const icon = optionKey?.includes("option") ? question.icon : null;

    // Update the selected answers
    setSelectedAnswers((prev: any) => ({
      ...prev,
      [currentQuestion]: {
        text: option,
        icon: icon,
      },
    }));

    // Proceed to the next question or display the summary
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      router.push("/completed");
    }
  };

  const handleAddressSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();



    // return;
    if (address?.trim()) {
      setSelectedAnswers((prev: any) => ({
        ...prev,
        [currentQuestion]: address,
      }));
      setDisplaySummary(true);
    } 
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setIsNotAvailable(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  // Detect screen size and update sidebar state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 986) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="relative overflow-y-hidden rounded-md flex flex-col items-center h-[90vh] gradient-yellow">
      {/* Header */}
      {!displaySummary && (
        <div className="w-full flex items-center justify-between px-4 py-2">
          {currentQuestion > 0 && (
            <>
              <span
                onClick={handleBack}
                className="inline-flex cursor-pointer gap-x-2"
              >
                <Image height={10} width={10} src={arrow} alt="arrow" />
                <span className="text-[13px] text-white">
                  Previous question
                </span>
              </span>
              <span className="text-[13px] text-white">
                {currentQuestion + 1} of {questions.length}
              </span>
            </>
          )}
        </div>
      )}

      {/* Question Text */}
      {!displaySummary && (
        <div
          data-aos="fade-up"
          className={`md:relative md:right-20 md:mt-4 ${
            isNotAvailable ? "hidden" : ""
          }`}
        >
          <h2 className="text-lg md:text-2xl font-bold text-darkshadegray text-center mt-8 mx-4 mb-6">
            {questions[currentQuestion].text}
          </h2>

          {/* Render Input for Address or Options */}
          {questions[currentQuestion].id === 6 && (
            <p className="text-white w-[80%] mx-auto mb-4 text-center">
              Your could reduce your power bill by as much as 30%
            </p>
          )}
          {questions[currentQuestion].isAddress ? (
            <form
              onSubmit={handleAddressSubmit}
              className="relative my-2 w-full max-w-xl"
            >
              <PlacesAutocomplete
                address={address}
                setAddress={setAddress}
                setFullAdressInfo={setFullAdressInfo}
              />

              <button
                type="submit"
                className="p-3 w-3/4 mx-auto block bg-darkshadegray text-white rounded-lg shadow "
              >
                Continue
              </button>
            </form>
          ) : (
            <div className="grid sm:grid-cols-2 w-fit mx-auto gap-4 ">
              {Object.keys(questions[currentQuestion])
                .filter((key) => key.startsWith("option"))
                .map((optionKey) => {
                  const optionText =
                    questions[currentQuestion][
                      optionKey as keyof (typeof questions)[number]
                    ];

                  const isSelected =
                    selectedAnswers[currentQuestion]?.text === optionText;

                  return (
                    <button
                      key={optionKey}
                      onClick={() => handleOptionSelect(optionText)}
                      className={`p-2 py-4 hover:bg-textColor hover:text-white duration-200 hover:border-none max-w-[230px] w-[180px]  mx-1 md:w-[220px] md:text-nowrap font-bold text-[#333333] md:py-7  min-h-[56px] rounded-lg shadow text-center ${
                        isSelected
                          ? "bg-textColor text-[12px] md:text-[14px] text-white"
                          : "bg-white text-darkshadegray text-[12px] md:text-[14px]  border border-gray-300"
                      }`}
                    >
                      {optionText.includes("Power System") && (
                        <Image
                          className="mx-auto mb-3"
                          src={solarPowerSystemLogo}
                          height={40}
                          width={40}
                          alt="question icon"
                        />
                      )}
                      {optionText.includes("Solar and Battery") && (
                        <Image
                          className="mx-auto mb-3"
                          src={solarandbattery}
                          height={40}
                          width={40}
                          alt="question icon"
                        />
                      )}
                      {optionText.includes("Own") && (
                        <Image
                          className="mx-auto mb-3"
                          src={question4}
                          height={40}
                          width={40}
                          alt="question icon"
                        />
                      )}
                      {optionText.includes("Rent") && (
                        <Image
                          className="mx-auto mb-3"
                          src={question2}
                          height={40}
                          width={40}
                          alt="question icon"
                        />
                      )}
                      {optionText.includes("storey") && (
                        <Image
                          className="mx-auto mb-3"
                          src={question4}
                          height={40}
                          width={40}
                          alt="question icon"
                        />
                      )}
                      {optionText.includes("Yes") && (
                        <Image
                          className="mx-auto mb-3"
                          src={yesIcon}
                          height={40}
                          width={40}
                          alt="question icon"
                        />
                      )}

                      {optionText.includes("No Thanks") && (
                        <Image
                          className="mx-auto mb-3"
                          src={noIcon}
                          height={40}
                          width={40}
                          alt="question icon"
                        />
                      )}

                      {optionText}
                    </button>
                  );
                })}
            </div>
          )}
        </div>
      )}
      {isNotAvailable && questions[currentQuestion].id === 2 && (
        <div className="not-available md:relative md:right-20 mt-32">
          {/* <h2 className="text-center text-red-600 mb-3 font-bold text-2xl md:text-3xl">
            Sorry, not available
          </h2> */}
          <div className="mx-auto w-[70%] text-center">
            <p className="  text-darkshadegray font-bold text-xl  ">
              We are sorry, but the government solar rebate is only available to
              homeowners and cannot be applied to rental properties.
            </p>
            <span
              onClick={handleBack}
              className="inline-flex cursor-pointer mt-3 w-fit justify-center mx-auto gap-x-2"
            >
              <Image height={6} width={6} src={arrow} alt="arrow" />
              <span className="text-[13px] text-white">Go Back</span>
            </span>
          </div>
        </div>
      )}
      {displaySummary && (
        <SummaryForm
          fullAdressInfo={fullAdressInfo}
          selectedAnswers={selectedAnswers}
        />
      )}

      {/* Bottom Progress and Summary */}
      <div className="w-full absolute md:hidden bottom-0 flex items-center justify-between px-6 py-2 bg-white shadow-lg">
        {/* Progress Circle */}
        <div className="flex items-center">
          <div className="relative">
            <svg className="w-16 h-16 transform -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                strokeWidth="4"
                stroke="#e5e7eb"
                fill="none"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                strokeWidth="4"
                stroke="#f5c441"
                fill="none"
                strokeDasharray="176"
                strokeDashoffset={176 - (progress / 100) * 176}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm text-backgroundPaleYellow font-semibold">
              {Math.round(progress)}%
            </span>
          </div>
          <span className="text-sm font-medium text-darkshadegray ml-4">
            Complete
          </span>
        </div>

        {/* Summary Button */}
        <button
          onClick={toggleSidebar}
          className="text-sm font-medium text-backgroundPaleYellow"
        >
          My Summary
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }} // Closing animation
            transition={{ duration: 0.4, ease: "easeInOut" }}
            // data-aos="fade-left"
            className={`fixed md:absolute top-0 pt-6  overflow-scroll right-0 p-3 h-full w-64 md:w-72 bg-white shadow-lg transform ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            } `}
          >
            <span className="inline-flex md:inline-block md:bg-white shadow-none justify-between items-center  w-full">
              <h2 className="text-lg text-darkshadegray  font-bold ">
                Your Summary
              </h2>
              <Image
                className="cursor-pointer md:hidden"
                onClick={() => setIsSidebarOpen(false)}
                src={close}
                height={15}
                width={15}
                alt=""
              />
              <p className="text-[#484848cc] text-[13px] hidden md:block tracking-tightest">
                By answering a few questions we can recommend solar installers
                to compare and start saving
              </p>
            </span>
            <ul className="mt-6">
              {questions.map((q, index) => (
                <li
                  key={q.id}
                  className={`mb-2 flex items-center gap-x-2 p-2  ${
                    index === currentQuestion ? ": text-[#015eb3]" : ""
                  }`}
                >
                  <Image src={q.icon} alt="icon" height={16} width={16} />
                  <p
                    className={`  text-xs md:text-sm  ${
                      index === currentQuestion
                        ? ": text-backgroundPaleYellow"
                        : "text-darkshadegray"
                    }`}
                  >
                    {q.text}
                  </p>
                </li>
              ))}
            </ul>
            <div className="w-[80%] hidden md:block mx-auto">
              <h3 className="font-bold text-base text-[#333333]">
                Savings Calculator
              </h3>
              <div className="relative my-2 w-full h-2 rounded-full bg-gray-200">
                <div
                  className="absolute  h-2 rounded-full bg-[#FFBA4A]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-700 mt-1 block">
                Calculation accuracy {Math.round(progress)}%
              </span>
            </div>

            <div className="hidden mt-8 md:block md:gradient7">
              <h2 className="font-bold text-base text-[#333333]">
                What our customers say
              </h2>
              <h3 className="font-bold text-sm my-2 text-[#333333]">
                {questions[currentQuestion].clientName}
              </h3>
              <Image src={stars} alt="starts" />
              {questions[currentQuestion].review && (
                <p className="text-[#484848cc] text-[13px] hidden md:block tracking-tightest mt-3">
                  {questions[currentQuestion].review}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
