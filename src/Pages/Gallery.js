import React, { useEffect, useState } from 'react';
import ImageList from '../Components/ImageList';
import { Accordion, Container, Row, Tab, Tabs } from 'react-bootstrap';

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
                ? <h1>Загрузка...</h1>
                :
                <Tabs defaultActiveKey="0" id="uncontrolled-tab-example" className="mb-3">
                    {
                        images.map((item, index) =>
                          <Tab eventKey={index} title={`Группа ${index + 1}`}>
                              <ImageList images={images[index]}/>
                          </Tab>
                        )
                    }
                </Tabs>
          }
      </Container>
    );
};

export default Gallery;