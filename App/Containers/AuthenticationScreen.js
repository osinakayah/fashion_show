import React, { Component } from 'react'
import { View, Image } from 'react-native'
import Hr from 'react-native-hr-plus';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Colors, Images } from '../Themes'
// Styles
import styles from './Styles/AuthenticationScreenStyle'
import LoginComponent from "../Components/LoginComponent";
import RegisterComponent from "../Components/RegisterComponent";
import SplashScreen from "react-native-splash-screen";
const LOGIN_SCREEN = 1;
const REGISTER_SCREEN = 2;

class AuthenticationScreen extends Component {
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
        return <LoginComponent/>
      case REGISTER_SCREEN:
        return <RegisterComponent/>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationScreen)
