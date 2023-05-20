import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const Banner = (props) => {
    return (
        <Carousel fade>
            {props.ban.map((item) => (
                <Carousel.Item key={item.image} interval={1000}>
                    <img
                        className="d-block"
                        src={item.image}

                        height="800vh"
                        width="100%"
                    />

                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Banner;
