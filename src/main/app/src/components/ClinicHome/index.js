import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "./card-stats.scss";
import SearchBar from "material-ui-search-bar";
import * as ROUTES from '../../constants/routes';

import { Card, Container, CardBody, CardFooter, Row, Col } from "reactstrap";

export default function ClinicHomePage() {
  return (
    <Container>
      <div className="item-content">
        <div>
          <SearchBar className="search-bar" />
        </div>

        <div className="content">
          <Row>
            <Col lg="3" md="3" sm="6" xs="6">
              <Card
                  tag="a"
                  onClick={(event) => (window.location.href = ROUTES.PATIENT_REGISTRATION)}
                  style={{ cursor: "pointer" }}
                  className="card-stats"
                >
                <CardBody>
                  <Row>
                    <Col>
                      <div className="text-center">
                        <img
                          className="img-format"
                          src={require("../../images/doctor_icon.png")}
                          alt="S1"
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <div className="text-center">Appointment</div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="3" sm="6" xs="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col>
                      <div className="text-center">
                        <img
                          className="img-format"
                          src={require("../../images/doctor_icon.png")}
                          alt="S1"
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <div className="text-center">Service 2</div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="3" sm="6" xs="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col>
                      <div className="text-center">
                        <img
                          className="img-format"
                          src={require("../../images/doctor_icon.png")}
                          alt="S1"
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <div className="text-center">Service 3</div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="3" sm="6" xs="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col>
                      <div className="text-center">
                        <img
                          className="img-format"
                          src={require("../../images/doctor_icon.png")}
                          alt="S1"
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <div className="text-center">Service 4</div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="3" sm="6" xs="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col>
                      <div className="text-center">
                        <img
                          className="img-format"
                          src={require("../../images/doctor_icon.png")}
                          alt="S1"
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <div className="text-center">Service 5</div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="3" sm="6" xs="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col>
                      <div className="text-center">
                        <img
                          className="img-format"
                          src={require("../../images/doctor_icon.png")}
                          alt="S1"
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <div className="text-center">Service 6</div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="3" sm="6" xs="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col>
                      <div className="text-center">
                        <img
                          className="img-format"
                          src={require("../../images/doctor_icon.png")}
                          alt="S1"
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <div className="text-center">Service 7</div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="3" sm="6" xs="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col>
                      <div className="text-center">
                        <img
                          className="img-format"
                          src={require("../../images/doctor_icon.png")}
                          alt="S1"
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <div className="text-center">Service 8</div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
