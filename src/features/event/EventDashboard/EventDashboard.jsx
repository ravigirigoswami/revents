import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'
import EventList from '../EventList/EventList'

 class EventDashboard extends Component {
    render() {
        return (
           <Container> 
         <Grid>   
           <Grid.Column width={10} >
                <EventList/>
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Right Column</h2>
            </Grid.Column>
         </Grid>
         </Container> 
        )
    }
}

export default EventDashboard