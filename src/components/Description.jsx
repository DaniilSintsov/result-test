import React from 'react'
import Container from './Container'
import descriptionTitle from '../assets/icons/description-title.svg'
import descriptionImage from '../assets/images/description-image.png'
import DescriptionInformation from './DescriptionInformation'

const Description = () => {
  return (
    <div className="mb-[90px]">
      <Container>
        <div className="flex justify-center gap-[30px] mb-[20px] xl:mb-[40px]">
          <img src={descriptionTitle}
               className="h-[26px] w-[26px] self-center"
               alt="question"/>
          <h2 className="xl:text-[54px] text-[30px] text-[#0F1214] leading-[130%] font-bold self-center">Как именно ты
            станешь
            разработчиком</h2>
        </div>
        <div className="flex justify-center xl:mb-[60px] mb-[30px]">
          <p className="basis-[970px] text-[18px] xl:text-[24px] leading-[140%] tracking-[0.005em] text-[#0F1214] text-center">На
            курсе ты не просто изучаешь теоретический материал. в
            процессе изучения ты повторяете за действующим разработчиком, после чего <span className="font-semibold">закрепляешь знания на заданиях и
          проектах.</span></p>
        </div>
        <div className="flex justify-center">
          <div className="flex  gap-[15px] flex-wrap justify-center relative lg:basis-[55.6%] basis-[100%]">
            <DescriptionInformation title="2 Командных проекта"
                                    classes="max-w-[330px] top-0 left-0 lg:translate-x-[-50%] lg:translate-y-[20%] 2xl:translate-x-[-90%] 2xl:translate-y-[35%]"
                                    text="Симуляция комерческого проекта -
                получаете ТЗ и организовываете командную разработку. Прокачивая навыки
                для будущей работы.">
              <span className="inline-block text-[14px] leading-[170%] text-[#0F1214] font-semibold">Проекты на тему:</span>
              <ul>
                <li className="before:content-['-'] before:mr-[5px] inline-block text-[14px] leading-[170%] text-[#0F1214]">JavaScript
                  плагин "Контекстное меню"
                </li>
                <li className="before:content-['-'] before:mr-[5px] inline-block text-[14px] leading-[170%] text-[#0F1214]">Сайт
                  на React, презентующий команду участников
                </li>
              </ul>
            </DescriptionInformation>
            <DescriptionInformation title="Индивидуальные проекты"
                                    classes="max-w-[390px] bottom-0 right-0 lg:translate-x-[50%] 2xl:translate-x-[75%] 2xl:translate-y-[3%]"
                                    text="Чтобы свободно чуствовать себя на позиции junior необходим опыт разработки. Вы создадите 3 проекта изучая материал от простого к сложному:">
              <ol>
                <li className="inline-block text-[14px] leading-[170%] text-[#0F1214]">1. Проект корзина с товарами для
                  интернет-магазина
                </li>
                <li className="inline-block text-[14px] leading-[170%] text-[#0F1214]">2. Социальная сеть для поиска и
                  знакомств
                </li>
                <li className="inline-block text-[14px] leading-[170%] text-[#0F1214]">3. Дипломный проект на выбранную
                  вами тему:
                </li>
                <ul>
                  <li className="before:content-['-'] before:mr-[5px] before:ml-[10px] inline-block text-[14px] leading-[170%] text-[#0F1214]">
                    Учет доходов и рассходов
                  </li>
                  <li className="before:content-['-'] before:mr-[5px] before:ml-[10px] inline-block text-[14px] leading-[170%] text-[#0F1214]">
                    Бронирование отелей
                  </li>
                  <li className="before:content-['-'] before:mr-[5px] before:ml-[10px] inline-block text-[14px] leading-[170%] text-[#0F1214]">
                    Интернет-магазин или схожий по сложности проект, которым вы выберети и утвердите с куратором
                  </li>
                </ul>
              </ol>
            </DescriptionInformation>
            <img src={descriptionImage}
                 className="max-w-[100%]"
                 alt="description"/>
          </div>
        </div>
        <p className="text-center text-[#0F1214] text-[13px] leading-[150%]">Проекты учеников</p>
      </Container>
    </div>
  )
}

export default Description
