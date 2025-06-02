import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faFacebook,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white px-6 py-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Subscribe Newsletter<br />For Latest Updates
          </h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-full px-4 py-2 mb-3 text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-full px-4 py-2 mb-3 text-black"
          />
          <button className="bg-orange-500 w-full py-2 rounded-full font-bold">
            SUBSCRIBE
          </button>
        </div>
        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2 border-b-2 border-black-500 inline-block">
            GET TO KNOW US
          </h2>
          <ul className="space-y-1 mt-2">
            <li>About Us</li>
            <li>Partnerships</li>
            <li>Projects</li>
            <li>Resources</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-lg font-bold mb-2 border-b-2 border-yellow-500 inline-block">
            Contact Us
          </h2>
          <ul className="space-y-3 mt-2 text-sm">
            <li>
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +265-881-286-843
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              HandsofChangeFoundation.com
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              Gadaga Trading center,Singano village ,Off Chileka Airport Road ,
              Blantyre,Malawi, Southern Africa
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-500 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Hands of Change Foundation
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
