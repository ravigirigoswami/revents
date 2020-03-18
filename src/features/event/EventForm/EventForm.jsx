import React, { Component } from "react";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { createEvent, updateEvent } from "../eventAction";
import cuid from "cuid";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import {
  createValidator,
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthLessThan,
  hasLengthGreaterThan,
  isNumeric
} from "revalidate";
import DateInput from "../../../app/common/form/DateInput";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(events => events.id === eventId)[0];
  }
  return {
    initialValues: event
  };
};

const actions = {
  createEvent,
  updateEvent
};

const validate = combineValidators({
  title: isRequired({ message: "title is required" }),
  category: isRequired({ message: "category is required" }),
  description: composeValidators(
    isRequired({ message: "Description is required" }),
    hasLengthGreaterThan(4)({
      message: "Discription needs at least 5 charachter."
    })
  )(),
  city: isRequired({ message: "City is required" }),
  venue: isRequired({ message: "Venue is requied" }),
  date: isRequired({ message: "Date is requied" })
});

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

class EventForm extends Component {
  onFormSubmit = values => {
    if (this.props.initialValues.id) {
         console.log("typeof(values.date)",typeof(values.date))
      if(typeof(values.date) !== 'string'){
        values.date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(values.date);  
      }
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "./assets/user.png",
        hostedBy: "Bob",
      };
      
      newEvent.date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(newEvent.date);
      console.log("newEventttttt ",newEvent)
      this.props.createEvent(newEvent);
      this.props.history.push(`/events`);
    }
  };

  render() {
    const {
      initialValues,
      history,
      invalid,
      submitting,
      pristine
    } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details" />
            <Form
              onSubmit={this.props.handleSubmit(this.onFormSubmit)}
              autoComplete="off"
            >
              <Field
                name="title"
                component={TextInput}
                placeholder="Give your event a name"
              />
              <Field
                name="category"
                type="text"
                component={SelectInput}
                options={category}
                multipal={true}
                placeholder="Waht is your event about?"
              />
              <Field
                name="description"
                component={TextArea}
                rows={3}
                placeholder="tell us about your event"
              />
              <Header sub color="teal" content="Event Location Details" />
              <Field
                name="city"
                component={TextInput}
                placeholder="Event city"
              />
              <Field
                name="venue"
                component={TextInput}
                placeholder="Event venue"
              />
              <Field
                name="date"
                component={DateInput}
                placeholder="Event date"
                dateFormat="dd LLLL yyyy h:mm:a"
                showTimeSelect
                timeFormat="HH:mm"
              />
              <Button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button
                type="button"
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push(`/events`)
                }
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(reduxForm({ form: "eventFrom", validate })(EventForm));
