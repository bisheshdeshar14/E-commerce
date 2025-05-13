import React from "react";
import { Container, Row, Col, Card, Button, ProgressBar } from "react-bootstrap";
import { FaUser, FaChartBar, FaClipboardList, FaShoppingCart, FaComments, FaCogs, FaTasks, FaBell } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={4} sm={6} className="mb-4">
          <Card className="text-center shadow-lg border-0">
            <Card.Body>
              <FaUser size={40} className="text-primary mb-2" />
              <Card.Title>Total Users</Card.Title>
              <Card.Text className="fs-4 fw-bold">10</Card.Text>
              <Button variant="outline-primary" className="w-100">
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={6} className="mb-4">
          <Card className="text-center shadow-lg border-0">
            <Card.Body>
              <FaChartBar size={40} className="text-success mb-2" />
              <Card.Title>Revenue</Card.Title>
              <Card.Text className="fs-4 fw-bold">Rs.50,000</Card.Text>
              <Button variant="outline-success" className="w-100">
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={6} className="mb-4">
          <Card className="text-center shadow-lg border-0">
            <Card.Body>
              <FaClipboardList size={40} className="text-warning mb-2" />
              <Card.Title>New Orders</Card.Title>
              <Card.Text className="fs-4 fw-bold">20</Card.Text>
              <Button variant="outline-warning" className="w-100">
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4} sm={6} className="mb-4">
          <Card className="text-center shadow-lg border-0">
            <Card.Body>
              <FaShoppingCart size={40} className="text-danger mb-2" />
              <Card.Title>Pending Orders</Card.Title>
              <Card.Text className="fs-4 fw-bold">5</Card.Text>
              <Button variant="outline-danger" className="w-100">
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={6} className="mb-4">
          <Card className="text-center shadow-lg border-0">
            <Card.Body>
              <FaComments size={40} className="text-info mb-2" />
              <Card.Title>New Messages</Card.Title>
              <Card.Text className="fs-4 fw-bold">12</Card.Text>
              <Button variant="outline-info" className="w-100">
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={6} className="mb-4">
          <Card className="text-center shadow-lg border-0">
            <Card.Body>
              <FaCogs size={40} className="text-secondary mb-2" />
              <Card.Title>System Settings</Card.Title>
              <Card.Text className="fs-4 fw-bold">Updated</Card.Text>
              <Button variant="outline-secondary" className="w-100">
                Manage Settings
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-4">
          <Card className="shadow-lg border-0">
            <Card.Body>
              <Card.Title><FaTasks className="me-2" />Task Progress</Card.Title>
              <ProgressBar now={70} label={`70% Completed`} className="mt-3" />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="shadow-lg border-0">
            <Card.Body>
              <Card.Title><FaBell className="me-2" />Recent Notifications</Card.Title>
              <ul className="list-unstyled mt-3">
                <li>New user registered</li>
                <li>Server maintenance scheduled</li>
                <li>New product added</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
