import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List';
import RaiseButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        //Process form//
        this.props.nextStep();
    };

    render() {
        const { values: {firsttName, lastName, email, occupation, city, bio} } = this.props;
        return (
            <MuiThemeProvider>
              <React.Fragment>
                <AppBar title="Confirm User Data" />

                <List 
                  primaryText="First Name"
                  secondaryText={firsttName}
                />
                 <List 
                  primaryText="Last Name"
                  secondaryText={lastName}
                />
                <List 
                  primaryText="Email"
                  secondaryText={email}
                />
                <List 
                  primaryText="Occupation"
                  secondaryText={occupation}
                />
                <List 
                  primaryText="City"
                  secondaryText={city}
                />
                <List 
                  primaryText="Bio"
                  secondaryText={bio}
                />
               
                <br />
                <RaiseButton
                  label=" Confirm & Continue" 
                  primary={true}
                  
                  onClick={this.continue}
                />

                <RaiseButton
                  label=" Back" 
                  primary={true}
                  
                  onClick={this.back}
                />
              </React.Fragment>
            </MuiThemeProvider>
            
        )
    }

   
}

export default Confirm;
