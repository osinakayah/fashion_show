import React, { Component } from 'react'
import { Image, Text, AsyncStorage } from 'react-native'
import { Row, Column as Col} from 'react-native-responsive-grid'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Container, Header, Content, Title, Body, Icon, CardItem, Card, Button, Left, Thumbnail, Right, Fab } from 'native-base';
// Styles
import styles from './Styles/HomeScreenStyle'
import SplashScreen from "react-native-splash-screen";
import DesignActions from "../Redux/DesignRedux"
import {Colors, Images} from "../Themes";
import Config from "../Config/AppConfig";

class HomeScreen extends Component {
  componentDidMount = async () => {
    SplashScreen.hide();
    const userToken = await AsyncStorage.getItem(Config.JWT_TOKEN_KEY);

    if (userToken) {
      this.fetchAuthenticatedDesigns();
    }
    else {
      this.fetchUnathenticatedDesigns();
    }
  }
  fetchAuthenticatedDesigns = () => {
    this.props.attemptFetchDesigns(null)
  }
  fetchUnathenticatedDesigns = () => {
    this.props.attemptFetchUnAuthDesigns()
  }
  goToAccount = () => {
    const {payload} = this.props.login;
    if (payload) {
      this.props.navigation.navigate('UserAccountScreen');
    }
    else {
      this.props.navigation.navigate('AuthenticationScreen');
    }
    if (payload) {
      console.log(1);
      this.fetchAuthenticatedDesigns();
    }
    else {
      console.log(2);
      this.fetchUnathenticatedDesigns();
    }
  }
  render () {
    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor: Colors.primary}} androidStatusBarColor={ Colors.primaryDark}>
          <Body>
            <Title>Monary</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="md-bookmark" style={{color: Colors.silver}} />
            </Button>
            <Button onPress={this.goToAccount} transparent>
              <Icon name="md-person" style={{color: Colors.silver}} />
            </Button>
          </Right>
        </Header>
        <Content>
          <Row>
            <Col smSize={100} mdSize={50} lgSize={33.3333}>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={Images.logo} />
                    <Body>
                      <Text>Yomi Casus</Text>
                      <Text note>Men Trad</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Button transparent>
                      <Icon active name="md-bookmark" />
                    </Button>
                  </Right>
                </CardItem>
                <CardItem cardBody>
                  <Image source={Images.image1} style={{height: 300, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>1k</Text>
                    </Button>
                    <Button transparent>
                      <Icon active name="chatbubbles" />
                      <Text>466</Text>
                    </Button>
                  </Left>

                  <Right>
                    <Text>11h ago</Text>
                  </Right>
                </CardItem>
              </Card>
            </Col>
          </Row>

        </Content>
        <Fab
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: Colors.primary }}
          position="bottomRight"
          onPress={() => {this.gotUploadImage()}}>
          <Icon name="md-camera" />
        </Fab>
      </Container>
    )
  }
  gotUploadImage = () => {
    this.props.navigation.navigate('')
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptFetchDesigns: (designerId) => dispatch(DesignActions.designGet(designerId)),
    attemptFetchUnAuthDesigns: () => dispatch(DesignActions.designGetUnAuth()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
