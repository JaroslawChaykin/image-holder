import React, { useEffect, useState } from 'react';
import ImageList from '../Components/ImageList';
import { Container, Spinner, Tab, Tabs } from 'react-bootstrap';

const Gallery = () => {

    const getNumOfHash = (str) => {
        if (str.includes('activetab')) {
            return str.substring(window.location.hash.length - 1)
        }
        return str
    }

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [tabHash, setTabHash] = useState(getNumOfHash(window.location.hash));

    window.location.hash = `activetab=${tabHash || 0}`

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
                ?
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                    <Spinner animation="grow" variant="primary"/>
                </div>
                :
                <Tabs defaultActiveKey={tabHash}
                      id="uncontrolled-tab-example"
                      className="mt-5"
                      onClick={(e) => e.target.type === 'button' && setTabHash(e.target.dataset.rrUiEventKey)}>
                    {
                        images.map((item, index) =>
                          <Tab key={index}
                               eventKey={index}
                               title={`Группа ${index + 1}`}>
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