import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb, Container } from 'react-bootstrap';
import Loader from '../Components/Loader';

const ImageShow = () => {
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();

    const fetchImage = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`).then(res => res.json());
            setImage(response);
        } catch (e) {
            console.log(e.message);
        }
    };
    useEffect(() => {
        fetchImage().then(() => setIsLoading(false));
    }, []);

    return (
      <Container>
          <Breadcrumb style={{margin: '20px 0'}}>
              <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
              <Breadcrumb.Item active disabled>Картинка №{image?.id}</Breadcrumb.Item>
          </Breadcrumb>
          {
              isLoading
                ? <Loader/>
                :
                <div className={'d-flex justify-content-around align-items-center text-center'} style={{height: '100%', marginTop: '100px'}}>
                    <div className="image" style={{width: '20rem'}}>
                        <img src={image.url} className="w-100" style={{marginRight: '20px'}} alt=""/>
                    </div>
                    <div className="content d-flex flex-column" style={{height: '100%'}}>
                        <h1>Группа №{image.albumId}</h1>
                        <p>{image.title}</p>
                    </div>
                </div>
          }
      </Container>
    );
};

export default ImageShow;