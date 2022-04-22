import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Loader from '../Components/Loader';
import TabsImages from '../Components/TabsImages';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Gallery = () => {

    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch()
    const images = useSelector(state => state.images.images)

    const fetchImages = async () => {
        const timeout = await new Promise((resolve, reject) => {
            setTimeout(async () => {
                const imagesPromises = [1, 2, 3, 4].map(item => axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${item}&_limit=6`));
                const getImages = await Promise.all(imagesPromises);
                let arrImages = getImages.map(item => item = item.data);
                resolve(arrImages)
            }, 1000)
        }).then(data => dispatch({type: 'ADD_IMAGES', payload: data}))
    };

    useEffect(() => {
        fetchImages()
          .then(() => {
              setIsLoading(false);
          });
    }, []);

    return (
      <>
          {
              isLoading
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