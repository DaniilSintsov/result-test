import React from 'react';
import Dots from '../../decorations/Dots/Dots';
import TextOffer from '../TextOffer/TextOffer';
import ImageOffer from '../ImageOffer/ImageOffer';

const Offer = () => {
  return (
    <div className="relative">
      <Dots
        classes="bottom-[-46px] left-[114px]"
        color="bg-[color:var(--light-gray)]"
      />
      <div className="ml-[20px] pl-[15px] 2xl:ml-[8.3333%] bg-[color:var(--main-blue)] mb-[120px] sm:mb-[100px] xl:mb-[80px] 2xl:pl-[4.9479%] rounded-tl-[30px] rounded-bl-[30px] relative">
        <div className="flex-col flex lg:flex-row">
          <TextOffer />
          <ImageOffer />
        </div>
      </div>
    </div>
  );
};

export default Offer;
