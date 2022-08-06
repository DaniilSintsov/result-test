import React from 'react'
import Container from './Container'

const Advantages = () => {
  return (
    <div className="mb-[70px] 2xl:mb-[140px]">
      <Container classes="flex flex-wrap justify-center 2xl:gap-[60px] gap-[30px]">
        <div className="flex gap-[10px] xl:gap-[18px] justify-center">
          <div className="self-center rounded-[50%] h-[10px] basis-[10px] bg-[#E0E6E9]"></div>
          <div className="self-center text-[40px] xl:text-[72px] font-semibold leading-[108.3333%] text-[#ED7138] tracking-[0.01em]">293</div>
          <div className="self-center text-[16px] leading-[150%] tracking-[0.005em] text-[#0F1214]">
            HD видеоурока<br/> длительностью 3 - 15 минут
          </div>
        </div>
        <div className="flex gap-[10px] xl:gap-[18px] justify-center">
          <div className="self-center rounded-[50%] h-[10px] basis-[10px] bg-[#E0E6E9]"></div>
          <div className="self-center text-[40px] xl:text-[72px] font-semibold leading-[108.3333%] text-[#ED7138] tracking-[0.01em]">6</div>
          <div className="self-center text-[16px] leading-[150%] tracking-[0.005em] text-[#0F1214]">
            Мероприятий на курсе (Хакатоны,<br/> мастер классы, разборы и т.д.)
          </div>
        </div>
        <div className="flex gap-[10px] xl:gap-[18px] justify-center">
          <div className="self-center rounded-[50%] h-[10px] basis-[10px] bg-[#E0E6E9]"></div>
          <div className="self-center text-[40px] xl:text-[72px] font-semibold leading-[108.3333%] text-[#ED7138] tracking-[0.01em]">193</div>
          <div className="self-center text-[16px] leading-[150%] tracking-[0.005em] text-[#0F1214]">
            заданий и тестов<br/> для закрепления
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Advantages
