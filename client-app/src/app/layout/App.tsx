import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header, Icon, List, Segment } from "semantic-ui-react";
import { IActivity } from "../models/activity";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then(response => {
        setActivities(response.data);
      });
  },[]);

  return (
    <div>
      <Header as="h2">
        <Icon name="users" />
        <Header.Content>Reactivities</Header.Content>
      </Header>
      <Segment inverted>
        <List divided inverted relaxed>
          {activities.map((activity: IActivity) => (
            <List.Item key={activity.id}>
              <List.Content>
                <List.Header>{activity.title}</List.Header>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Segment>
    </div>
  );
};
export default App;
