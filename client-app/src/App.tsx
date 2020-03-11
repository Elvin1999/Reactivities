import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Header, Icon, List, Segment } from "semantic-ui-react";
class App extends Component {
  state = {
    values: []
  };
  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then(response => {
      console.log(response);
      this.setState({
        values: response.data
      });
    });
  }
  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="users" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <Segment inverted>
          <List divided inverted relaxed>
            {this.state.values.map((value: any) => (
              <List.Item key={value.id}>
                <List.Content>
                  <List.Header>{value.name}</List.Header>
                  
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Segment>
      </div>
    );
  }
}
export default App;
