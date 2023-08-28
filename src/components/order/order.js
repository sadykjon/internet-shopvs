import React, { useState,useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { services } from "../../Services/Services";
import { MyContext } from "../../Context/My-Context";

const Order = (props) => {
  const {cart}=useContext(MyContext) 
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const onOrder = async () => {
    const data = await services.postOrderProduct({
      name,
      phone,
      address,
      title:cart.map((e)=>e.title)
    });
    console.log("dataTelegramm", data);
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Оформить Товар
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          <input
          value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="ФИО"
          />
          <input
          value={phone}
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Телефон"
          />
          <input
          value={address}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Адрес"
          />
        </div>
        {
            cart.map(elem=>{
                return <p>{elem.title}</p>
            })
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={onOrder} variant="btn btn-success">
          Заказать
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Order;