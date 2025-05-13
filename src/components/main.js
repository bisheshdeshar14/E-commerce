import React from "react";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div className="hero border-1 pb-3">
      <Carousel interval={3000} wrap={true} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/nike.jpg"
            alt="First slide"
            height={500}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/furniture1.jpg"
            alt="Second slide"
            height={500}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/chair.jpg"
            alt="Third slide"
            height={500}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
