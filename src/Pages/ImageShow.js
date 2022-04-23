import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Badge, Breadcrumb, Container, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Components/Loader';
import { ASYNC_ADD_COMMENTS, ASYNC_ADD_IMAGE } from '../store/actions';

const ImageShow = () => {

    const params = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {image, comments} = useSelector(state => state.image);

    useEffect(() => {
        dispatch({type: ASYNC_ADD_IMAGE, payload: params.id});
    }, []);
    return (
      <>
          {
              !image
                ? <Loader/>
                :
                <Container>
                    <Breadcrumb className={'my-4'}>
                        <Breadcrumb.Item onClick={() => navigate(-1)}>Главная</Breadcrumb.Item>
                        <Breadcrumb.Item active disabled>Картинка №{image?.id}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className={'d-flex justify-content-around my-5 align-items-center text-center'}>
                        <div className="image" style={{width: '20rem'}}>
                            <Image rounded src={image.url} className="w-100"/>
                        </div>
                        <div className="content d-flex flex-column">
                            <h1>Группа №{image.albumId}</h1>
                            <p>{image.title}</p>
                        </div>
                    </div>
                    <div className="comments">
                        <h1 className="pt-5">Комментарии</h1>
                        {
                            !comments
                              ? <p>Комментарии отсутствуют</p>
                              :
                              comments.map((comment, index) => (
                                <div key={comment.id}
                                     className={`comment d-flex mt-5 pt-5 ${index === 0 ? '' : 'border-top'}`}>
                                    <div>
                                        <h3>{comment.email}</h3>
                                        <p style={{width: '600px'}}>{comment.body}</p>
                                    </div>
                                </div>
                              ))
                        }
                    </div>

                </Container>
          }
      </>
    );
};

export default ImageShow;