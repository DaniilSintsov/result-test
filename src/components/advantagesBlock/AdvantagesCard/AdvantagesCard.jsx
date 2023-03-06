import React from 'react';

const AdvantagesCard = ({ text, price }) => {
  return (
    <div className="grid grid-rows-1 grid-cols-[10px_auto_1fr] basis-[390px] gap-[10px] xl:gap-[17px]">
      <div className="self-center rounded-[50%] h-[10px] w-[10px] bg-[color:var(--light-gray)]"></div>
      <div className="self-center text-[40px] xl:text-[72px] font-semibold leading-[108.3333%] text-[color:var(--basic-orange)] tracking-[0.01em]">
        {price}
      </div>
      <p className="self-center text-[16px] leading-[150%] tracking-[0.005em] text-[color:var(--basic-black)]">
        {text}
      </p>
    </div>
  );
};

export default AdvantagesCard;
