import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "./contacts.module.css";

function Contacts() {
  const handleFormSubmit = e => {
    e.preventDefault();
    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const message = e.target.message.value;

    const payload = {
      name,
      email,
      message
    };
    console.log("user_qE1emLUfdZxtdqaeT1qki", payload);
  };

  return (
    <div
      className={`${styles.contactsContainer} d-flex flex-row flex-wrap flex-lg-nowrap flex-xl-nowrap justify-content-around p-xs-0 p-md-5`}
    >
      <div
        className={`${styles.contactText} d-flex justify-content-start flex-column p-5 pl-md-0`}
      >
        <h2>Надішліть мені повідомлення!</h2>
        <hr className={`${styles.decorativeLine}`} width="2%" />
        <p className="contact-intro d-flex flex-wrap text-justify">
          Шановні відвідувачі! Можливість спілкування завжди була дуже важливою,
          а можливість результативного спілкування - надзвичайно важливою! Буду
          радий вашому зверненню і з радістю відгукнусь на пропозиції. З
          ентузіазмом ставлюсь до цікавих ідей та проектів.
        </p>
        <p>
          <FontAwesomeIcon
            icon="map-marker-alt"
            className={`${styles.contactIcons} mr-2`}
          />
          <span className="text-uppercase">Київ, пл.Перемоги, 2</span>
        </p>
        <h3 className="mt-4">МЕНЕДЖЕР - п.СОЛОМІЯ</h3>
        <p>
          <FontAwesomeIcon
            icon="phone"
            className={`${styles.contactIcons} mr-2`}
          />{" "}
          (068)811-41-12
        </p>
        <p className=" text-uppercase">
          <FontAwesomeIcon
            icon="envelope"
            className={`${styles.contactIcons} mr-2`}
          />
          golden.otaman@gmail.com
        </p>
      </div>
      <div className={`${styles.contactForm}`}>
        <Form id="contact-form" onSubmit={handleFormSubmit}>
          <Form.Group controlId="formBasicText">
            <Form.Label>Ім'я:</Form.Label>
            <Form.Control
              type="text"
              name="user_name"
              placeholder="Ваше Ім'я"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="user_email"
              placeholder="Введіть е-mail"
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Повідомлення:</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="message"
              placeholder="Текст повідомлення:"
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Надіслати
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contacts;
