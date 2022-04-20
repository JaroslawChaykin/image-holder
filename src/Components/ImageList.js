import React from 'react';
import ImageItem from './ImageItem';

const ImageList = ({images}) => {
    return (
      <div className={'d-flex justify-content-lg-between justify-content-md-around flex-wrap gap-4 mt-3'}>
          {
              images.map((item) => <ImageItem key={item.id} image={item}/>)
          }
      </div>
    );
};

export default ImageList;