import React, { useContext, useState } from 'react';
import jsPDF from 'jspdf';
import img from '../assets/Others.png';
import { useParams, useNavigate } from 'react-router-dom';
import { NameicContext } from '../Context/Context';
import { useEffect } from 'react';

const capitalizeFirstLetter = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
const generateCertificate = (name,ic) => {
  const doc = new jsPDF();
  
  // Add background image
  doc.addImage(img, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
  
  // Add recipient name with capitalized first letter
  const capitalizedFirstName = capitalizeFirstLetter(name);
  doc.setFontSize(25);
  doc.setFont('helvetica');
  doc.text(`${capitalizedFirstName} \n ${ic}`, 125, 99, { align: 'center' });
  
  // Save the PDF
  doc.save(`${capitalizedFirstName}.pdf`);
};

function CertificateforOthers() {
  const { users} = useContext(NameicContext);
  
  return (
    <div className="certificate-container">
      <h1 className="certificate-heading">Hey {users.name} </h1>
      <p className="certificate-message">You can download your certificate by clicking the button below:</p>
      <div className="button-container">
        <button className="generate-button" onClick={() => generateCertificate(users.name,users.ic)}>
          Generate Certificate
        </button>
      </div>
    </div>
  );
}

export default CertificateforOthers;