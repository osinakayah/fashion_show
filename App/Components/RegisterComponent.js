import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import Hr from 'react-native-hr-plus';
import styles from './Styles/RegisterComponentStyle'
import { Form, Item, Input, Button, Icon, Grid, Row, Col, Spinner } from 'native-base';

export default class RegisterComponent extends Component {
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
  constructor (props) {
    super(props);
    this.state = {
      nickname: '',
      uniqueIdentifier: '',
      password: ''
    }
  }
  renderRegisterButton = () => {
    const {register} = this.props;
    if (register.fetching) {
      return (
        <Button block style={styles.loginButton}>
          <Spinner/>
        </Button>
      )
    }
    else {
      return (
        <Button block style={styles.loginButton} onPress={() => {this.props.registerUser({
          uniqueIdentifier: this.state.uniqueIdentifier.trim(),
          password: this.state.password,
          nickname: this.state.nickname
        })}}>
          <Text style={styles.whiteText}>Sign Up</Text>
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
            <Input placeholder="Nickname" value={this.state.nickname} onChangeText={(nickname) => { this.setState({nickname})} } />
          </Item>
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
          {this.renderRegisterButton()}
        </Form>
        <Hr color="white" width={1} style={{marginTop: 20}}>
          <Text style={styles.textWithDivider}>Register With</Text>
        </Hr>

        <Grid>
          <Row>
            <Col><Button block transparent><Icon name='logo-facebook' /></Button></Col>
            <Col><Button block transparent><Icon name='logo-twitter' /></Button></Col>
            <Col><Button block transparent><Icon name='logo-instagram' /></Button></Col>
          </Row>
        </Grid>
      </View>
    )
  }
}
