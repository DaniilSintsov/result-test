import React from 'react';
import Dots from '../../decorations/Dots/Dots';
import offerImage from '../../../assets/images/offer-image.png';
import InfoOffer from '../InfoOffer/InfoOffer';

const ImageOffer = () => {
  return (
    <div className="self-end">
      <div className="relative">
        <Dots
          classes="left-[-10px] top-[-46px] minw880:left-[-46px]"
          color="bg-[color:var(--dark-purple)]"
        />
        <img
          src={offerImage}
          className="max-w-[100%] relative"
          alt="offer"
        />
        <InfoOffer />
      </div>
    </div>
  );
};

export default ImageOffer;
