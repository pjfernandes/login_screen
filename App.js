import { StyleSheet, Text, View } from 'react-native';
import HomeController from './components/HomeController';

export default function App() {
  return (
    <View >
      <HomeController style={styles.container}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
});
