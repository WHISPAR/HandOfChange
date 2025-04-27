import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center p-4">
      <h2 className="text-xl font-bold mb-4">CONTACT US</h2>
      <div className="flex justify-center space-x-4">
        <a href="#" className="hover:text-gray-200">
          <FontAwesomeIcon icon={faWhatsapp} size="1x" />
        </a>
        <a href="#" className="hover:text-gray-200">
          <FontAwesomeIcon icon={faFacebook} size="1x" />
        </a>
        <a href="#" className="hover:text-gray-200">
          <FontAwesomeIcon icon={faTelegram} size="1x" />
        </a>
        <a href="handsofchangef@gmail.com" className="hover:text-gray-200">
          <FontAwesomeIcon icon={faEnvelope} size="1x" />
        </a>
        
      </div>
      <p>Cell: 888 323 706 / 0881 286 843</p>
  <p>Email: handsofchangef@gmail.com</p>
      <div className="text-left text-top">
  <p>Gadaga Trading Center</p>
  <p>Singano Village</p>
  <p>Off Chileka Airport Road</p>
  <p>PO Box 30143, Blantyre</p>
  <p>Malawi, Southern Africa</p>
 
</div>
 
    </footer>
  );
};

export default Footer;
