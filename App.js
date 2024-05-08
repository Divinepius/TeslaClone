import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarsList from './component/CarsList';
import Header from './component/Header';

export default function App() {
  return (
    <View style={styles.container}>

      <Header/>
      <CarsList/>
{/* 
      <CarItem
        name={'Model 3'}
        tagline={'Order Online For'}
        taglineCTA={'Touchless Delivery'}
        image={require ('./assets/images/Model3.jpeg')}
      /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
