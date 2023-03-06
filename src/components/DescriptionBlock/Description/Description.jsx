import React from 'react';
import descriptionTitle from '../../../assets/icons/description-title.svg';
import descriptionImage from '../../../assets/images/description-image.png';
import DescriptionInformation from '../DescriptionInformation/DescriptionInformation';
import Container from '../../Container/Container';
import DescriptionUnorderedListItem from '../DescriptionUnorderedListItem/DescriptionUnorderedListItem';
import DescriptionOrderedListItem from '../DescriptionOrderedListItem/DescriptionOrderedListItem';

const Description = () => {
  return (
    <div className="mb-[90px]">
      <Container>
        <div className="flex justify-center gap-[30px] mb-[20px] xl:mb-[40px]">
          <img
            src={descriptionTitle}
            className="h-[26px] w-[26px] self-center"
            alt="question"
          />
          <h2 className="xl:text-[54px] text-[30px] text-[color:var(--basic-black)] leading-[130%] font-bold self-center">
            Как именно ты станешь разработчиком
          </h2>
        </div>
        <div className="flex justify-center xl:mb-[60px] mb-[30px]">
          <p className="basis-[970px] text-[18px] xl:text-[24px] leading-[140%] tracking-[0.005em] text-[color:var(--basic-black)] text-center">
            На курсе ты не просто изучаешь теоретический материал. в процессе
            изучения ты повторяете за действующим разработчиком, после чего{' '}
            <span className="font-semibold">
              закрепляешь знания на заданиях и проектах.
            </span>
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-[15px] flex-wrap justify-center relative lg:basis-[55.6%] basis-[100%]">
            <DescriptionInformation
              title="2 Командных проекта"
              classes="max-w-[330px] 2xl:top-[18.1229%] 2xl:left-[-37.4689%] top-0 left-0 lg:translate-x-[-50%] lg:translate-y-[20%] 2xl:translate-x-0 2xl:translate-y-0"
              text="Симуляция комерческого проекта -
                получаете ТЗ и организовываете командную разработку. Прокачивая навыки
                для будущей работы.">
              <span className="inline-block text-[14px] leading-[170%] text-[color:var(--basic-black)] font-semibold">
                Проекты на тему:
              </span>
              <ul>
                <DescriptionUnorderedListItem>
                  JavaScript плагин "Контекстное меню"
                </DescriptionUnorderedListItem>
                <DescriptionUnorderedListItem>
                  Сайт на React, презентующий команду участников
                </DescriptionUnorderedListItem>
              </ul>
            </DescriptionInformation>
            <DescriptionInformation
              title="Индивидуальные проекты"
              classes="max-w-[390px] 2xl:bottom-[-2.1035%] 2xl:right-[-37.4689%] bottom-0 right-0 lg:translate-x-[50%] 2xl:translate-x-0"
              text="Чтобы свободно чуствовать себя на позиции junior необходим опыт разработки. Вы создадите 3 проекта изучая материал от простого к сложному:">
              <ol>
                <DescriptionOrderedListItem>
                  1. Проект корзина с товарами для интернет-магазина
                </DescriptionOrderedListItem>
                <DescriptionOrderedListItem>
                  2. Социальная сеть для поиска и знакомств
                </DescriptionOrderedListItem>
                <DescriptionOrderedListItem>
                  3. Дипломный проект на выбранную вами тему:
                </DescriptionOrderedListItem>
                <ul>
                  <DescriptionUnorderedListItem classes={'before:ml-[10px]'}>
                    Учет доходов и рассходов
                  </DescriptionUnorderedListItem>
                  <DescriptionUnorderedListItem classes={'before:ml-[10px]'}>
                    Бронирование отелей
                  </DescriptionUnorderedListItem>
                  <DescriptionUnorderedListItem classes={'before:ml-[10px]'}>
                    Интернет-магазин или схожий по сложности проект, которым вы
                    выберети и утвердите с куратором
                  </DescriptionUnorderedListItem>
                </ul>
              </ol>
            </DescriptionInformation>
            <img
              src={descriptionImage}
              className="max-w-[100%]"
              alt="description"
            />
          </div>
        </div>
        <p className="text-center text-[color:var(--basic-black)] text-[13px] leading-[150%]">
          Проекты учеников
        </p>
      </Container>
    </div>
  );
};

export default Description;
