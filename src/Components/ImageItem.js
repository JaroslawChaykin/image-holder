import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const ImageItem = ({image}) => {

    return (
      <div className={'d-flex mt-lg-5 position-relative image-card'}>
          <Image rounded src={image.thumbnailUrl}/>
          <Link to={`/${image.id}`} className={'link-image align-items-center h-100 w-100 position-absolute' +
            ' top-0' +
            ' left-0' +
            ' justify-content-center'}>
              Подробнее
          </Link>
      </div>
    );
};

export default ImageItem;