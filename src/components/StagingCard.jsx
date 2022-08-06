import React from 'react'

const StagingCard = ({image, text, classes}) => {
  return (
    <div className={`${classes} opacity-0 flex flex-col xl:gap-[30px] gap-[20px]`}>
      <img src={image}
           className="h-[52px] w-[52px] self-center"
           alt="firstIcon"/>
      <p className="text-center text-white xl:text-[22px] text-[16px] leading-[130%] font-medium">{text}</p>
    </div>
  )
}

export default StagingCard
