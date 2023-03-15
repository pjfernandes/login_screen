import React from 'react'
import { TextInput, StyleSheet, Button, View} from 'react-native'
import { useState } from 'react';

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);

  const buttonPress = () => {
    console.log(email);
    console.log(password)
    setDisabled(!disabled);
  };

  return (
    <View style={styles.container}>
      <TextInput onChange={(e) => setEmail(e.target.value)
      } style={styles.input} placeholder={'E-mail'}></TextInput>
      <TextInput onChange={(e) => setPassword(e.target.value)} style={styles.input} placeholder={'Password'}></TextInput>
      <Button disabled={
        disabled
      } onPress={buttonPress} style={styles.button} title="Login"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,

  },
  input: {
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 1,
    width: "90%"
  },
});

export default LoginForm
