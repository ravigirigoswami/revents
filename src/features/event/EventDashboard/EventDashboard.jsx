import React, { Component } from "react";
import { Grid, Container, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";
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
  state = {
    isOpen: false,
    selectedEvent: null
  };

  // handelIsOpenToggle = () => {
  //         this.setState( ({isOpen}) => ({isOpen: !isOpen}))
  // }

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handelFromCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "./assets/user.png";
    this.props.createEvent(newEvent)
    this.setState(({ events }) => ({
        isOpen: false
    }));
  };

  handelSelectEvent = event => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };

  handelUpdateEvent = updateEvent => {
    this.props.updateEvent(updateEvent)
    this.setState(({ events }) => ({
     // events: events.map(event => {
      //   if (event.id === updateEvent.id) {
      //     return { ...updateEvent };
      //   } else {
      //     return event;
      //   }
      // }),
      isOpen: false,
      selectedEvent: null
    }));
  };

  handelDeleteEvent = id => {
     this.props.deleteEvent(id)
  };

  render() {
    const { events } = this.props;
    const { isOpen, selectedEvent } = this.state;
    return (
      <Container>
        <Grid>
          <Grid.Column width={10}>
            <EventList
              events={events}
              selectedEvent={this.handelSelectEvent}
              deleteEvent={this.handelDeleteEvent}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button onClick={this.handleCreateFormOpen} positive type="submit">
              Create Event
            </Button>
            {isOpen && (
              <EventForm
                key={selectedEvent ? selectedEvent.id : 0}
                updateEvent={this.handelUpdateEvent}
                selectedEvent={selectedEvent}
                createEvent={this.handleCreateEvent}
                cancelForm={this.handelFromCancel}
              />
            )}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default connect(mapState,actions)(EventDashboard);
