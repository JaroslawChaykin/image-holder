import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Loader from '../Components/Loader';
import TabsImages from '../Components/TabsImages';

const Gallery = () => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchImages = async () => {
        try {
            const imagesPromises = [1, 2, 3, 4].map(item => fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${item}&_limit=6`).then(res => res.json()));
            const getImages = await Promise.all(imagesPromises);
            setImages(getImages);
        } catch (e) {
            console.log(e.message);
        }
    };
    useEffect(() => {
        fetchImages().then(() => setIsLoading(false));
    }, []);

    return (
      <Container>
          {
              isLoading
                ? <Loader />
                : <TabsImages images={images}/>
          }
      </Container>
    );
};

export default Gallery;