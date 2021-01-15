import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
  

    const renderImages = () => {
        return props.images.map(image => <Carousel.Item key={image.id}>
            <img
              className="d-block w-100"
              src={image.img}
              alt="First slide"
              />
          </Carousel.Item>)
    }

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
        {renderImages()}
      </Carousel>
    );
}
  
  export default ControlledCarousel;