import React from 'react';

const DescriptionUnorderedListItem = ({ children, classes = '' }) => {
  return (
    <li
      className={`${classes} before:content-['-'] before:mr-[5px] inline-block text-[14px] leading-[170%] text-[color:var(--basic-black)]`}>
      {children}
    </li>
  );
};

export default DescriptionUnorderedListItem;
