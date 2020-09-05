import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "./card-stats.scss";
import SearchBar from "material-ui-search-bar";

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
                  <div className="text-center">Service 1</div>
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
                  <div className="text-center">Service 1</div>
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
                  <div className="text-center">Service 1</div>
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
                  <div className="text-center">Service 1</div>
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
                  <div className="text-center">Service 1</div>
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
                  <div className="text-center">Service 1</div>
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
                  <div className="text-center">Service 1</div>
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
                  <div className="text-center">Service 1</div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
