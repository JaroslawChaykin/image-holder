import React from 'react';
import { useParams } from 'react-router-dom';

const ImageShow = () => {
    const params = useParams()
    return (
      <div>
          {params.id}
      </div>
    );
};

export default ImageShow;