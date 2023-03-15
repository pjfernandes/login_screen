import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, StyleSheet, View } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Icon name="podcast" size={60} color="red"/>
      <Text style={styles.text}>Login Screen App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 30,
    padding: 10
  },
  text: {
    fontSize: 22,
    color: "white",
    fontWeight: 'bold'
  }
}
);

export default Logo
