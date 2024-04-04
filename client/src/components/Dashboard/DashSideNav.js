import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { AiOutlineHome, AiFillInfoCircle } from "react-icons/ai";
import { SiTestcafe } from "react-icons/si";
import { GoGraph } from "react-icons/go";
import { RiDashboardLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import "./Dash.css";

const LeftNav = () => {
  const location = useLocation();

  return (
    <Container fluid className="pad">
      <Row>
        <Col sm={2} md={2} lg={2} className="sidebar px-5">
          <h2
            className="mt-4"
            style={{
              color: "#FBBC05",
              paddingLeft: "20px",
              paddingTop: "20px",
              paddingRight: "0px",
              fontFamily: "Roboto Serif",
            }}
          >
            WebPhics
          </h2>
          <Nav
            defaultActiveKey="/"
            className="flex-column mt-4 p-2"
            style={{
              marginTop: "20px",
            }}
          >
            <Nav.Link
              href="/"
              className={`mt-4 p-2 mx-3 ${
                location.pathname === "/" ? "active" : ""
              }`}
              active={false}
            >
              <AiOutlineHome />
              <span>Home</span>
            </Nav.Link>
            <Nav.Link
              href="/dashboard"
              className={`mt-4 p-2 mx-3 ${
                location.pathname === "/dashboard" ? "active" : ""
              }`}
            >
              <RiDashboardLine />
              <span>Dashboard</span>
            </Nav.Link>
            <Nav.Link
              href="/selectquiz"
              className={`mt-4 p-2 mx-3 ${
                location.pathname === "/selectquiz" ? "active" : ""
              }`}
            >
              <SiTestcafe />
              <span>Test</span>
            </Nav.Link>
            <Nav.Link
              href="/performance"
              className={`mt-4 p-2 mx-3 ${
                location.pathname === "/performance" ? "active" : ""
              }`}
            >
              <GoGraph />
              <span>Performance</span>
            </Nav.Link>
            <Nav.Link
              href="/aboutus"
              className={`mt-4 p-2 mx-3 ${
                location.pathname === "/aboutus" ? "active" : ""
              }`}
            >
              <AiFillInfoCircle />
              <span>About</span>
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default LeftNav;
