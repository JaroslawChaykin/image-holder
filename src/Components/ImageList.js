import React from 'react';
import ImageItem from './ImageItem';

const ImageList = ({images}) => {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
          {
              images.map((item) => <ImageItem key={item.id} image={item}/>)
          }
      </div>
    );
};

export default ImageList;