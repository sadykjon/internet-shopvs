import React, { useState , useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { MyContext } from '../../Context/My-Context';

const Header = () => {
  const {cart, searchClick } = useContext(MyContext);
  const [input, setInput] = useState('');

  const btnClick=()=>searchClick(input)

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Internet Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/cart">Cart {cart.length}</Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex" >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
              />
              <Button variant="outline-success" type="submit" onClick={btnClick}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
