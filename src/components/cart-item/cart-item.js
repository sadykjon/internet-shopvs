import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ReactStars from "react-stars";


const CartItem = (props) => {
  const { title, images, description, children, price, brand, rating, onClick } = props;
  return (
    <div>
      <div className='d-flex'>
        <Card style={{ width: '18rem' }}>
          <Card.Img className='img' variant="top" src={images[0]} />
          <Card.Body>
            <div className='title d-flex gap-2 justify-content-between'>
              <Card.Title>{title}</Card.Title>
              <Card.Title>{brand}</Card.Title>
            </div>
            <div className='discription'>
              <Card.Text>
                {description}
              </Card.Text>
              <ReactStars
          count={5}
          size={"24"}
          color2={"#ffd700"}
          value={rating}
        />
            </div>
            <div className="btn d-flex align-items-center justify-content-between">
              <span>{price} $</span>
              <Button onClick={onClick} variant="primary">{children}</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CartItem;
