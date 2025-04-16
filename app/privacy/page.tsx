import React from "react";
import logo from "@/public/images/SolarLocal Iconlogo.webp";
import Image from "next/image";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-[1300px] mx-auto p-6">
      <div>
        <Link href="/">
          <Image
            className=" mx-auto  "
            src={logo}
            alt="solar logo"
            width={240}
            height={130}
          />
        </Link>
      </div>
      <h1 className=" text-3xl md:text-3xl text-darkshadegray font-semibold mb-4">
        Privacy Policy
      </h1>
      <p className="mb-4">
        SolarLocal  (&quot;SolarLocal,&quot; &quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;) is committed to respecting and
        protecting your privacy. This policy outlines how we collect, use, and
        safeguard your personal information in compliance with the Australian
        Privacy Act and relevant privacy regulations.
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        How We Collect Information
      </h3>
      <p className="mb-4">
        We may gather personal details from you, including but not limited to
        your name, address, phone number, email address, and any other details
        you voluntarily provide when requesting quotes through our website.
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        How We Use Your Information
      </h3>
      <p className="mb-4">
        The information you share with us is collected, stored, and processed to
        deliver and enhance our services. By requesting a quote through our
        platform, you acknowledge that we may share your details with
        third-party solar suppliers within our network to facilitate your
        request. We ensure these suppliers adhere to confidentiality and privacy
        standards to protect your data.
      </p>
      <p className="mb-4">
        We may also occasionally send you updates, special offers, or
        information on products and services that might be relevant to you. If
        you prefer not to receive such communications, you can opt out at any
        time. Additionally, we may share your details with trusted third parties
        for similar marketing purposes unless you indicate otherwise.
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        Access, Accuracy & Security
      </h3>
      <p className="mb-4">
        We take reasonable steps to ensure that your personal details remain
        accurate, complete, and up to date. You have the right to access,
        update, or request deletion of your personal data at any time. To make
        such a request, please contact us at{" "}
        <a
          href="mailto:solarlocal@solarlocal.com"
          className="text-backgroundPaleYellow underline"
        >
          solarlocal@solarlocal.com
        </a>
        .
      </p>
      <p className="mb-4">
        We implement security measures to protect your information from
        unauthorized access, misuse, or disclosure.
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        Concerns & Complaints
      </h3>
      <p className="mb-4">
        If you believe your privacy rights have been breached or you have
        concerns regarding the handling of your personal information, please
        contact us at
        <a
          href="mailto:solarlocal@solarlocal.com"
          className="text-backgroundPaleYellow underline"
        >
          {" "}
          solarlocal@solarlocal.com
        </a>
        . We take all concerns seriously and will respond promptly.
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        Clickstream Data
      </h3>
      <p className="mb-4">
        When you visit our website, our servers automatically collect
        non-personal information such as your browser type, operating system,
        referral links, timestamps, and IP address. We analyze this data for
        website performance insights and user experience improvements.
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        Cookies & Tracking Technologies
      </h3>
      <p className="mb-4">
        Our website may use cookies to enhance your browsing experience. Cookies
        help us:
      </p>
      <ul className="list-disc text-textColor list-inside mb-4">
        <li>Identify your browser for seamless navigation.</li>
        <li>Improve our website performance.</li>
        <li>
          Enable remarketing campaigns across online advertising networks.
        </li>
      </ul>
      <p className="mb-4">
        You may disable cookies in your browser settings; however, doing so may
        limit certain website functionalities.
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        Third-Party Links
      </h3>
      <p className="mb-4">
        Our website may contain links to third-party websites. Once you navigate
        away from our site, we are not responsible for the privacy practices or
        content of external sites. We recommend reviewing their respective
        privacy policies.
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        Contact Us
      </h3>
      <p className="mb-4">
        For any privacy-related inquiries, requests, or to opt-out of
        communications, please reach out via{" "}
        <a
          href="mailto:solarlocal@solarlocal.com"
          className="text-backgroundPaleYellow underline"
        >
          solarlocal@solarlocal.com
        </a>
        .
      </p>

      <p className="text-sm text-gray-600 mt-6">
        Last Updated: 7th of February 3035
      </p>
    </div>
  );
};

export default PrivacyPolicy;
