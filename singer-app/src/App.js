import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Home from "./components/home";
import Blog from "./components/blog";
import Contacts from "./components/contacts";
import Portfolio from "./components/portfolio";
import logo from "./assets/logo.png";
import Footer from "./components/footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faMicrophoneAlt,
  faBomb,
  faPlane,
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faMicrophoneAlt,
  faBomb,
  faPlane,
  faMapMarkerAlt,
  faPhone,
  faEnvelope
);

export default function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <img src={logo} className="logo" alt="logo" />
          <Navbar.Brand as={Link} to="/">
            Ivan Popovych
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-container">
            <Nav className="navbar">
              <Nav.Link as={Link} to="/">
                Головна
              </Nav.Link>
              <Nav.Link as={Link} to="/portfolio">
                Галерея
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Блог
              </Nav.Link>
              <Nav.Link as={Link} to="/contacts">
                Контакти
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
