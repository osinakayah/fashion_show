import React, { Component } from 'react'
import { Image, Text } from 'react-native'
import { Row, Column as Col, Grid} from 'react-native-responsive-grid'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Container, Header, Content, Title, Body, Icon, CardItem, Card, Button, Left, Thumbnail, Right, Fab } from 'native-base';
// Styles
import styles from './Styles/HomeScreenStyle'
import SplashScreen from "react-native-splash-screen";
import {Colors, Images} from "../Themes";

class HomeScreen extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  goToAccount = () => {
    const {payload} = this.props.login;
    if (payload) {
      this.props.navigation.navigate('UserAccountScreen');
    }
    else {
      this.props.navigation.navigate('AuthenticationScreen');
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
                      <Text>Yomi Casuals</Text>
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
            <Col smSize={100} mdSize={50} lgSize={33.3333}>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={Images.logo} />
                    <Body>
                    <Text>Yomi Casuals</Text>
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
            <Col smSize={100} mdSize={50} lgSize={33.3333}>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={Images.logo} />
                    <Body>
                    <Text>Yomi Casuals</Text>
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
            <Col smSize={100} mdSize={50} lgSize={33.3333}>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={Images.logo} />
                    <Body>
                    <Text>Yomi Casuals</Text>
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
          onPress={() => {}}>
          <Icon name="md-camera" />
        </Fab>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
