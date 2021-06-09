
// Rendering individual images
const Image = ({ image }: {image: any}) => {
  return (
    <div className="file-item">
      <img alt={`img - ${image.id}`} src={image.src} className="file-img" />
    </div>
  );
};

// ImageList Component
const ImageList = ({ images }: {images: any}) => {
  
    if (images.length === 0)
    {
        images = [];
    }

  // render each image by calling Image component
  const renderImage = (image:any, index:any)  => {
    return (
      <Image
        image={image}
        key={`${image.id}-image`}
      />
    );
  };

  // Return the list of files
  return <section className="file-list">{images.map(renderImage)}</section>;
};

export default ImageList;