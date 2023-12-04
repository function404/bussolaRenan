import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native";

import Header from '../components/Header';

const HomeScreen = ({navigation}) => {
    return (
      <>
        <Header title='Início' />
          <View style={styles.container}>
              <Text style={styles.titleText}>Equipe: Lincoln e Rogério</Text>
              <View style={styles.content}>              
                <Text style={styles.subTitleText}>Veja a nossa Bússola</Text>
                <Button style={styles.btn} title='bússola' onPress={() => navigation.navigate('Bussola')}/>
              </View>
          </View>
      </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      // justifyContent: 'center',
    },
    titleText: {
      paddingTop: 35,
      fontSize: 20,
      fontWeight: "bold",
    },
    content:{
      height: '70%',
      justifyContent: 'center',
    },
    subTitleText:{
      paddingBottom: 15,
      fontSize: 15,
      fontWeight: "bold",
    },
    btn:{
      paddingTop: 15,
    }
  });

export default HomeScreen;
