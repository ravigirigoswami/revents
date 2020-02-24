import React,{Fragment} from 'react'
import { Menu,Header } from 'semantic-ui-react'

const SettingsNav = () => {
    return (
            <Fragment>
             <Menu vertical>
               <Header icon="user" attached inverted color="grey" content="Profile" />
               <Menu.Item>Basics</Menu.Item>
               <Menu.Item>About Me</Menu.Item>
               <Menu.Item>My Photos</Menu.Item>
             </Menu>
           <Menu vertical>
               <Header
                 icon="settings"
                 attached
                 inverted
                 color="grey"
                 content="Account"
               />
               <Menu.Item>My Account</Menu.Item>
             </Menu>
             </Fragment>
         
    )
}

export default SettingsNav
