import React, { useState } from "react";
export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const faqData = [
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Things on a very small scale behave like nothing ",
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Things on a very small scale behave like nothing ",
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Things on a very small scale behave like nothing ",
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Things on a very small scale behave like nothing ",
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Things on a very small scale behave like nothing ",
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Things on a very small scale behave like nothing ",
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Things on a very small scale behave like nothing ",
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Things on a very small scale behave like nothing ",
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-foreground py-20">
      <div className="wrapper flex flex-col items-center">
        <h3 className="text-primary-2 text-3xl font-semibold tracking-wide">
          FAQs
        </h3>
        <p className="text-primary-2 text-base mt-4">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

        <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-2">
          {faqData.map((faq, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between w-full text-left text-primary-1 font-semibold"
              >
                <span>{faq.question}</span>

                <span>{expandedIndex === index ? "-" : "+"}</span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedIndex === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
