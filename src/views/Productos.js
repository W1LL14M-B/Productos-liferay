import React from "react";


export const Productos = () => {
  return (
    <div className="row">
      <div className="col-12">
        <h2>Browse By Categories</h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-
            128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
      </div>
      <div className="col-12">
        <p>Top categories of the Week</p>
      </div>
    </div>
  );
};

/* import Carousel from 'react-bootstrap/Carousel';

export const Productos = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center my-4">Browse By Categories</h2>
          <Carousel indicators={false} interval={3000} className="mobile-carousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/400x200?text=Category+1"
                alt="Category 1"
              />
              <Carousel.Caption>
                <h3>Category 1</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/400x200?text=Category+2"
                alt="Category 2"
              />
              <Carousel.Caption>
                <h3>Category 2</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/400x200?text=Category+3"
                alt="Category 3"
              />
              <Carousel.Caption>
                <h3>Category 3</h3>
              </Carousel.Caption>
            </Carousel.Item>
             Agrega más CarouselItem según sea necesario 
          </Carousel>
        </div>
      </div>
    </div>
  );
}; */
