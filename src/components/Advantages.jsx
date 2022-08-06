import React from 'react'
import AdvantagesCard from './AdvantagesCard'

const Advantages = () => {
  return (
    <div className="mb-[70px] 2xl:mb-[140px]">
      <div className="mx-auto max-w-[1260px] px-[15px]">
        <div className="flex flex-wrap justify-center gap-[20px]">
          <AdvantagesCard text="HD видеоурока длительностью 3 - 15 минут" price="293" />
          <AdvantagesCard text="Мероприятий на курсе (Хакатоны, мастер классы, разборы и т.д.)" price="6" />
          <AdvantagesCard text="заданий и тестов для закрепления" price="193" />
        </div>
      </div>
    </div>
  )
}

export default Advantages
