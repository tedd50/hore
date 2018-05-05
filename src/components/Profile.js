import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { firstnameChanged, lastnameChanged, emailChanged, profileSave } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class Profile extends Component {
  onFirstNameChange(text) {
    this.props.firstnameChanged(text);
  }

  onLastNameChange(text) {
    this.props.lastnameChanged(text);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onButtonPress() {
    const { firstname, lastname, email } = this.props;

    this.props.profileSave({ firstname, lastname, email });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        SAVE PROFILE
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="First Name"
            onChangeText={this.onFirstNameChange.bind(this)}
            value={this.props.firstname}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Last Name"
            onChangeText={this.onLastNameChange.bind(this)}
            value={this.props.lastname}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { firstname, lastname, email, error, loading } = auth;

  return { firstname, lastname, email, error, loading };
};

export default connect(mapStateToProps, {
  firstnameChanged, lastnameChanged, emailChanged, profileSave
})(Profile);
