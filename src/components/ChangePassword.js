import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { newpassChanged, newpass2Changed, passwordSave } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class ChangePassword extends Component {
  onNewPassChange(text) {
    this.props.newpassChanged(text);
  }

  onNewPass2Change(text) {
    this.props.newpass2Changed(text);
  }

  onButtonPress() {
    const { newpass, newpass2 } = this.props;

    this.props.passwordSave({ newpass, newpass2 });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        SAVE PASSWORD
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            secureTextEntry
            label="New Password"
            onChangeText={this.onNewPassChange.bind(this)}
            value={this.props.newpass}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Confirm Password"
            onChangeText={this.onNewPass2Change.bind(this)}
            value={this.props.newpass2}
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
  const { newpass, newpass2, error, loading } = auth;

  return { newpass, newpass2, error, loading };
};

export default connect(mapStateToProps, {
  newpassChanged, newpass2Changed, passwordSave
})(ChangePassword);
