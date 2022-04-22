import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Breadcrumb, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Components/Loader';

const ImageShow = () => {

    const params = useParams();
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const image = useSelector(state => state.image.image)

    useEffect(() => {
        dispatch({type: 'ASYNC_ADD_IMAGE', payload: params.id})
    }, [])

    return (
      <>
          <Container>
              <Breadcrumb className={'my-4'}>
                  <Breadcrumb.Item onClick={() => navigate(-1)}>Главная</Breadcrumb.Item>
                  <Breadcrumb.Item active disabled>Картинка №{image?.id}</Breadcrumb.Item>
              </Breadcrumb>
          </Container>
          {
              !image
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