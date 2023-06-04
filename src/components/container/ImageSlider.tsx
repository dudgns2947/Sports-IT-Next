import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface ImageSliderProps {
  images: string[];
}

const SliderContainer = styled.div`
  width: 100%;
  overflow: auto;
`;

const SliderContent = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const SliderImage = styled.img`
  width: 100%;
  height: auto;
`;

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <SliderContainer>
      <SliderContent style={{ transform: `translateX(-${currentImage * 100}%)` }}>
        {images.map((imageUrl, index) => (
          <SliderImage key={index} src={imageUrl} alt="Slider" />
        ))}
      </SliderContent>
    </SliderContainer>
  );
};

export default ImageSlider;
