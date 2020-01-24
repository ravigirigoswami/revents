import React,{Component} from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nev/NevBar/NavBar';
import '../../../src/index.css'
class App extends Component{
 render(){
  return (
    <div>
        <h1>re-vents</h1>
        <NavBar/>
        <EventDashboard/>
    </div>
     )
 }
  
}

export default App;
