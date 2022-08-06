import React from 'react'
import offerImage from '../assets/images/offer-image.png'
import Button from './ui/Button'
import Dots from './decorations/Dots'
import Circles from './decorations/Circles'
import offerInfo from '../assets/icons/offer-info.svg'

const Offer = () => {
  return (
    <div className="relative">
      <Dots classes="bottom-[-45px] left-[110px]"
            color="bg-[#E9E6F0]"/>
      <div className="ml-[20px] pl-[15px] 2xl:ml-[8.333%] bg-[#7B72FE] mb-[80px] 2xl:pl-[4.5454%] rounded-tl-[30px] rounded-bl-[30px] relative">
        <div className="flex-col flex lg:flex-row">
          <div className="overflow-hidden basis-[56.3637%] py-[15px] lg:py-[67px] flex flex-col justify-between gap-[20px] lg:gap-[60px] pr-[20px] relative">
            <div className="z-[1]">
              <h1 className="text-white xl:text-[54px] text-[24px] leading-[130%] font-semibold tracking-[0.01em] xl:mb-[40px] mb-[13px]">Профессия<br/>
                Frontend —
                разработчик</h1>
              <p className="text-white xl:text-[30px] text-[19px] leading-[140%] tracking-[0.005em] font-semibold xl:mb-[25px] mb-[10px] max-w-[750px]">Стань
                с нуля продвинутым Junior разработчиком за 7 месяцев с знанием технологий
                больше, чем у других
                кандидатов</p>
              <p className="text-white tracking-[0.005em] leading-[150%] text-[16px] xl:text-[18px] max-w-[680px]">Начиная
                с основ
                изучишь
                JavaScript, разберешься с самыми популярными технологиями,
                научишься писать
                Frontend на фреймворке и связывать его с Backend. Навыки после курса оцениваются от 100 т.р.</p>
            </div>
            <div className="z-[1]">
              <Button>Задать вопрос об обучении</Button>
            </div>
            <Circles classes="bottom-[-30px] left-[60px]"
                     color="bg-[#746BF4]"/>
          </div>
          <div className="sm:basis-[43.6363%] self-end">
            <div className="relative">
              <Dots classes="top-[-45px] left-[-45px]"
                    color="bg-[#E9E6F0]/20"/>
              <img src={offerImage}
                   className="max-w-[100%] relative"
                   alt="offer"/>
              <div style={{boxShadow: '0px 5px 50px rgba(0, 0, 0, 0.07), 0px 24px 160px rgba(0, 0, 0, 0.05)'}}
                   className="absolute left-[-30px] 2xl:left-[-12%] bottom-[-64px] p-[13px] sm:px-[24px] sm:pt-[40px] sm:pb-[30px] bg-white rounded-[24px]">
                <div className="absolute top-0 left-[20%] translate-x-[-50%] translate-y-[-66%] h-[40px] w-[40px] sm:h-[76px] sm:w-[76px] 2xl:rounded-[24px] rounded-[15px] bg-[#7F76FF] flex justify-center">
                  <img src={offerInfo}
                       className="self-center sm:h-[38px] sm:w-[38px] h-[20px] w-[20px]"
                       alt="info"/>
                </div>
                <p className="max-w-[350px] text-[16px] tracking-[0.005em] sm:leading-[150%] leading-[120%] text-[#979EA2]">
                  <span className="text-[#EB7139]">Обучение</span> <span className="text-[#0F1214]">для тех,</span> кто готов учиться 10 часов в неделю<span className="text-[#0F1214]">,</span> <span className="text-[#EB7139]">чтобы получить результат</span><span className="text-[#0F1214]">.</span> <span className="text-[#0F1214]">Мы даем</span> необходимые навыки <span className="text-[#0F1214]">на продвинутом уровне,</span> убирая все лишнее</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
