import React, { Component } from 'react'
import { View, Image } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import TokenConfirmationActions from '../Redux/TokenConfirmationRedux'
// Styles
import styles from './Styles/AccountVerificationScreenStyle'
import {Images, Fonts} from "../Themes";
import Snackbar from 'react-native-snackbar';
class AccountVerificationScreen extends Component {
  _onFinishCheckingCode(isValid){
    if(isValid){
      const {params} = this.props.navigation.state;
      this.props.attemptActivation(params.token);
    }else{
      Snackbar.show({
        title: 'Invalid Verification code',
        duration: Snackbar.LENGTH_LONG,
      });
    }
  }
  render () {
    const {params} = this.props.navigation.state;
    return (
      <Container style={styles.container}>
        <Content behavior='position'>
          <View>
            <Image source={Images.logo} style={styles.logo} />
          </View>
          <CodeInput
            codeLength={6}
            keyboardType="numeric"
            className="border-b"
            cellBorderWidth={3}
            ref="codeInputRef2"
            compareWithCode= {params.token}
            activeColor='rgba(51, 51,51, 1)'
            inactiveColor='rgba(51, 51,51, 1)'
            inputPosition='center'
            size={40}
            onFulfill={(isValid) => this._onFinishCheckingCode(isValid)}
            containerStyle={{ marginTop: 30  }}
            codeInputStyle={{ borderWidth: 0, height: 40, width: 35 }}
          />
          <Text style={{textAlign: 'center', marginTop: 3, marginBottom: 15, fontFamily: Fonts.type.base, fontSize: 12}}>Enter 6 digit code</Text>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tokenConfirmation: state.tokenConfirmation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptActivation: token => dispatch(TokenConfirmationActions.tokenConfirmationRequest(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountVerificationScreen)
