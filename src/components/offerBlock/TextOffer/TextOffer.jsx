import React from 'react';
import Circles from '../../decorations/Circles/Circles';
import Button from '../../forms/Button/Button';

const TextOffer = () => {
  return (
    <div className="overflow-hidden basis-[53.8738%] py-[15px] lg:py-[67px] flex flex-col justify-between gap-[20px] lg:gap-[60px] pr-[20px] relative">
      <div className="z-[1]">
        <h1 className="text-white xl:text-[54px] text-[24px] leading-[130%] font-semibold tracking-[0.01em] xl:mb-[40px] mb-[13px]">
          Профессия
          <br />
          Frontend — разработчик
        </h1>
        <p className="text-white xl:text-[30px] text-[19px] leading-[140%] tracking-[0.005em] font-semibold xl:mb-[25px] mb-[10px] max-w-[750px]">
          Стань с нуля продвинутым Junior разработчиком за 7 месяцев с знанием
          технологий больше, чем у других кандидатов
        </p>
        <p className="text-white tracking-[0.005em] leading-[150%] text-[16px] xl:text-[18px] max-w-[680px]">
          Начиная с основ изучишь JavaScript, разберешься с самыми популярными
          технологиями, научишься писать Frontend на фреймворке и связывать его
          с Backend. Навыки после курса оцениваются от 100 т.р.
        </p>
      </div>
      <div className="z-[1]">
        <Button>Задать вопрос об обучении</Button>
      </div>
      <Circles
        classes="bottom-[-30px] left-[60px]"
        color="bg-[color:var(--dark-blue)]"
      />
    </div>
  );
};

export default TextOffer;
