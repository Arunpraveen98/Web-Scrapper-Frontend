import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaAmazon,
  FaSnapchat,
  FaInfoCircle,
  FaArrowRight,
} from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import "./Dash_card.css";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-2">
        <Container fluid>
          <Row>
            <Col>
              <Card className="bg-warning">
                <Card.Body className="Home-icons-card">
                  <SiFlipkart size={50} className="Home-icons" />
                  <Card.Title className="Home-icons-title">Flipkart</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="bg-info">
                <Card.Body className="Home-icons-card">
                  <FaAmazon size={50} className="Home-icons" />
                  <Card.Title className="Home-icons-title">Amazon</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="bg-danger">
                <Card.Body className="Home-icons-card">
                  <FaSnapchat size={50} className="Home-icons" />
                  <Card.Title className="Home-icons-title">Snapdeal</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="mt-2">
        <Container fluid className="p-0">
          <Card className="full-screen-card">
            <Card.Body>
              <Row>
                <Col>
                  <h1>Compare and Find Your Favorite Mobiles</h1>
                  <div className="description-div">
                    <div className="description-sub-div">
                      <p className="description">
                        💠Looking to buy a new mobile phone ?{" "}
                      </p>
                      <p className="description">
                        💠With so many options available on e-commerce websites
                        like Flipkart, Amazon, and Snapdeal.
                      </p>
                      <p className="description">
                        💠This App makes it easy to find the perfect mobile for
                        you.
                      </p>

                      <p className="description">
                        💠so you can compare features and prices side-by-side.
                      </p>
                      <p className="description">
                        💠Here are the top brands, Listed below.
                      </p>
                      <p className="description">
                        💠Search the Mobile Brand Name Listed below Only...
                      </p>
                    </div>
                  </div>

                  <div className="mobile-lists">
                    <ul>
                      <li>
                        <FaInfoCircle className="mobile-icon" /> iPhone
                      </li>
                      <li>
                        <FaInfoCircle className="mobile-icon" />
                        Moto
                      </li>
                      <li>
                        <FaInfoCircle className="mobile-icon" />
                        Vivo
                      </li>
                      <li>
                        <FaInfoCircle className="mobile-icon" />
                        OnePlus
                      </li>
                      <li>
                        <FaInfoCircle className="mobile-icon" />
                        Nokia
                      </li>
                      <li>
                        <FaInfoCircle className="mobile-icon" />
                        Redmi
                      </li>
                      <li>
                        <FaInfoCircle className="mobile-icon" />
                        Realme
                      </li>
                    </ul>
                  </div>
                  <div>
                    <button
                      className="btn btn-success p-3 product-btn"
                      onClick={() => navigate("/Products")}
                    >
                      <FaArrowRight /> Go to Products
                    </button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
