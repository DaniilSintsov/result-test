import React from 'react'

const Container = ({children, classes}) => {
  return (
    <div className={`${classes} max-w-[1470px] mx-auto px-[15px] relative`}>
      {children}
    </div>
  )
}

export default Container
