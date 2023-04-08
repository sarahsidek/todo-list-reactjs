import React from "react";
import { Col, Row, } from "react-bootstrap";
import { Form } from "react-bootstrap/Form";


const Home = () => {
    return (
        <div className="text-center">
            <h3 className="big-title">Todo List Sarah</h3>
            <div>
                <Row>
                    <Col sm={4} xs={6}>
                       <p>Hello</p>
                    </Col>
                    <Col sm={4} xs={6}>
                       <p>Hello</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Home