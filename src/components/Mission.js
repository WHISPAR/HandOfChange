import React from 'react';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';

const Section = ({ title, image, children, bg = 'bg-blue-50' }) => (
  <section className={`${bg} p-6 rounded-xl shadow-md my-8 mx-auto max-w-6xl`}>
    <h2 className="text-3xl font-extrabold mb-6 text-blue-800 text-center">{title}</h2>
    <div className="flex flex-col md:flex-row-reverse items-start gap-6">
      {image && (
        <div className="md:w-1/3 w-full">
          <img src={image} alt={`${title} visual`} className="w-full h-auto rounded-md shadow-md" />
        </div>
      )}
      <div className="md:w-2/3 w-full text-gray-800">{children}</div>
    </div>
  </section>
);

const Mission = () => {
  return (
    <>
      <Section title="Our Mission" bg="bg-blue-100" image={img1}>
        <p className="text-lg leading-relaxed">
          Fully recognize the involvement of all disadvantaged poor groups across the communities
          to ensure better and more improved social and economic well-being through various
          community projects.
        </p>
      </Section>

      <Section title="Vision" bg="bg-yellow-100" image={img2}>
        <p className="text-lg leading-relaxed">
          To facilitate charity and emergency relief support to needy children, women, elderly,
          widows/widowers, and disabled persons for an empowered community that can fend for
          themselves in society.
        </p>
      </Section>

      <Section title="Objectives" bg="bg-blue-50" image={img4}>
        <ol className="list-decimal space-y-3 pl-6">
          <li>To build capacity of the poor and disadvantaged in areas of psychosocial support, health, human rights, income generation, and agriculture.</li>
          <li>To mobilize resources for implementing social self-help programs for PLHIV members and youth.</li>
          <li>To enhance documentation, reporting, and monitoring of community activities.</li>
        </ol>
      </Section>

      <Section title="Core Values" bg="bg-green-100" image={img5}>
        <h3 className="text-lg font-semibold mb-4">Our work is guided by the following values:</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Mutual respect:</strong> Everyone deserves respect, regardless of condition.</li>
          <li><strong>Commitment and participation:</strong> We use inclusive, participatory methods.</li>
          <li><strong>Humility:</strong> Every person has value in building better lives.</li>
          <li><strong>Solidarity:</strong> We stand with the vulnerable to champion their causes.</li>
          <li><strong>Transparency and accountability:</strong> We operate openly and accountably to all.</li>
          <li><strong>Preferential option for the poor:</strong> We prioritize the disadvantaged in all we do.</li>
        </ul>
      </Section>

      <Section title="Thematic Areas" bg="bg-purple-100" image={img4}>
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
          <li><strong>Education:</strong> Supporting boys’ and girls’ education and retention.</li>
        </ol>
      </Section>

      <Section title="Organizational Strengths" bg="bg-indigo-100" image={img2}>
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
      </Section>
    </>
  );
};

export default Mission;
