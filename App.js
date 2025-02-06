import React, { useState } from 'react';
import {
  SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import DataModal from './src/component/DataModal';

function App() {
  const theme = useColorScheme()
  const [statusTime, setStatusTime] = useState(false)
  const [activeModal, setActiveModal] = useState(false)

  function handleCloseModal(){
    setActiveModal(!activeModal)
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={'#1B263B'}
      />
      <View style={styles.viewTime}>
        <Text style={styles.textViewTime}> 00:00 </Text>
        <TouchableOpacity style={styles.actionsButton} onPress={() => setStatusTime(!statusTime)}>
          {statusTime == false ?
            <FontAwesome6 name="play" size={60} color='#F5F5F5' />
            :
            <FontAwesome6 name="pause" size={60} color='#F5F5F5' />
          }
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonReset} onPress={() => {}}>
        <Text style={styles.textButtonReset}>Voltar para o início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.viewButtonModal} onPress={() => setActiveModal(!activeModal)}>
        <AntDesign name="setting" size={60} color='#F5F5F5' />
      </TouchableOpacity>

      <DataModal
        isVisible={activeModal}
        onClose={handleCloseModal}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B263B'
  },

  viewTime: {
    marginTop: '15%',
    alignItems: 'center',

  },
  textViewTime: {
    fontSize: 80,
    fontWeight: '500'
  },

  actionsButton: {
    backgroundColor: '#00A86B',
    marginTop: 30,
    width: '50%',
    height: '45%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonReset: {
    width: '100%',
    height: 50,
    backgroundColor: '#E07A5F',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },

  textButtonReset: {
    fontSize: 20,
    fontWeight: '500',
    color: '#F5F5F5'
  },

  viewButtonModal: {
    backgroundColor: '#778DA9',
    width: 85,
    height: 85,
    bottom: '5%',
    right: '5%',
    borderRadius: 35,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  }
});

export default App;
