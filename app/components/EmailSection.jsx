'use client';
import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log('Message sent.');
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative grid gap-4 py-24 my-12 md:grid-cols-2 md:my-12 pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="z-10 items-center gap-8 px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
        <h5 className="my-2 text-3xl font-bold text-black">Let&apos;s Get This Sorted, Shall We?</h5>
        <p className="max-w-md mb-4 text-xl text-black ">
          {' '}
          Pop your details, and we’ll be round to give your Surrey space a proper tidy – no spot left behind!{' '}
        </p>
        <div className="flex flex-row gap-2 socials">
          <Link href="github.com">
            <Image alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10 items-center gap-8 px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
        {emailSubmitted ? (
          <p className="mt-2 text-sm text-green-500">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block min-h-200 w-full p-2.5 "
                placeholder="Let's talk about..."
              />
            </div>
            <button type="submit" className="bg-primary-500 hover:bg-primary-600 text-black font-medium py-2.5 px-5 rounded-lg w-full">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
