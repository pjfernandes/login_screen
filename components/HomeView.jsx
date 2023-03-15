import React from 'react'
import Logo from './Logo'
import { ImageBackground, StyleSheet, TextInput } from 'react-native'
import { View } from 'react-native'
import LoginForm from './LoginForm'

const HomeView = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={{height:"100%"}} source={require('../assets/forest.png')}>
          <Logo/>
          <LoginForm/>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-between'
  }
});

export default HomeView
