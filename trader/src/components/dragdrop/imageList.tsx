import React from "react";

// Rendering individual images
const Image = ({ image, style }: {image: any, style: React.CSSProperties }) => {
  
    return (
    <div className="file-item">
      <img style={style} alt={`img - ${image.id}`} src={image.src} className="file-img" />
    </div>
  );
};

// ImageList Component
const ImageList = ({ images, style}: {images: any, style : React.CSSProperties}) => {
  
  // render each image by calling Image component
  const renderImage = (image:any, index:any)  => {
    return (
      <Image style={style}
        image={image}
        key={`${image.id}-image`}
      />
    );
  };

  // Return the list of files
  return images.length > 0 ?  
  (<section className="file-list">{images.map(renderImage)}</section>) 
  : (<> </>);
};

export default ImageList;