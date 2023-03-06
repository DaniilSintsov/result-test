import React from 'react'

const Circles = ({classes, color}) => {
  const circleClasses = `${color} h-[150px] w-[150px] xl:h-[340px] xl:w-[340px] rounded-[50%]`

  return (
    <div className={`${classes} absolute flex gap-[10px]`}>
      <div className={circleClasses}></div>
      <div className={circleClasses}></div>
      <div className={circleClasses}></div>
    </div>
  )
}

export default Circles
