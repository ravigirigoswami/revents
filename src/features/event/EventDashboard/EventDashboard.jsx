import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import EventList from "../EventList/EventList"
import { createEvent, deleteEvent, updateEvent } from "../eventAction";

const mapState = state => ({
  events: state.events
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

class EventDashboard extends Component {
 
  // handelIsOpenToggle = () => {
  //         this.setState( ({isOpen}) => ({isOpen: !isOpen}))
  // }


  handelSelectEvent = event => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };

  handelDeleteEvent = id => {
     this.props.deleteEvent(id)
  };

  render() {
    const { events } = this.props;
    return (
      <Container>
        <Grid>
          <Grid.Column width={10}>
            <EventList
              events={events}
              deleteEvent={this.handelDeleteEvent}
            />
          </Grid.Column>
          <Grid.Column width={6}>
              <h2>activity</h2>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default connect(mapState,actions)(EventDashboard);
