"use client";
import React, { useState } from "react";

const faqs = [
  {
    q: "Why standards do Highland Lifespaces adhere to when building Highland Mayfield?",
    a: "Highland Mayfield follows premium construction practices, sourcing high-grade materials and employing industry-certified methods to ensure durability, safety, and long-term value. Our design philosophy blends functionality, modern aesthetics, and sustainability to deliver homes that stand the test of time.",
  },
  { q: "How much does property in Highland Mayfield cost?", a: "" },
  { q: "What is the possession timeline for Highland Mayfield?", a: "" },
  {
    q: "What are the benefits of investing in Highland Mayfield if I am an NRI?",
    a: "",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-white py-16 px-20">
      <div className="">
        <p className="uppercase text-center text-sm text-gray-400 mb-4 tracking-tight">
          project progress
        </p>
        <h2 className="text-6xl text-center gilda-display-regular   text-gray-900">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-10">
        <div className="max-w-5xl mx-auto ">
          {faqs.map((faq, idx) => (
            <div key={faq.q} className="py-2">
              <button
                className={`w-full text-left py-4  flex  justify-between  ${
                  open === idx ? "border-b  border-b-gray-300" : ""
                }  focus:outline-none`}
                onClick={() => setOpen(open === idx ? -1 : idx)}
              >
                <h1
                  className={`px-3 text-lg
               
                  `}
                >
                  {faq.q}
                </h1>
                <span className="text-2xl">{open === idx ? "−" : "+"}</span>
              </button>
              {open === idx && faq.a && (
                <div className="py-2 px-4 text-gray-500 tracking-wide ">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
