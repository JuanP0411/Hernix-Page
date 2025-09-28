import React from 'react';
import Image from 'next/image';

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
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={800}
          height={400}
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
