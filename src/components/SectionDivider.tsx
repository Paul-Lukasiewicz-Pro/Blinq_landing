import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-4/5 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
  );
};

export default SectionDivider;