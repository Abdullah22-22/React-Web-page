import React from 'react';
import './cv.css'; // Ensure this is imported to apply the styles

const Cv = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>Abdullah Al-Tameemi</h1>
        <p>Vuossari / Helsinki</p>
        <p>Date of Birth: 07.01.1998</p>
      </header>

      <section className="cv-section">
        <h2>Education</h2>
        <ul>
          <li>Primary school (Basic Education) - In my country, 2014</li>
          <li>Primary school (Adult High School) - Eiran Aikuislukio, Graduated 07.12.2022</li>
          <li>Vocational Qualification in Information and Communications Technology (Tieto- ja viestintätekniikan perustutkinto) - Varia, Graduated 15.12.2023</li>
          <li>Programming Studies - Varia, Expected Graduation 25.05.2025</li>
        </ul>
      </section>
      
      <section className="cv-section">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>Internship, S-Market</strong>
            <p>27.12.2021 - 07.2022</p>
            <ul>
              <li>Completed 100 hours of training</li>
              <li>Assisted with store operations, stocking, and customer service</li>
            </ul>
          </li>
          <li>
            <strong>Restaurant Work, Pizza Industry</strong>
            <ul>
              <li>Gained experience in the food service industry</li>
              <li>Assisted with food preparation, customer service, and kitchen duties</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Language Skills</h2>
        <ul>
          <li>Arabic: Native</li>
          <li>Finnish: Good</li>
          <li>English: Good</li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>IT Skills</h2>
        <ul>
          <li>Proficient in Microsoft Office (Word, Excel, PowerPoint)</li>
          <li>Proficient in Google applications (Docs, Sheets, Slides)</li>
          <li>Operating System Installation</li>
          <li>Programming Languages: HTML, CSS, JavaScript, React, Python</li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Hobbies</h2>
        <ul>
          <li>Gym / Fitness</li>
        </ul>
      </section>
    </div>
  );
};

export default Cv;
