import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import LoginActions from '../Redux/LoginRedux'
import RegisterActions from '../Redux/RegisterRedux'
import { Colors, Images } from '../Themes'
// Styles
import styles from './Styles/AuthenticationScreenStyle'
import LoginComponent from "../Components/LoginComponent";
import RegisterComponent from "../Components/RegisterComponent";
import SplashScreen from "react-native-splash-screen";
const LOGIN_SCREEN = 1;
const REGISTER_SCREEN = 2;

class AuthenticationScreen extends Component {
  facebookAuth = (action, authenticatedUser) => {
    const email = '';
    const nickname = '';
    const password = '';
    const social = true;
    if (action === LOGIN_SCREEN) {
      this.props.attemptLogin(email, nickname, password)
    }
    else if (action === REGISTER_SCREEN) {

    }

  }
  googleAuth = (action, authenticatedUser) => {
    const email = '';
    const nickname = '';
    const password = '';
    const social = true;
    if (action === LOGIN_SCREEN) {

    }
    else if (action === REGISTER_SCREEN) {

    }
  }
  twitterAuth = (action, authenticatedUser) => {
    const email = '';
    const nickname = '';
    const password = '';
    const social = true;
    if (action === LOGIN_SCREEN) {

    }
    else if (action === REGISTER_SCREEN) {

    }
  }
  registerUser = (data) => {
    this.props.attemptRegister(data);
  }
  loginUser = (data) => {
    this.props.attemptLogin(data);
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  constructor(props){

    super(props);
    this.state = {
      selectedScreen: LOGIN_SCREEN
    }
  }
  renderScreen = () => {
    switch (this.state.selectedScreen) {
      case LOGIN_SCREEN:
        return <LoginComponent login={this.props.login} loginUser={this.loginUser} facebookAuth={this.facebookAuth} twitterAuth={this.twitterAuth} googleAuth={this.googleAuth} action={LOGIN_SCREEN} />
      case REGISTER_SCREEN:
        return <RegisterComponent register={this.props.register} registerUser={this.registerUser} facebookAuth={this.facebookAuth} twitterAuth={this.twitterAuth} googleAuth={this.googleAuth} action={REGISTER_SCREEN} />
    }
  }
  render () {
    return (
      <Container style={{ backgroundColor: Colors.primary}}>
        <Header style={{backgroundColor: Colors.primary, display: 'none'}} androidStatusBarColor={ Colors.primaryDark}/>
        <Content padder>
          <View>
            <Image source={Images.logo} style={styles.logo} />
          </View>
          {this.renderScreen()}
        </Content>
        <Footer style={{backgroundColor: Colors.primaryAccent}}>
          <FooterTab style={{backgroundColor: Colors.primaryAccent}}>
            <Button transparent full style={this.state.selectedScreen === LOGIN_SCREEN ? {borderBottomWidth: 5, borderBottomColor: Colors.silver} : {backgroundColor: Colors.primaryAccent}} vertical onPress={() => {this.setState({selectedScreen: LOGIN_SCREEN})}}>
              <Icon name="sign-in" type="FontAwesome" style={{color: Colors.silver}} />
              <Text style={{color: Colors.silver}}>Sign In</Text>
            </Button>
            <Button transparent full style={this.state.selectedScreen === REGISTER_SCREEN ? {borderBottomWidth: 5, borderBottomColor: Colors.silver} : {backgroundColor: Colors.primaryAccent}} vertical onPress={() => {this.setState({selectedScreen: REGISTER_SCREEN})}}>
              <Icon name="user-plus" type="FontAwesome" style={{color: Colors.silver}} />
              <Text style={{color: Colors.silver}}>Sign Up</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    register: state.register,
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (data) => dispatch(LoginActions.loginRequest(data)),
    attemptRegister: (data) => dispatch(RegisterActions.registerRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationScreen)
