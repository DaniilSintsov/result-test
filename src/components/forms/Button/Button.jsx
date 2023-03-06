import React from 'react';

const Button = ({ children }) => {
  return (
    <a
      className="px-[20px] 2xl:px-[40px] py-[15px] 2xl:py-[26px]  inline-block rounded-[50px] bg-[color:var(--basic-orange)] text-[16px] 2xl:text-[18px] text-white leading-[110%] hover:bg-[color:var(--basic-orange-hover)] duration-300"
      href="/">
      {children}
    </a>
  );
};

export default Button;
