import React, { Component } from 'react'
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase'
// import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native'
import styles from './Styles/LoginComponentStyle'
import { Form, Item, Input, Button, Icon, Grid, Row, Col, Spinner } from 'native-base';
import Hr from 'react-native-hr-plus';
export default class LoginComponent extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  constructor(props) {
    super(props);
    this.state = {
      uniqueIdentifier: '',
      password: ''
    }
  }
  facebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']);

      if (result.isCancelled) {
        throw new Error('User cancelled request'); // Handle this however fits the flow of your app
      }

      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

      // get the access token
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
      }

      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

      // login with credential
      const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

      console.info(JSON.stringify(currentUser.user.toJSON()))
    } catch (e) {
      console.error(e);
    }
  }
  renderLoginButton = () => {
    const {login} = this.props;
    if (login.fetching) {
      return (
        <Button block style={styles.loginButton}>
          <Spinner />
        </Button>
      )
    }
    else {
      return (
        <Button block style={styles.loginButton} onPress={() => {
          this.props.loginUser({
            uniqueIndentifier: this.state.uniqueIdentifier.trim(),
            password: this.state.password
          });
        }}>
          <Text style={styles.whiteText}>Sign In</Text>
        </Button>
      )
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <Form style={styles.authForm}>
          <Item regular style={styles.inputItemStyle}>
            <Icon active name='ios-person' />
            <Input placeholder="Username" value={this.state.uniqueIdentifier} onChangeText={(uniqueIdentifier) => this.setState({uniqueIdentifier})} />
          </Item>
          <Item regular style={styles.inputItemStyle}>
            <Icon active name='ios-lock' />
            <Input
              secureTextEntry
              placeholder="Password"
              value={this.state.password}
              onChangeText={(password) => {this.setState({password})}} />
          </Item>
          {this.renderLoginButton()}

        </Form>
        <Hr color="white" width={1} style={{marginTop: 20}}>
          <Text style={styles.textWithDivider}>Login In With</Text>
        </Hr>

        <Grid>
          <Row>
            <Col><Button onPress={this.facebookLogin} block transparent><Icon name='logo-facebook' /></Button></Col>
            <Col><Button block transparent><Icon name='logo-twitter' /></Button></Col>
            <Col><Button block transparent><Icon name='logo-google' /></Button></Col>
          </Row>
        </Grid>

      </View>
    )
  }
}

