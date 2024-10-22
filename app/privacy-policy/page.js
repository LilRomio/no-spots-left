'use client';

import React from 'react';

import Logo from '../assets/NoSpotsLeft-logo.png';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <div className="max-w-4xl p-8 mx-auto mt-8 bg-white rounded-lg shadow-md">
        <a href="#heroSection">
          <Image src={Logo} alt="No Spots Left Logo" height={40} width={110} />
        </a>
        <h1 className="text-4xl font-bold text-[#003366] mb-6">Privacy Policy</h1>

        <p className="mb-4 text-lg">
          <strong>Effective Date:</strong> 22.10.2024
        </p>

        <p className="mb-4 text-lg">
          At <strong>No Spots Left</strong> ("we," "our," "us"), we are committed to protecting and respecting your
          privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you
          use our website, services, or communicate with us. By accessing or using our services, you agree to the terms
          of this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold text-[#003366] mt-6 mb-4">1. Information We Collect</h2>

        <p className="mb-4 text-lg">We may collect and process the following types of personal information:</p>

        <h3 className="mt-4 mb-2 text-xl font-semibold">a) Personal Information You Provide to Us</h3>
        <ul className="mb-4 text-lg list-disc list-inside">
          <li>
            Contact Information: Your name, email address, phone number, and home or office address when you inquire
            about or book our services.
          </li>
          <li>
            Billing Information: Payment details, such as credit card numbers or bank account information, for
            processing payments.
          </li>
          <li>
            Communication Data: Any messages, requests, or inquiries you submit through our website, email, or other
            communication channels.
          </li>
        </ul>

        <h3 className="mt-4 mb-2 text-xl font-semibold">b) Information Collected Automatically</h3>
        <ul className="mb-4 text-lg list-disc list-inside">
          <li>
            Website Usage Data: IP address, browser type, device information, and other technical data when you visit
            our website.
          </li>
          <li>
            Cookies and Tracking Technologies: We use cookies to enhance your experience and gather data on how you use
            our website.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#003366] mt-6 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4 text-lg">We use your personal information to:</p>
        <ul className="mb-4 text-lg list-disc list-inside">
          <li>Provide, operate, and maintain our services.</li>
          <li>Process payments and manage billing.</li>
          <li>Respond to your inquiries and provide customer support.</li>
          <li>Send important updates and notifications related to your services.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#003366] mt-6 mb-4">3. Sharing Your Information</h2>
        <p className="mb-4 text-lg">
          We do not sell, trade, or rent your personal information to others. However, we may share your information
          with trusted third-party service providers who assist us in operating our website and services.
        </p>

        <h2 className="text-2xl font-semibold text-[#003366] mt-6 mb-4">4. Data Security</h2>
        <p className="mb-4 text-lg">
          We implement a variety of security measures to maintain the safety of your personal information. However, no
          method of transmission over the internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold text-[#003366] mt-6 mb-4">5. Your Rights</h2>
        <p className="mb-4 text-lg">
          You have the right to access, update, or delete your personal information at any time. Please contact us if
          you would like to exercise any of your rights.
        </p>

        <h2 className="text-2xl font-semibold text-[#003366] mt-6 mb-4">6. Changes to This Privacy Policy</h2>
        <p className="mb-4 text-lg">
          We may update this Privacy Policy from time to time. We encourage you to review this page periodically for any
          changes.
        </p>

        <p className="mb-4 text-lg">
          If you have any questions about this Privacy Policy, please contact us at [Insert Contact Information].
        </p>
      </div>
    </div>
  );
}
