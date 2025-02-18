import React from "react";
import Contact from "./components/contact/Contact";
import ContactBg from "./assets/contact.png";
const ContactPage = () => {
  return (
    <div className="w-full p-4 my-4">
      <div
      className="w-4/6 mx-auto p-16 my-0 shadow-customS rounded-3xl"
        style={{
          backgroundImage: `url(${ContactBg})`,
          backgroundSize: "100% 100%", // Ensures the whole image fits
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-8 w-7/12 my-2">
        <div className="text-5xl text-[#000D44] font-semibold">Get In Touch!</div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
