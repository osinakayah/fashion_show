import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native'
import styles from './Styles/LoginComponentStyle'
import { Form, Item, Input, Button, Icon, Grid, Row, Col } from 'native-base';
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

  render () {
    return (
      <View style={styles.container}>
        <Form style={styles.authForm}>
          <Item regular style={styles.inputItemStyle}>
            <Icon active name='ios-person' />
            <Input placeholder="Username" />
          </Item>
          <Item last regular style={styles.inputItemStyle}>
            <Icon active name='ios-lock' />
            <Input placeholder="Password" />
          </Item>
          <Button block style={styles.loginButton}>
            <Text style={styles.whiteText}>Sign In</Text>
          </Button>
        </Form>
        <Hr color="white" width={1} style={{marginTop: 20}}>
          <Text style={styles.textWithDivider}>Login In With</Text>
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
