"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-indigo-600"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-slate-900 md:text-lg">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-slate-200" role="presentation">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}