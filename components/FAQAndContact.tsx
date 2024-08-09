"use client";
import React from 'react';
import { SparklesIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const FAQAndContact: React.FC = () => {
  const faqData = [
    { question: 'When and where is SheCode?', answer: 'SheCode will be held on Saturday, April 22th, 2023 in Southern Illinois University Edwardsville’s Engineering Building.' },
    { question: 'Where do I park?', answer: 'Parking is available for free in Visitor Lot B near the Engineering Building.' },
    { question: 'Who can participate?', answer: 'This event is geared towards female high school students. However, mentors will be available for each team to help.' },
    { question: 'What does this event cost?', answer: 'Nothing! This event is totally free thanks to the generosity of our sponsors. There will be a lunch provided for each person.' },
    { question: 'What do I need to bring?', answer: 'You should bring your cell phone (iOS or Android), and a phone charger.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <SparklesIcon className="h-16 w-16 mx-auto mb-4 text-fuchsia-500" />
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <h2 className="text-2xl text-blue-300 italic">- we've got the answers.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {faqData.slice(0, 2).map((faq, index) => (
            <div key={index} className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 hover:bg-opacity-20 transition duration-300 border-2 border-fuchsia-500/30">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
          <div className="sm:col-span-2 flex justify-center">
            <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 hover:bg-opacity-20 transition duration-300 border-2 border-purple-500/30">
              <h3 className="text-xl font-semibold mb-3">{faqData[4].question}</h3>
              <p className="text-gray-300">{faqData[4].answer}</p>
            </div>
          </div>
          {faqData.slice(2, 4).map((faq, index) => (
            <div key={index + 2} className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 hover:bg-opacity-20 transition duration-300 border-2 border-purple-500/30">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-white bg-opacity-10 rounded-lg shadow-lg p-8 mt-12 border-2 border-purple-500/30">
          <EnvelopeIcon className="h-16 w-16 mx-auto mb-4 text-fuchsia-500" />
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
