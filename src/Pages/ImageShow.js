import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Breadcrumb, Container } from 'react-bootstrap';
import Loader from '../Components/Loader';
import axios from 'axios';

const ImageShow = () => {
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const navigate = useNavigate()

    const fetchImage = async () => {
        const timeout = await new Promise((resolve, reject) => {
            setTimeout(async () => {
                const imagePromise = await axios.get(`https://jsonplaceholder.typicode.com/photos/${params.id}`);
                resolve(imagePromise.data);
            }, 1000)
        }).then(data => setImage(data))
    };

    useEffect(() => {
        fetchImage().then(() => setIsLoading(false));
    }, []);

    return (
      <>
          <Container>
              <Breadcrumb className={'my-4'}>
                  <Breadcrumb.Item onClick={() => navigate(-1)}>Главная</Breadcrumb.Item>
                  <Breadcrumb.Item active disabled>Картинка №{image?.id}</Breadcrumb.Item>
              </Breadcrumb>
          </Container>
          {
              isLoading
                ? <Loader/>
                :
                <Container>
                    <div className={'d-flex justify-content-around align-items-center text-center mt-5'}>
                        <div className="image" style={{width: '20rem'}}>
                            <img src={image.url} className="w-100" alt=""/>
                        </div>
                        <div className="content d-flex flex-column">
                            <h1>Группа №{image.albumId}</h1>
                            <p>{image.title}</p>
                        </div>
                    </div>
                </Container>
          }
      </>
    );
};

export default ImageShow;