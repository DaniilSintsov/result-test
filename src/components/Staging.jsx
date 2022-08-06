import React, {useEffect, useRef, useState} from 'react'
import {Controller, Scene} from 'react-scrollmagic-r18'
import Container from './Container'
import icon1 from '../assets/icons/staging/01.svg'
import icon2 from '../assets/icons/staging/02.svg'
import icon3 from '../assets/icons/staging/03.svg'
import icon4 from '../assets/icons/staging/04.svg'
import icon5 from '../assets/icons/staging/05.svg'
import icon6 from '../assets/icons/staging/06.svg'
import StagingCard from './StagingCard'

const Staging = () => {
  const titleRef = useRef(null)
  const stagingRef = useRef(null)
  const [titleOpacity, setTitleOpacity] = useState(null)
  const [togglerOpacity, setTogglerOpacity] = useState(null)
  const [cardOpacity1, setCardOpacity1] = useState(null)
  const [cardOpacity2, setCardOpacity2] = useState(null)
  const [cardOpacity3, setCardOpacity3] = useState(null)
  const [cardOpacity4, setCardOpacity4] = useState(null)
  const [cardOpacity5, setCardOpacity5] = useState(null)
  const [cardOpacity6, setCardOpacity6] = useState(null)
  const [blockOpacity1, setBlockOpacity1] = useState(null)
  const [blockOpacity2, setBlockOpacity2] = useState(null)

  useEffect(() => {
    const containerPos = stagingRef.current.getBoundingClientRect().top
    const containerHeight = stagingRef.current.getBoundingClientRect().height
    window.addEventListener('scroll', () => {
      setTitleOpacity(window.scrollY - containerHeight - 200 >= containerPos && window.scrollY - containerHeight - 3000 <= containerPos ? 'showCard' : 'hideCard')

      setTogglerOpacity(window.scrollY - containerHeight - 300 >= containerPos && window.scrollY - containerHeight - 2900 <= containerPos
        ? (window.scrollY - containerHeight - 300 >= containerPos && window.scrollY - containerHeight - 1500 <= containerPos
          ? 'show translate-x-[36%]'
          : 'show')
        : 'hide')

      setBlockOpacity1(window.scrollY - containerHeight >= containerPos && window.scrollY - containerHeight - 1500 <= containerPos)
      setCardOpacity1(window.scrollY - containerHeight - 500 >= containerPos && window.scrollY - containerHeight - 1200 <= containerPos ? 'showCard' : ('hideCard' && window.scrollY - containerHeight - 500 >= containerPos))
      setCardOpacity2(window.scrollY - containerHeight - 700 >= containerPos && window.scrollY - containerHeight - 1300 <= containerPos ? 'showCard' : ('hideCard' && window.scrollY - containerHeight - 700 >= containerPos))
      setCardOpacity3(window.scrollY - containerHeight - 900 >= containerPos && window.scrollY - containerHeight - 1400 <= containerPos ? 'showCard' : ('hideCard' && window.scrollY - containerHeight - 900 >= containerPos))

      setBlockOpacity2(window.scrollY - containerHeight - 1500 >= containerPos && window.scrollY - containerHeight - 3100 <= containerPos)
      setCardOpacity4(window.scrollY - containerHeight - 1500 >= containerPos && window.scrollY - containerHeight - 2200 <= containerPos ? 'showCard' : ('hideCard' && window.scrollY - containerHeight - 1500 >= containerPos))
      setCardOpacity5(window.scrollY - containerHeight - 1700 >= containerPos && window.scrollY - containerHeight - 2400 <= containerPos ? 'showCard' : ('hideCard' && window.scrollY - containerHeight - 1700 >= containerPos))
      setCardOpacity6(window.scrollY - containerHeight - 1900 >= containerPos && window.scrollY - containerHeight - 2600 <= containerPos ? 'showCard' : ('hideCard' && window.scrollY - containerHeight - 1900 >= containerPos))
    })
  }, [])

  return (
    <Controller>
      <Scene duration={4000}
             pin
             triggerHook={0.05}>
        <div ref={stagingRef}
             className="h-[90vh]">
          <div className="h-full mx-auto max-w-[1860px] rounded-[20px] bg-[#0F1214]">
            <Container classes="h-full">
              <div className="h-full py-[20px] xl:py-[110px] flex flex-col justify-center">
                <h1 ref={titleRef}
                    className={`${titleOpacity} text-center text-white text-[30px] xl:text-[54px] leading-[130%] mb-[30px] xl:mb-[40px] font-bold`}>
                  Что тебе даст прохождение курса?</h1>
                <div className={`${togglerOpacity} gap-[20px] xl:gap-[40px] mb-[30px] xl:mb-[100px] self-center grid grid-cols-[1fr_auto_1fr] grid-rows-1 max-w-[760px] uppercase justify-center text-[16px] xl:text-[24px] font-semibold leading-[130%]`}>
                  <p className={`${blockOpacity1 ? 'text-white' : 'text-[#878889]'}`}>SKILLS UPGRADE</p>
                  <p className={`${blockOpacity2 ? 'text-white' : 'text-[#878889]'}`}>STRONG HARD SKILLS</p>
                </div>
                {blockOpacity1 && <div className="grid grid-cols-3 grid-rows-1 gap-[50px]">
                  <StagingCard classes={cardOpacity1}
                               image={icon1}
                               text="Научишься понимать терминологию, документацию и писать код на уровне востребованных разработчиков"/>
                  <StagingCard classes={cardOpacity2}
                               image={icon2}
                               text="твои знания превратятся в систему, ты не просто изучишь технологии, но и поймешь как развиваться дальше"/>
                  <StagingCard classes={cardOpacity3}
                               image={icon3}
                               text="Создашь Fullstack приложение, которое покажет что твои навыки выше чем у стандартного junior"/>
                </div>}
                {blockOpacity2 && <div className="grid grid-cols-3 grid-rows-1 gap-[50px]">
                  <StagingCard classes={cardOpacity4}
                               image={icon4}
                               text="Создашь с помощью фреймворка React визуальную часть приложения: элементы, анимация"/>
                  <StagingCard classes={cardOpacity5}
                               image={icon5}
                               text="Изучишь NodeJS на достаточном уровне чтобы связывать frontend и backend"/>
                  <StagingCard classes={cardOpacity6}
                               image={icon6}
                               text="Овладеешь базой, от которого можно отталкиваться и учить любую технологию на JavaScript"/>
                </div>}
              </div>
            </Container>
          </div>
        </div>
      </Scene>
    </Controller>
  )
}

export default Staging
