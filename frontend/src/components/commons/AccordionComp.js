import React, { memo, useState } from 'react';

const Accordion = memo(({ children, indexCount, firstName, lastName }) => {
  const [isOpen, setIsOpen] = useState(false);  

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-green-500 p-4 rounded-lg">
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleAccordion}>
        <span className="text-white text-lg font-bold">Applicant Name: {firstName?.toUpperCase()} {lastName?.toUpperCase()} </span>
        <span className="text-white text-xl font-bold">
          {
            isOpen ? <i className="fa-solid fa-minus"></i> : <i className="text-lg fa-solid fa-plus"></i>
          }

        </span>
      </div>
      {isOpen && (
        <div className='bg-green-50 rounded-md'>
          {children}
        </div>
      )}
    </div>
  );
});

export default Accordion;