"use client"
import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon, SparklesIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const FAQAndContact: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqData = [
    {
      question: 'When and where is SheCode?',
      answer: 'SheCode will be held on Saturday, April 22th, 2023 in Southern Illinois University Edwardsvilles Engineering Building.'
    },
    {
      question: 'Where do I park?',
      answer: 'Parking is available for free in Visitor Lot B near the Engineering Building.'
    },
    {
      question: 'Who can participate?',
      answer: 'This event is geared towards female high school students. However, mentors will be available for each team to help.'
    },
    {
      question: 'What does this event cost?',
      answer: 'Nothing! This event is totally free thanks to the generosity of our sponsors. There will be a lunch provided for each person.'
    },
    {
      question: 'What do I need to bring?',
      answer: 'You should bring your cell phone (iOS or Android), and a phone charger.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <SparklesIcon className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <h2 className="text-2xl text-blue-300">- we've got the answers.</h2>
        </div>

        <div className="space-y-6 mb-16">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white bg-opacity-10 rounded-lg shadow-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              >
                <span className="text-xl font-semibold">{faq.question}</span>
                {openQuestion === index ? (
                  <ChevronUpIcon className="h-6 w-6 text-blue-300" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6 text-blue-300" />
                )}
              </button>
              {openQuestion === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center bg-white bg-opacity-10 rounded-lg shadow-lg p-8">
          <EnvelopeIcon className="h-16 w-16 mx-auto mb-4 text-blue-300" />
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4 text-xl">Any questions? Let us know!</p>
          <p className="mb-6 text-gray-300">
            We're here to help. If your question isn't answered above, please don't hesitate to reach out.
            We'll get back to you as soon as we can!
          </p>
          <a
            href="mailto:siue.ehacks@gmail.com"
            className="text-l sm:text-2xl text-blue-300 hover:text-blue-200 transition duration-300"
          >
            siue.ehacks@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQAndContact;