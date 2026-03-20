function openModal(pdfUrl) {

  // Show PDF (your original logic)
  document.getElementById('pdfFrame').src =
    pdfUrl + "#toolbar=0&navpanes=0&view=FitH"
  document.getElementById('pdfModal').style.display = "flex";
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  // Skills section
  const skillsContainer = document.getElementById("cert-skills");
  let skills = "";

  if (pdfUrl.includes("problem")) {
    skills = `
      <h3>Skills I have learnt:</h3>
      <ul>
        <li>Algorithmic thinking</li>
        <li>Logical problem solving</li>
        <li>Arrays and string manipulation</li>
      </ul>
    `;
  }

  else if (pdfUrl.includes("python")) {
    skills = `
      <h3>Skills I have learnt:</h3>
      <ul>
        <li>Python syntax and data types</li>
        <li>Functions and loops</li>
        <li>Dictionaries and lists</li>
        <li>Beginner Object-Oriented Programming (OOP)</li>
      </ul>
    `;
  }

  else if (pdfUrl.includes("css")) {
    skills = `
      <h3>Skills I have learnt:</h3>
      <ul>
        <li>Class selectors and box model</li>
        <li>Flexbox layout</li>
        <li>Responsive Design</li>
        <li>Styling and positioning</li>
      </ul>
    `;
  }

  else if (pdfUrl.includes("sql")) {
    skills = `
      <h3>Skills I have learnt:</h3>
      <ul>
        <li>SELECT queries</li>
        <li>JOIN operations</li>
        <li>GROUP BY and aggregation</li>
        <li>Basic database structure</li>
      </ul>
    `;
  }

  else if (pdfUrl.includes("javascript")) {
    skills = `
      <h3>Skills I have learnt:</h3>
      <ul>
        <li>DOM manipulation</li>
        <li>Event handling</li>
        <li>Arrays and objects</li>
        <li>Functions and logic control</li>
      </ul>
    `;
  }

  else if (pdfUrl.includes("nodejs")) {
    skills = `
      <h3>Skills I have learnt:</h3>
      <ul>
        <li>Server creation</li>
        <li>Routing structures</li>
        <li>API handling</li>
        <li>Backend logic</li>
      </ul>
    `;
  }

  else if (pdfUrl.includes("react")) {
    skills = `
      <h3>Skills I have learnt:</h3>
      <ul>
        <li>Component-based structure</li>
        <li>Props and states</li>
        <li>useState hook</li>
        <li>Dynamic UI rendering</li>
      </ul>
    `;
  }

  else if (pdfUrl.includes("uxf")) {
    skills = `
      <h3>Skills I have learnt:</h3>
      <ul>
        <li>Component-based structure</li>
        <li>Props and states</li>
        <li>useState hook</li>
        <li>Dynamic UI rendering</li>
      </ul>
    `;
  }

  else if (pdfUrl.includes("uxp")) {
    skills = `
      <h3>Skills I have learnt:</h3>
      <ul>
        <li>Component-based structure</li>
        <li>Props and states</li>
        <li>useState hook</li>
        <li>Dynamic UI rendering</li>
      </ul>
    `;
  }

  else if (pdfUrl.includes("figma1")) {
    skills = `
      <h3>Skills I have learnt:</h3>
      <ul>
        <li>Component-based structure</li>
        <li>Props and states</li>
        <li>useState hook</li>
        <li>Dynamic UI rendering</li>
      </ul>
    `;
  }

  else if (pdfUrl.includes("figma2")) {
    skills = `
      <h3>Skills I have learnt:</h3>
      <ul>
        <li>Component-based structure</li>
        <li>Props and states</li>
        <li>useState hook</li>
        <li>Dynamic UI rendering</li>
      </ul>
    `;
  }
  skillsContainer.innerHTML = skills;
}

function closeModal() {
  document.getElementById('pdfModal').style.display = "none";
  document.getElementById('pdfFrame').src = ""; 
  document.getElementById('cert-skills').innerHTML = "";
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
}
