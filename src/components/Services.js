import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate,faBookOpen,faBalanceScale,faBullhorn, faSeedling, faLeaf, faCloudSun,faHeartbeat,faVenusMars,faHandHoldingWater } from '@fortawesome/free-solid-svg-icons';

const services = [
  { icon: faUserGraduate, text: 'Youth Empowerment' },
  { icon: faBookOpen, text: 'Education Support' },
  { icon: faBalanceScale, text: 'Human Rights & Good Governance' },
  { icon: faBullhorn, text: 'Advocacy' },
  { icon: faSeedling, text: 'Agriculture & Food Security' },
  { icon: faLeaf, text: 'Environmental Management' },
  { icon: faCloudSun, text: 'Climate Change' },
  { icon: faHeartbeat, text: 'Health, HIV/AIDS & SRH' },
  { icon: faVenusMars, text: 'Gender Based Violence' },
  { icon: faHandHoldingWater, text: 'Water, Hygiene & Sanitation' },
  
];

const Services = () => {
  return (
    <section className="text-center my-8">
      <h2 className="text-2xl font-bold mb-4"> ACTIVITIES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-blue-200 p-4 rounded-md shadow-md flex items-center justify-center space-x-4">
            <FontAwesomeIcon icon={service.icon} size="2x" className="text-blue-600" />
            <span>{service.text}</span>
          </div>
        ))}
      </div>
    </section>
   
  );
};

export default Services;
