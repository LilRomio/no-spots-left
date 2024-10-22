'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '../assets/NoSpotsLeft-logo.png';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
        <a href="#heroSection">
          <Image src={Logo} alt="No Spots Left Logo" height={40} width={110} />
        </a>
        <h1 className="text-4xl font-bold text-[#003366] mb-6">Terms and Conditions</h1>

        <p className="mb-4 text-lg">
          <strong>Effective Date:</strong> 22.10.2024
        </p>

        <p className="mb-4 text-lg">
          Welcome to <strong>No Spots Left</strong>. These terms and conditions ("Terms") outline the rules and
          regulations for the use of our website and services. By accessing or using our website and services, you agree
          to comply with and be bound by these Terms. If you disagree with any part of these Terms, you must not use our
          website or services.
        </p>

        <h2 className="text-2xl font-semibold text-[#003366] mt-6 mb-4">1. Service Terms</h2>

        <p className="mb-4 text-lg">By booking any of our cleaning services, you agree to the following terms:</p>

        <ul className="mb-4 text-lg list-disc list-inside">
          <li>
            <strong>Bookings:</strong> All bookings are subject to availability and must be confirmed by{' '}
            <strong>No Spots Left</strong> either through phone, email, or our online booking system.
          </li>
          <li>
            <strong>Payment:</strong> Full payment is required either before or at the time of service. We accept
            various payment methods, including credit/debit cards and bank transfers.
          </li>
          <li>
            <strong>Cancellation Policy:</strong> You may cancel or reschedule a booking at least 24 hours before the
            scheduled service. Cancellations made within 24 hours will be subject to a cancellation fee.
          </li>
          <li>
            <strong>Access to Property:</strong> It is your responsibility to ensure that we have access to the property
            at the scheduled time. If access is not provided, the service will be canceled, and a cancellation fee may
            apply.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#003366] mt-6 mb-4">2. Use of Our Website</h2>

        <p className="mb-4 text-lg">By accessing our website, you agree not to:</p>

        <ul className="mb-4 text-lg list-disc list-inside">
          <li>Use the website for any unlawful purpose or in violation of any applicable laws and regulations.</li>
          <li>
            Attempt to gain unauthorized access to any portion of the website or any systems connected to the website.
          </li>
          <li>
            Engage in any activity that could damage, disable, or impair the website or interfere with other users'
            access to the website.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#003366] mt-6 mb-4">3. Liability</h2>

        <p className="mb-4 text-lg">
          While we strive to provide high-quality cleaning services, <strong>No Spots Left</strong> will not be held
          liable for:
        </p>

        <ul className="mb-4 text-lg list-disc list-inside">
          <li>
            Any damage to property caused by pre-existing conditions, wear and tear, or items that were not disclosed to
            us prior to service.
          </li>
          <li>
            Loss or damage to any valuable or irreplaceable items. It is the customer’s responsibility to safeguard such
            items.
          </li>
          <li>Any indirect, incidental, or consequential damages resulting from the use of our services or website.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#003366] mt-6 mb-4">4. Modifications to the Terms</h2>

        <p className="mb-4 text-lg">
          We reserve the right to modify or update these Terms at any time without prior notice. Your continued use of
          the website or services after any changes to these Terms constitutes your acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-semibold text-[#003366] mt-6 mb-4">5. Governing Law</h2>

        <p className="mb-4 text-lg">
          These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction]. Any
          disputes arising from these Terms or the use of our services will be resolved exclusively in the courts of
          [Insert Jurisdiction].
        </p>

        <h2 className="text-2xl font-semibold text-[#003366] mt-6 mb-4">6. Contact Us</h2>

        <p className="mb-4 text-lg">
          If you have any questions or concerns about these Terms, please contact us at nospotsleft@gmail.com.
        </p>
      </div>
    </div>
  );
}
