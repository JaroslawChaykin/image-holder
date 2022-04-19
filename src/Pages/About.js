import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
      <Container>
          <div className={'d-flex flex-column justify-content-center align-items-center text-center mt-lg-5'}>
              <h1>Здесь все обо мне</h1>
              <p className={'mt-lg-3'}>
                  Здравствуйте, я родом из Киргизии я являюсь гражданином этой страны. Три года назад я перехал в Россию по тому как поступил в НИУ ВШЭ, на профиль «Дизайн и программирование». Еще до того как сюда поступить я начинал увлекаться разработкой сайтов и участвовал в верстке проектов, в основном это была просто помощь. Конкретным обучением JS и фреймворку React, серьезно я занялся лишь в этом году обучения.
                  На данный момент продолжаю обучение на 3 из 4 курсе.
              </p>
          </div>
      </Container>
    );
};

export default About;