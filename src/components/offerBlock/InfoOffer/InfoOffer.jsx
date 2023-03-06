import React from 'react';
import offerInfo from '../../../assets/icons/offer-info.svg';

const InfoOffer = () => {
  return (
    <>
      <div className="absolute top-[78%] lg:top-[80.3661%] left-0 translate-x-[-50%] translate-y-[-50%] z-[1] h-[40px] w-[40px] minw880:h-[76px] minw880:w-[76px] 2xl:rounded-[24px] rounded-[15px] bg-[color:var(--lightest-dark-blue)] flex justify-center">
        <img
          src={offerInfo}
          className="self-center minw880:h-[38px] minw880:w-[38px] h-[20px] w-[20px]"
          alt="info"
        />
      </div>
      <div
        style={{
          boxShadow:
            '0px 5px 50px rgba(0, 0, 0, 0.07), 0px 24px 160px rgba(0, 0, 0, 0.05)'
        }}
        className="absolute top-[78%] lg:top-[80.3661%] left-[-30px] minw880:left-[-13.0208%] pt-[25px] pb-[13px] px-[13px] minw880:px-[24px] minw880:pt-[40px] minw880:pb-[30px] bg-white rounded-[24px]">
        <p className="max-w-[350px] text-[16px] tracking-[0.005em] sm:leading-[150%] leading-[120%] text-[color:var(--basic-gray)]">
          <span className="text-[color:var(--basic-orange)]">Обучение </span>
          <span className="text-[color:var(--basic-black)]">для тех,</span> кто
          готов учиться 10 часов в неделю
          <span className="text-[color:var(--basic-black)]">, </span>
          <span className="text-[color:var(--basic-orange)]">
            чтобы получить результат
          </span>
          <span className="text-[color:var(--basic-black)]">. </span>
          <span className="text-[color:var(--basic-black)]">Мы даем</span>{' '}
          необходимые навыки
          <span className="text-[color:var(--basic-black)]">
            {' '}
            на продвинутом уровне,{' '}
          </span>
          убирая все лишнее
        </p>
      </div>
    </>
  );
};

export default InfoOffer;
