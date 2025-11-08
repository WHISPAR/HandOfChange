import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faFacebook,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setSubscriptionStatus('Please fill in all fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubscriptionStatus('Please enter a valid email address');
      return;
    }

    // Simulate API call
    setSubscriptionStatus('Subscribing...');
    
    setTimeout(() => {
      // Here you would typically send data to your backend
      console.log('Subscription data:', formData);
      setSubscriptionStatus('Thank you for subscribing!');
      setFormData({ name: '', email: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubscriptionStatus(''), 3000);
    }, 1000);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhoneClick = () => {
    window.open('tel:+265881286843');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@handsofchangefoundation.com';
  };

  const handleLocationClick = () => {
    // Open in Google Maps
    const address = encodeURIComponent('Gadaga Trading center, Singano village, Off Chileka Airport Road, Blantyre, Malawi, Southern Africa');
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`);
  };

  return (
    <footer className="bg-gradient-to-br from-blue-700 to-blue-900 text-white px-6 py-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Newsletter */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">
            Subscribe Newsletter<br />For Latest Updates
          </h2>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full rounded-full px-6 py-3 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-full px-6 py-3 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />
            <button 
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 w-full py-3 rounded-full font-bold transition duration-300 transform hover:scale-105"
            >
              SUBSCRIBE
            </button>
            {subscriptionStatus && (
              <p className={`text-sm text-center mt-2 ${
                subscriptionStatus.includes('Thank you') 
                  ? 'text-green-300' 
                  : 'text-orange-300'
              }`}>
                {subscriptionStatus}
              </p>
            )}
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4 border-b-2 border-orange-500 inline-block pb-1">
            GET TO KNOW US
          </h2>
          <ul className="space-y-2 mt-4">
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-orange-300 transition duration-200 text-left"
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('partners')}
                className="hover:text-orange-300 transition duration-200 text-left"
              >
                Partnerships
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className="hover:text-orange-300 transition duration-200 text-left"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('resources')}
                className="hover:text-orange-300 transition duration-200 text-left"
              >
                Resources
              </button>
            </li>
            <li>
              <button 
                onClick={() => window.open('/privacy-policy', '_blank')}
                className="hover:text-orange-300 transition duration-200 text-left"
              >
                Privacy Policy
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-bold mb-4 border-b-2 border-yellow-500 inline-block pb-1">
            Contact Us
          </h2>
          <ul className="space-y-4 mt-4 text-sm">
            <li className="flex items-start">
              <FontAwesomeIcon 
                icon={faPhone} 
                className="mr-3 mt-1 text-orange-400 cursor-pointer" 
                onClick={handlePhoneClick}
              />
              <button 
                onClick={handlePhoneClick}
                className="hover:text-orange-300 transition duration-200 text-left"
              >
                +265-881-286-843
              </button>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon 
                icon={faEnvelope} 
                className="mr-3 mt-1 text-orange-400 cursor-pointer"
                onClick={handleEmailClick}
              />
              <button 
                onClick={handleEmailClick}
                className="hover:text-orange-300 transition duration-200 text-left"
              >
                info@handsofchangefoundation.com
              </button>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon 
                icon={faLocationDot} 
                className="mr-3 mt-1 text-orange-400 cursor-pointer"
                onClick={handleLocationClick}
              />
              <button 
                onClick={handleLocationClick}
                className="hover:text-orange-300 transition duration-200 text-left"
              >
                Gadaga Trading center, Singano village,<br />
                Off Chileka Airport Road, Blantyre,<br />
                Malawi, Southern Africa
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-blue-500 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-4 md:mb-0 text-blue-200">
          © {new Date().getFullYear()} Hands of Change Foundation. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a 
            href="https://www.facebook.com/handsofchangefoundation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-orange-300 transition duration-200 text-lg"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a 
            href="https://t.me/HandOfChange" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-orange-300 transition duration-200 text-lg"
            aria-label="Telegram"
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a 
            href="https://wa.me/265881286843" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-orange-300 transition duration-200 text-lg"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;