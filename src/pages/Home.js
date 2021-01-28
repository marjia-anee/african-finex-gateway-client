import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import main from '../images/main img.jpg';
import img1 from '../images/image 1.png';
import img2 from '../images/image 2.jpg';
import { Carousel } from 'react-bootstrap';

const Home = () => {
      return (
            <div>
                  <div className = "text-center m-5">
                  <h1> <b>WELCOME TO THE WEBSITE OF <br/> <span className="text-success">  AFRICAN FINEX GATEWAY </span></b> </h1> 

                  </div>
                  <div className = "text-center">
                  <Link to="/page1">
          <Button variant="danger" className="p-3 m-2 text-center">
            CLICK HERE
          </Button>
        </Link>
                  </div>
                  <div className = "text-center">
                  <Carousel>
  <Carousel.Item interval={500}>
    <img
      className="w-100"
      src={main}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="w-100"
      src={img1}
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src={img2}
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
                  </div>
                  
            </div>
      );
};

export default Home;