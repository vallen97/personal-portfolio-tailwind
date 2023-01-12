import Image from 'next/image';

const ImageItem = ({ src }) => {
  return <Image src={src} alt='my-whats' />;
};

export default ImageItem;
