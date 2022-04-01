import React from "react";

const Image = ({ src, alt, height, width, isCenter }) => {
  return (
    <div style={{ height: height, width: width }}>
      <img
        src={src}
        alt={alt}
        className={`${height && "h-full"} ${width && "w-full"} ${
          isCenter && "mx-auto"
        }`}
      />
    </div>
  );
};

export default Image;
