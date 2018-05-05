import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';

class Home extends Component {
  onBrowseProductButtonPress() {
    Actions.category();
  }

  onMyOrderButtonPress() {
    Actions.order();
  }

  onProfileButtonPress() {
    Actions.profile();
  }

  onChangePasswordButtonPress() {
    Actions.changePassword();
  }

  onLogoutButtonPress() {
    Actions.auth();
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Button onPress={this.onBrowseProductButtonPress.bind(this)}> Browse Product </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onMyOrderButtonPress.bind(this)}> My Order </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onProfileButtonPress.bind(this)}> Profile </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onChangePasswordButtonPress.bind(this)}> Change Password </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onLogoutButtonPress.bind(this)}> Logout </Button>
        </CardSection>
      </Card>
    );
  }
}

export default Home;
