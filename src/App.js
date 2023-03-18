import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Spinner,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardGroup,
  CardImg,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userList: [],
    };
  }
  async componentDidMount() {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data)
      .then((data) => this.setState({ userList: data }))
      .catch((error) => console.error(error));
    this.setState({ loading: false });
  }
  render() {
    //let randomNumber=Math.floor(Math.random() * 100);
    //let url="https://source.unsplash.com/random/400x280?people-face?sig="+randomNumber;
    return (
      <div className="App">
        {this.state.loading ? (
          <Spinner className="m-5" color="primary">
            Loading...
          </Spinner>
        ) : (
          <CardGroup className="CardGroup">
            {this.state.userList.map((users) => (
              <Row>
                <Col
                  className="bg-light border"
                  sm={{
                    offset: 2,
                    size: "auto",
                  }}
                >
                  <Card key={users.id} className="Card">
                    <CardImg
                      alt="Card image cap"
                      src="https://t4.ftcdn.net/jpg/05/04/07/83/360_F_504078395_9Fo5jWrwI8Pbfr6hrPRUvUMsjR1R3Pvy.jpg"
                      top
                      width="100%"
                    />
                    <CardBody>
                      <CardTitle tag="h5">{users.name}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {users.username}
                      </CardSubtitle>
                      <CardText>{users.phone}</CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ))}
          </CardGroup>
        )}
      </div>
    );
  }
}

export default App;
