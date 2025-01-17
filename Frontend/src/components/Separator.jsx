import React from 'react';
import './Separator.css'; // Import the CSS for styling

const Separator = ({ title }) => {
  return (
    <div className="separator">
      <span>{title}</span>
    </div>
  );
};

export default Separator; 