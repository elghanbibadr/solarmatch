import billDrop from "@/public/images/Adobe Express - file.png";
import Image from "next/image";
const Services = () => {
  return (
    <section className="bg-darkshadegray px-4 md:px-6  my-20 pt-20 grid grid-cols-1 justify-center md:gap-x-6 items-center md:h-fit md:grid-cols-2  text-white py-10 md:py-2 px-6 md:px-16">
      <div className="md:order-2">
        <div className="text-center md:text-left mb-8">
          <h2 className="text-white mb-6">A Service That Stands Out</h2>
          <p className="text-white">Here’s how we make it easy for you:</p>
        </div>
        <ul className="list-disc p-0 m-0 space-y-2 text-center md:text-left text-sm md:text-base max-w-2xl mx-auto">
          <li>Access registered solar installers across Australia</li>
          <li>Our service is completely free and obligation-free</li>
          <li>Get 3 free quotes from our trusted installer network </li>
          <li>Our team is dedicated to helping you save on energy costs.</li>
        </ul>
      </div>
      <div className="flex md:order-1  top-16 justify-center relative ">
      <Image
          src={billDrop} // Replace with your image path
          alt="Energy Bill Example"
          className="max-w-full md:h-full md:w-full h-auto "
        />
      </div>
    </section>
  );
};

export default Services;
