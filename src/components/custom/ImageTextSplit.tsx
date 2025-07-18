import React from 'react';

interface ImageTextSplitProps {
  imageUrl: string;
  imageAlt?: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  imagePosition?: 'left' | 'right'; // default is 'left'
  onButtonClick?: () => void;
}

const ImageTextSplit: React.FC<ImageTextSplitProps> = ({
  imageUrl,
  imageAlt = 'Image',
  heading,
  paragraph,
  buttonText,
  imagePosition = 'left',
  onButtonClick,
}) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <div className="flex flex-col md:flex-row w-screen h-full">
      {/* Image section */}
      <div
        className={`
          md:w-1/2 w-full
          ${isImageLeft ? 'order-1' : 'order-2'}
        `}
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          className={`
            w-full h-full object-cover
            ${isImageLeft ? 'rounded-r-none' : 'rounded-l-none'}
          `}
        />
      </div>

      {/* Text section */}
      <div
        className={`
          md:w-1/2 w-full
          flex flex-col justify-center
          px-6 md:px-[5vw] py-8
          ${isImageLeft ? 'order-2' : 'order-1'}
        `}
      >
        <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 text-white">
          {heading}
        </h2>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-6 max-w-l">
  {paragraph}
</p>
        <button
          onClick={onButtonClick}
          className="bg-button-gold text-white px-6 py-3 rounded hover:bg-button-gold-700 w-fit text-lg"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ImageTextSplit;
