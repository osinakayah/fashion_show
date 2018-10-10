import React, { Component } from 'react'
import { ScrollView, Text, Image, View, AsyncStorage } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
const JWT_TOKEN_KEY = 'JWT_TOKEN_KEY';
export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem(JWT_TOKEN_KEY);
    this.props.navigation.navigate(userToken ? 'AppStack' : 'AuthStack');
  };
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
