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
    <div className="flex flex-col md:flex-row w-full h-full">
      {/* Image section */}
      <div className={`w-full md:w-1/2 ${isImageLeft ? 'order-1' : 'order-2'}`}>
        <img src={imageUrl} alt={imageAlt} className="object-cover w-full h-full" />
      </div>

      {/* Text section */}
      <div className={`w-full md:w-1/2 flex flex-col justify-center p-6 ${isImageLeft ? 'order-2' : 'order-1'}`}>
        <h2 className="text-2xl font-bold mb-4 text-white ">{heading}</h2>
        <p className="text-white -700 mb-6">{paragraph}</p>
        <button
          onClick={onButtonClick}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-fit"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ImageTextSplit;
