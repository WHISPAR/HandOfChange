import React, { useState } from 'react';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';
import img6 from './img6.jpeg';

const Card = ({ title, image, children, bg = 'bg-blue-50', isExpanded, onClick }) => (
  <div 
    className={`
      ${bg} rounded-xl shadow-lg transition-all duration-300 cursor-pointer
      hover:shadow-xl hover:scale-[1.02] overflow-hidden
      ${isExpanded ? 'md:col-span-2 md:row-span-2' : ''}
    `}
    onClick={onClick}
  >
    <div className={`flex flex-col h-full ${isExpanded ? 'md:flex-row' : ''}`}>
      {/* Image Container */}
      <div className={`
        relative overflow-hidden
        ${isExpanded ? 'md:w-2/5' : 'w-full'}
      `}>
        <img 
          src={image} 
          alt={`${title} visual`} 
          className={`
            w-full h-48 object-cover transition-transform duration-500
            ${isExpanded ? 'h-64 md:h-full' : ''}
            hover:scale-110
          `} 
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content Container */}
      <div className={`p-6 flex-1 ${isExpanded ? 'md:w-3/5' : ''}`}>
        <h2 className="text-2xl font-bold mb-4 text-blue-800 flex items-center justify-between">
          {title}
          <span className="text-lg opacity-70">
            {isExpanded ? '▼' : '▶'}
          </span>
        </h2>
        
        <div className={`
          transition-all duration-300 overflow-hidden
          ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="text-gray-700 space-y-3">
            {children}
          </div>
        </div>

        {/* Preview for collapsed state */}
        <div className={`
          transition-all duration-300
          ${isExpanded ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'}
        `}>
          <p className="text-gray-600 text-sm line-clamp-2">
            {getPreviewText(children)}
          </p>
          <p className="text-blue-600 text-xs mt-2 font-medium">Click to learn more</p>
        </div>
      </div>
    </div>
  </div>
);

// Helper function to extract preview text
const getPreviewText = (children) => {
  if (typeof children === 'string') return children;
  if (React.isValidElement(children)) {
    return children.props.children || "Learn more about our initiative";
  }
  return "Learn more about our initiative";
};

const Mission = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const cardData = [
    {
      title: "Our Mission",
      bg: "bg-blue-100",
      image: img1,
      content: (
        <p className="text-lg leading-relaxed">
          Fully recognize the involvement of all disadvantaged poor groups across the communities
          to ensure better and more improved social and economic well-being through various
          community projects.
        </p>
      )
    },
    {
      title: "Vision",
      bg: "bg-yellow-100",
      image: img2,
      content: (
        <p className="text-lg leading-relaxed">
          To facilitate charity and emergency relief support to needy children, women, elderly,
          widows/widowers, and disabled persons for an empowered community that can fend for
          themselves in society.
        </p>
      )
    },
    {
      title: "Objectives",
      bg: "bg-blue-50",
      image: img3,
      content: (
        <ol className="list-decimal space-y-3 pl-6">
          <li>To build capacity of the poor and disadvantaged in areas of psychosocial support, health, human rights, income generation, and agriculture.</li>
          <li>To mobilize resources for implementing social self-help programs for PLHIV members and youth.</li>
          <li>To enhance documentation, reporting, and monitoring of community activities.</li>
        </ol>
      )
    },
    {
      title: "Core Values",
      bg: "bg-green-100",
      image: img4,
      content: (
        <>
          <h3 className="text-lg font-semibold mb-4">Our work is guided by the following values:</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Mutual respect:</strong> Everyone deserves respect, regardless of condition.</li>
            <li><strong>Commitment and participation:</strong> We use inclusive, participatory methods.</li>
            <li><strong>Humility:</strong> Every person has value in building better lives.</li>
            <li><strong>Solidarity:</strong> We stand with the vulnerable to champion their causes.</li>
            <li><strong>Transparency and accountability:</strong> We operate openly and accountably to all.</li>
            <li><strong>Preferential option for the poor:</strong> We prioritize the disadvantaged in all we do.</li>
          </ul>
        </>
      )
    },
    {
      title: "Thematic Areas",
      bg: "bg-purple-100",
      image: img5,
      content: (
        <ol className="list-decimal space-y-4 pl-6">
          <li><strong>Agriculture and Food Security:</strong> Supporting sustainable farming and livestock.</li>
          <li><strong>Sustainable Livelihoods:</strong> Promoting small business startups and micro-loans.</li>
          <li><strong>Water and Sanitation:</strong> Ensuring clean water and safe waste disposal.</li>
          <li><strong>HIV and AIDS:</strong> Promoting prevention and care for affected individuals.</li>
          <li><strong>Gender and Development:</strong> Empowering all genders, especially the disadvantaged.</li>
          <li><strong>Climate Change:</strong> Building resilience through sustainable practices.</li>
          <li><strong>Environmental Management:</strong> Protecting natural resources for future generations.</li>
          <li><strong>Relief and Rehabilitation:</strong> Supporting disaster-stricken households.</li>
          <li><strong>Human Rights and Advocacy:</strong> Promoting equality and advocacy for justice.</li>
          <li><strong>Education:</strong> Supporting boys' and girls' education and retention.</li>
        </ol>
      )
    },
    {
      title: "Organizational Strengths",
      bg: "bg-indigo-100",
      image: img6,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-1">Assets:</h3>
            <p>Head office in Blantyre, internet service, office furniture, and computers.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Governance:</h3>
            <p>Board with experience in finance, health, and administration:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Board Chairperson</li>
              <li>Vice Board Chairperson</li>
              <li>Board Secretary</li>
              <li>Board Treasurer</li>
              <li>Board Member (2x)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Regulatory Requirements:</h3>
            <p>Registered with the Malawi Government and Office of the Registrar General.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Policies:</h3>
            <p>HR/OD Policy and Finance Policy in place. A five-year strategic plan is in development.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            About Our Organization
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our mission, values, and the impactful work we do in communities across Malawi
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              image={card.image}
              bg={card.bg}
              isExpanded={expandedCard === index}
              onClick={() => handleCardClick(index)}
            >
              {card.content}
            </Card>
          ))}
        </div>

        {/* Instructions for new users */}
        <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-sm max-w-2xl mx-auto">
          <p className="text-gray-600 text-sm">
            💡 <strong>Tip:</strong> Click on any card to expand and learn more. Click again to collapse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;