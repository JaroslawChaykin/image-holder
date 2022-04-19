import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
          <Spinner animation="grow" variant="primary"/>
      </div>
    );
};

export default Loader;