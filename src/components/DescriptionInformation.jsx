import React from 'react'

const DescriptionInformation = ({classes, title, text, children}) => {
  return (
    <div style={{
      boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.06), 0px 24px 160px rgba(0, 0, 0, 0.02)',
      border: '1px solid #947EFF'
    }}
         className={`${classes} lg:absolute bg-white rounded-[14px] px-[20px] py-[24px]`}>
      <span className="text-[14px] text-[#9088FF] leading-[130%] font-semibold uppercase inline-block mb-[17px]">{title}</span>
      <p className="text-[#0F1214] text-[14px] leading-[170%]  mb-[16px]">{text}</p>
      {children}
    </div>
  )
}

export default DescriptionInformation
