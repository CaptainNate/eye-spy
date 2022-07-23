import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../ContactForm/index.js";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../../App.css";

function Contact() {
    return (
        <div className="container Jumbotron p-5 mb-0">
           <Container className="text-center">
              <div className="p-md-5">
                <h1>Get in Touch</h1>
              </div>
            </Container>
          
        <Container fluid className="shadow bg-light mb-5">
        <Container className="p-4">
          <Row>
            <Col>
              <Container>
                <h4 style={{ color: "#F06543" }}>Contact Info</h4>
                <p>
                  <a href="mailto:projectuoft@gmail.com">
                    <span className="pr-3">
                      <FaEnvelope />
                    </span>
                    Email
                  </a>
                </p>
                </Container>
            </Col>
}