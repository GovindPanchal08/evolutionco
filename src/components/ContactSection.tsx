import React from "react";

const ContactSection = () => (
  <section className="relative h-[100vh] w-full">
    {/* MAP BACKGROUND */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.43899141457!2d76.694274!3d30.704423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef253e31eb13%3A0xf286625e37f48743!2sSector%20117%2C%20Mohali%2C%20Punjab!5e0!3m2!1sen!2sin!4v1730351870000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      className="absolute inset-0 w-full h-full border-0"
    ></iframe>

    {/* FLOATING CONTACT BOX */}
    <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-white px-12 py-10    w-[35%]   shadow-2xl">
      <h2 className="text-7xl gilda-display-regular  mb-14 ">Contact us</h2>
      <form className="space-y-10 ">
        <input
          type="text"
          placeholder="Name"
          className="w-full border-b border-b-gray-400 p-1 outline-none bg-transparent"
        />
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Phone Number"
            className="w-1/2 border-b border-b-gray-400  p-1 outline-none bg-transparent"
          />
          <input
            type="email"
            placeholder="Email ID"
            className="w-1/2 border-b border-b-gray-400 p-1 outline-none bg-transparent"
          />
        </div>
        <input
          type="text"
          placeholder="City"
          className="w-full border-b border-b-gray-400 p-1 outline-none bg-transparent"
        />
        <select className="w-full border-b  border-b-gray-400 p-1 outline-none bg-transparent">
          <option>Query Type</option>
          <option>Sales</option>
          <option>Support</option>
        </select>
        <div className="flex  justify-between  mt-10">
          <button
            type="button"
            className="border text-sm  px-5 py-4 hover:bg-black hover:text-white"
          >
            CONNECT ON WHATSAPP
          </button>
          <button
            type="submit"
            className="bg-teal-800 hover:bg-teal-600 text-sm text-white px-5 py-4"
          >
            REQUEST A CALL BACK
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default ContactSection;
