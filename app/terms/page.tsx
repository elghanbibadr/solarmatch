import React from "react";
import logo from "@/public/images/SolarLocal Iconlogo.webp";
import Image from "next/image";
import Link from "next/link";

const TermsOfUse = () => {
  return (
    <div className="max-w-[1300px] mx-auto p-6">
      <div>
        <Link href="/">
          <Image
            className="mx-auto"
            src={logo}
            alt="solar logo"
            width={240}
            height={130}
          />
        </Link>
      </div>
      <h1 className="text-3xl md:text-3xl text-darkshadegray font-semibold mb-4">
        Terms of Use
      </h1>
      <p className="mb-4">
        SolarMatch (&quot;SolarMatch,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) owns and operates this website (&quot;Website&quot;). By accessing or using the Website, you agree to abide by these Terms of Use, our Privacy Policy, and any other relevant notices or disclaimers (collectively referred to as &quot;Terms of Use&quot;). If you do not agree with any part of these Terms of Use, you must discontinue use of the Website.
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        Modification of Terms
      </h3>
      <p className="mb-4">
        SolarMatch reserves the right to modify these Terms of Use at any time without prior notice. We encourage you to review this page regularly to stay informed of any changes.
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        Governing Law
      </h3>
      <p className="mb-4">
        These Terms of Use are governed by the laws of Australia. By using this Website, you irrevocably agree to submit to the exclusive jurisdiction of Australian courts. If any provision in these Terms of Use is deemed invalid or unenforceable, the remaining provisions will continue in full effect.
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        Quotes and Services
      </h3>
      <p className="mb-4">
        The Website facilitates the process of obtaining quotes from third-party solar suppliers. We do not endorse or guarantee the services, products, or representations made by these suppliers. Any transactions or agreements you enter into with third-party suppliers are solely your responsibility, and SolarMatch is not liable for their performance or the quality of their services.
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        Permitted Use
      </h3>
      <p className="mb-4">You may use the Website only for requesting solar quotes. You are strictly prohibited from:</p>
      <ul className="list-disc text-textColor list-inside mb-4">
        <li>Requesting a quote on behalf of someone else without their consent.</li>
        <li>Compiling lists of suppliers for purposes other than obtaining quotes.</li>
        <li>Sending automated requests, spam, or misusing the platform in any way.</li>
        <li>Copying, adapting, or repurposing the Website’s content for commercial purposes.</li>
      </ul>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        Third-Party Links
      </h3>
      <p className="mb-4">
        The Website may contain links to external websites. SolarMatch is not responsible for the content or policies of third-party websites, and your use of those sites is at your own risk.
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        Disclaimer and Limitation of Liability
      </h3>
      <p className="mb-4">
        The Website is provided on an &quot;as is&quot; basis. While we strive to ensure the accuracy of the information provided, we do not warrant that the content is error-free or current. To the maximum extent permitted by law, SolarMatch disclaims any liability for any direct, indirect, incidental, or consequential damages resulting from your use of the Website.
      </p>
      <p className="mb-4">
        Nothing in these Terms of Use excludes or modifies any rights or guarantees under Australian consumer protection laws that cannot be lawfully excluded (&quot;Non-Excludable Guarantees&quot;).
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        Indemnification
      </h3>
      <p className="mb-4">
        By using the Website, you agree to indemnify SolarMatch, its employees, and affiliates against any claims, losses, damages, or expenses arising from your misuse of the Website or breach of these Terms of Use.
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        Intellectual Property
      </h3>
      <p className="mb-4">
        All content on the Website, including trademarks, logos, text, and images, is protected by intellectual property laws and remains the property of SolarMatch or third-party licensors. You may not copy, modify, distribute, or reproduce any content without prior written consent.
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        Termination of Access
      </h3>
      <p className="mb-4">
        SolarMatch reserves the right to suspend or terminate your access to the Website at its discretion, without notice. Any obligations or liabilities incurred prior to termination will survive such termination.
      </p>

      <h3 className="mb-4 text-darkshadegray font-semibold text-xl md:text-2xl">
        Contact Us
      </h3>
      <p className="mb-4">
        For any inquiries regarding these Terms of Use, please contact us at
        <a href="mailto:info@solarmatch.me " className="text-backgroundPaleYellow underline"> info@solarmatch.me </a>.
      </p>

      <p className="text-sm text-gray-600 mt-6">Last Updated: 7th of February 2025</p>
    </div>
  );
};

export default TermsOfUse;
