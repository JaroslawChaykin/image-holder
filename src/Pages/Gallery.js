import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Loader from '../Components/Loader';
import TabsImages from '../Components/TabsImages';
import { useDispatch, useSelector } from 'react-redux';

const Gallery = () => {

    const dispatch = useDispatch()
    const images = useSelector(state => state.images.images)

    useEffect(() => {
        dispatch({type: 'ASYNC_ADD_IMAGES'})
    }, []);

    return (
      <>
          {
              !images
                ? <Loader/>
                :
                <Container>
                    <TabsImages images={images}/>
                </Container>
          }
      </>
    );
};

export default Gallery;