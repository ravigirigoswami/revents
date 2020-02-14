import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

 class EventForm extends Component {
   
state = {
  title : ''
}

  handleFormSubmit = (evt) => {
      evt.preventDefault();
      console.log(this.state.title)
   } 
   
   handleInput = (evt) =>{
        this.setState({title: evt.target.value})              
   }


    render() {
      const {cancelForm} = this.props;
      const {title} = this.state;
        return (
                  <Segment>
                    <Form onSubmit={this.handleFormSubmit}>
                      <Form.Field>
                        <label>Event Title</label>
                        <input
                        onChange = {this.handleInput}  
                        value={title}
                        placeholder="First Name" />
                      </Form.Field>
                      <Form.Field>
                        <label>Event Date</label>
                        <input type="date" placeholder="Event Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>City</label>
                        <input placeholder="City event is taking place" />
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input placeholder="Enter the Venue of the event" />
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input placeholder="Enter the name of person hosting" />
                      </Form.Field>
                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button type="button" onClick={cancelForm}>Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}

export default EventForm
