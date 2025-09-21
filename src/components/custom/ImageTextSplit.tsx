import React from 'react';

interface ImageTextSplitProps {
  imageUrl: string;
  imageAlt?: string;
  heading: string;
  paragraph: string;
}

const ImageTextSplit: React.FC<ImageTextSplitProps> = ({
  imageUrl,
  imageAlt = 'Image',
  heading,
  paragraph,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Image section */}
      <div className="w-full">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text section */}
      <div className="flex flex-col px-6 py-8 text-left">
        <h2 className="services-title text-white mb-4 text-left">
          {heading}
        </h2>
        <p className="services-description text-white text-left">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default ImageTextSplit;
