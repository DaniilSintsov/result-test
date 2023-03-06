import React from 'react';

const Dots = ({ classes, color }) => {
  const dotClasses = `${color} h-[6px] w-[6px] rounded-[50%]`;
  const dotRows = [];
  const dots = [];

  for (let i = 0; i < 10; i++) {
    dots.push(<div className={dotClasses}></div>);
  }

  for (let i = 0; i < 10; i++) {
    dotRows.push(<div className="flex justify-between">{dots}</div>);
  }

  return (
    <div
      className={`${classes} flex flex-col justify-between absolute w-[130px] h-[130px]`}>
      {dotRows}
    </div>
  );
};

export default Dots;
