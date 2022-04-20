import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
      <div className={'d-flex justify-content-center align-items-center h-100 w-100 position-absolute top-0 left-0'}>
          <Spinner animation="border" variant="primary"/>
      </div>
    );
};

export default Loader;