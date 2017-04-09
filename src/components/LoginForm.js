import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, CardItem, Button, Spinner, Input } from 'native-base';
// import { Card, CardSection, Input, Button, Spinner } from './common';


class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser ({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='small'/>;
    }
    return (
      <Button onPress={ this.onButtonPress.bind(this) }>
        <Text>Login</Text>
      </Button>
    );
  }

  render() {
    return(
      <Card>
        <CardItem>
          <Input
            value={ this.props.email }
            label="Email"
            placeholder="email@email.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardItem>

        <CardItem>
          <Input
            value={ this.props.password }
            password
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardItem>
        <Text style={styles.errorTextStyle}>
          { this.props.error }
        </Text>
        <CardItem>
          { this.renderButton() }
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 14,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email: email, password: password, error: error, loading };
}

export default connect( mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
