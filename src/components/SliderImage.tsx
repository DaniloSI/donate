/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

import { css } from '@emotion/css';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { IconButton } from '@mui/material';

type Props = {
  images: string[];
};

const SliderImage: React.FC<Props> = ({ images }) => {
  const [active, setActive] = useState(0);
  const contentHeight = 500;

  const handleNext = () => {
    setActive((p) => (p + 1) % images.length);
  };

  const handlePrev = () => {
    setActive((p) => (p === 0 ? images.length - 1 : (p - 1) % images.length));
  };

  return (
    <div
      className={css`
        display: flex;
        width: 100%;
        justify-content: flex-start;
        align-items: center;
        background-color: #eee;
        border-radius: 8px;
        padding: 0px 16px;
      `}
    >
      <IconButton color="primary" size="large" aria-label="Previous Image" onClick={handlePrev}>
        <ArrowBackIos fontSize="large" />
      </IconButton>
      <div
        className={css`
          width: 100%;
          overflow-x: hidden;
          margin: 0px 12px;
        `}
      >
        <div
          className={css`
            width: ${100 * images.length}%;
            display: flex;
            transform: translateX(-${(100 / images.length) * active}%);
            transition: transform 1s;
          `}
        >
          {images.map((image) => (
            <div
              key={image}
              className={css`
                width: ${100 / images.length}%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 32px;
                color: white;
              `}
            >
              <img
                src={image}
                alt="Item"
                className={css`
                  object-fit: contain;
                  width: 100%;
                  height: ${contentHeight}px;
                `}
              />
            </div>
          ))}
        </div>
      </div>
      <IconButton color="primary" size="large" aria-label="Next Image" onClick={handleNext}>
        <ArrowForwardIos fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SliderImage;
