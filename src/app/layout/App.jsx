import React,{Component,Fragment} from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nev/NevBar/NavBar';
import { Container } from 'semantic-ui-react';

class App extends Component{
 render(){
  return (
      <Fragment>
        <Container className="main">
            <NavBar/> 
        </Container>
            <EventDashboard/>
      </Fragment>
     )
 }
  
}

export default App;
