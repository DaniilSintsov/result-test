import React from 'react';

const DescriptionOrderedListItem = ({ children }) => {
  return (
    <li className="inline-block text-[14px] leading-[170%] text-[color:var(--basic-black)]">
      {children}
    </li>
  );
};

export default DescriptionOrderedListItem;
