/* eslint-disable global-require */
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { usernameChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onUserNameChange(text) {
    this.props.usernameChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { username, password } = this.props;

    this.props.loginUser({ username, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        LOG IN
      </Button>
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Image
          style={{ height: 265, width: 256, alignSelf: 'center' }}
          source={require('../image/logo.png')}
        />
        <Card>
          <CardSection>
            <Input
              label="Username"
              placeholder="user1"
              onChangeText={this.onUserNameChange.bind(this)}
              value={this.props.username}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
};

const mapStateToProps = ({ auth }) => {
  const { username, password, error, loading } = auth;

  return { username, password, error, loading };
};

export default connect(mapStateToProps, {
  usernameChanged, passwordChanged, loginUser
})(LoginForm);
