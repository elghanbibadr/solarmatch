/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import locationIcon from "@/public/images/icons/Location.svg";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ArrowLeft } from "lucide-react";

const SummaryForm = ({
  selectedAnswers,
  fullAdressInfo,
}: {
  selectedAnswers: any;
  fullAdressInfo: any;
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formSuccessfullySubmited, setFormSuccessfullySubmited] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const {
    country,
    state,
    city,
    postcode,
    lat,
    lon,
    place_id,
    address_line1,
    address_line2,
  } = fullAdressInfo;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "phoneNumber") {
      // Allow exactly 8 or 10 digits
      setIsPhoneValid(/^\d{8}$|^\d{10}$/.test(value));
    }
  };

  const storeys =
    selectedAnswers[3]?.text === "Single-storey" ? "single" : "multi";
  const leads =
    selectedAnswers[0]?.text.trim() === "Solar Power System"
      ? ["RPV"]
      : ["RHYPV"];
  if (selectedAnswers[5].text === "Yes") {
    leads.push("RSHW");
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) return;

    try {
      const token = await executeRecaptcha("form_submit");

      const recaptchaResponse = await fetch("/api/verifyRecaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (!recaptchaResponse.ok) {
        alert("Error in validation");
        return;
      }

      const data = await recaptchaResponse.json();

      if (!data?.success) {
        setError(
          "there was an error processing your request try again later !"
        );
        return;
      }
    } catch (error) {
      console.error("Recaptcha Error:", error);
      return;
    }

    setIsLoading(true);

    if (!isPhoneValid) return;

    const contact = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phoneNumber,
      email: formData.email,
    };

    const address =
      fullAdressInfo && Object.keys(fullAdressInfo).length > 0
        ? {
            full: `${address_line1} ${address_line2}`,
            postCode: postcode || "0000",
            placeId: place_id,
            state,
            country,
            city,
            suburb: address_line1,
            coordinates: { lat, lng: lon },
          }
        : { raw: selectedAnswers[6], postCode: "0000" };

    const details = {
      contact,
      address,
      leadTypes: leads,
      isOwner: true,
      roofType: selectedAnswers[2]?.text?.toLowerCase(),
      storeys,
      tags: ["SL"],
      comments: `energy bill: ${selectedAnswers[4]?.text?.toLowerCase()}`,
    };

    try {
      await axios.post("/api/proxy", details);
      setFormSuccessfullySubmited(true);
    } catch (error) {
      setError("Something went wrong, try again later!");
      console.error("Submission Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const transformedAnswers = Object.keys(selectedAnswers).map((key: any) => {
    if (key !== "6") {
      return {
        text: selectedAnswers[key].text,
        icon: selectedAnswers[key].icon,
      };
    } else {
      return { text: selectedAnswers[key], icon: locationIcon };
    }
  });
  return (
    <div data-aos="fade-up">
      {!formSuccessfullySubmited && !error && (
        <div className="grid md:grid-cols-3 mt-4 gap-x-3 bg-white p-6 rounded-lg shadow-lg mx-2   max-w-xl items-center ">
          <form
            onSubmit={handleSubmit}
            className="col-span-2 text-darkshadegray"
          >
            <h2 className="text-base md:text-xl text-left  font-semibold text-darkshadegray mb-6">
              Compare 3 free quotes and see how much you could save.
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-xs md:text-sm font-medium">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full text-xs md:text-sm p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="First name"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-xs md:text-sm font-medium">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-2 border text-xs md:text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-xs md:text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 text-xs md:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-xs md:text-sm font-medium">
                Phone number
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`w-full p-2 text-xs md:text-sm border ${
                  isPhoneValid ? "border-gray-300" : "border-red-500"
                } rounded-lg focus:outline-none focus:ring-2 ${
                  isPhoneValid ? "focus:ring-blue-500" : "focus:ring-red-500"
                }`}
                placeholder="Phone number"
                required
              />
              {!isPhoneValid && (
                <p className="text-red-500 text-sm mt-1">
                  This field is not valid
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full mt-6 py-2 compareNowButtonGradient  text-white font-semibold rounded-lg  transition"
            >
              {!isLoading ? " Get Quotes " : "Calculating ...."}
            </button>
            <p className="text-gray-500 text-xs text-center mt-4">
              Unbiased, independent solar quotes. 100% obligation free.{" "}
            </p>
          </form>
          <ul className="mt-6 hidden md:block">
            {Object.entries(transformedAnswers).map(([questionId, answer]) => (
              <li
                key={questionId}
                className={`mb-2 flex items-center gap-x-1 p-2    `}
              >
                <Image src={answer.icon} alt="icon" height={16} width={16} />
                <p className={`  text-xs text-darkshadegray  `}>
                  {answer.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {formSuccessfullySubmited && (
        <div
          data-aos="fade-up"
          className="bg-white p-6   rounded-lg shadow-md text-center max-w-lg mt-20 w-fit mx-4 "
        >
          <CheckCircle className="w-10 h-10 text-darkshadegray mx-auto" />
          <h2 className="text-xl font-semibold text-backgroundPaleYellow mt-2">
            Thank you for submitting your details!
          </h2>
          <p className="mt-2 text-darkshadegray">
            We have successfully received your information and will connect you
            with the highest-rated local solar companies. They will be in touch
            with you soon to provide your free quotes.
          </p>
          <Link href="/">
            <span className="text-backgroundPaleYellow cursor-pointer  text-sm block mt-4">
              Go Back
            </span>
          </Link>
        </div>
      )}
      {error && !isLoading && (
        <div className="bg-white p-6 text-red-500  rounded-lg shadow-md text-center max-w-lg mt-14 w-fit mx-4 ">
          <h3>{error}</h3>
          <Link
            href="/"
            className="flex items-center mt-10 gap-2 justify-center"
          >
            <ArrowLeft className="block" height={16} width={16} />
            <span className="text cursor-pointer  text-sm block ">Go Back</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SummaryForm;
