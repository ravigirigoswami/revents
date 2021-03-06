import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import SignedOutMenu from '../Menus/SignedOutMenu'
import SignedinMenu from '../Menus/SignedinMenu'

 class NavBar extends Component {
   
  state = { authenticated : false }
     
  handleSignIn = () =>  this.setState({authenticated : true})
  
  handleSignOut = () =>{
    this.setState({authenticated : false})  
      this.props.history.push('/')
  }

  render() {
      const {authenticated} = this.state;
        return (
                  <Menu inverted fixed="top">
                    <Container>
                      <Menu.Item exact as={NavLink} to='/' header>
                        <img src="assets/logo.png" alt="logo" />
                        Re-vents
                      </Menu.Item>
                        <Menu.Item exact as={NavLink} to='/events' name="Events" />
                        <Menu.Item as={NavLink} to='/people' name="People" />
                        <Menu.Item as={NavLink} to='/test' name="Test" />
                      <Menu.Item>
                        <Button 
                        floated="right" 
                        as={Link} 
                        to='/createEvent'
                        positive inverted 
                        content="Create Event" />
                      </Menu.Item>
                {authenticated ? <SignedinMenu signOut={this.handleSignOut}/> : <SignedOutMenu sighnIn = {this.handleSignIn}/> }
                    </Container>
                  </Menu>
        )
    }
}
 
 export default withRouter(NavBar) 