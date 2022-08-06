import React from 'react'

const Button = ({children}) => {
  return (
    <a className="px-[20px] 2xl:px-[40px] py-[15px] 2xl:py-[26px]  inline-block rounded-[50px] bg-[#ED7138] text-[16px] 2xl:text-[18px] text-white leading-[110%] hover:bg-[#dc6a34] duration-300"
       href="/">
      {children}
    </a>
  )
}

export default Button
