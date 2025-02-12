import React, { useEffect, useState } from 'react';
import {
  Platform,
  SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import DataModal from './component/DataModal';
import ModalBreakTime from './component/ModalBreakTime';

import Sound from 'react-native-sound';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';


function App() {
  const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

  const [statusTime, setStatusTime] = useState(false)
  const [activeModal, setActiveModal] = useState(false)

  const [workTime, setWorkTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(workTime);

  const [initBreakTime, setInitBreakTime] = useState(false)
  const [showBreakModal, setShowBreakModal] = useState(false)

  function handleCloseModal() {
    setActiveModal(!activeModal)
  }

  function handleRegister(newWorkTime, newBreakTime) {
    setWorkTime(newWorkTime * 60);
    setBreakTime(newBreakTime * 60);
    setTimeLeft(newWorkTime * 60);
    handleCloseModal();
  }

  useEffect(() => {
    let timer;
    if (statusTime && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (statusTime && timeLeft == 0) {
      clearInterval(timer);
      setStatusTime(false);

      if (!initBreakTime) {
        startSound()
        setShowBreakModal(true)
      } else {
        startSound()
        setTimeLeft(workTime)
        setInitBreakTime(false)
      }
    }

    return () => clearInterval(timer);
  }, [statusTime, timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""
      }${seconds}`;
  };

  function startBreak() {
    setShowBreakModal(false);
    setInitBreakTime(true);
    setTimeLeft(breakTime);
    setStatusTime(true);
  }

  function startSound() {
    Sound.setCategory('Playback');

    const baseOs = Platform.OS == 'ios' ? Sound.MAIN_BUNDLE : Sound.RES_RAW

    const sound = new Sound('school.mp3', baseOs, (error) => {
      if (error) {
        console.log('Erro ao carregar o som:', error);
        return;
      }
      sound.play((success) => {
        if (success) {
          console.log('Som tocado com sucesso!');
        } else {
          console.log('Erro ao tocar o som!');
        }
        sound.release();
      });
    });

    return () => {
      sound.release();
    };
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={'#1B263B'}
      />
      <View style={{position: 'absolute', top: 0}}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
      </View>

      <View style={styles.viewTime}>
        <Text style={[styles.textViewTime, { color: statusTime ? 'red' : '#000' }]}>{formatTime(timeLeft)}</Text>
        <TouchableOpacity
          style={[styles.actionsButton, { backgroundColor: statusTime ? 'red' : '#00A86B' }]}
          onPress={() => { if (timeLeft > 0) setStatusTime(!statusTime) }}>
          {statusTime == false ?
            <FontAwesome6 name="play" size={60} color='#F5F5F5' />
            :
            <FontAwesome6 name="pause" size={60} color='#F5F5F5' />
          }
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.viewButtonModal} onPress={() => setActiveModal(!activeModal)}>
        <AntDesign name="setting" size={60} color='#F5F5F5' />
      </TouchableOpacity>

      <ModalBreakTime visible={showBreakModal} onStartBreak={startBreak} />

      <DataModal
        isVisible={activeModal}
        onClose={handleCloseModal}
        onRegister={handleRegister}
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
    marginTop: '35%',
    alignItems: 'center',

  },
  textViewTime: {
    fontSize: 100,
    fontWeight: '500',
  },

  actionsButton: {
    marginTop: 30,
    width: '50%',
    height: '45%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonReset: {
    width: '90%',
    height: 50,
    backgroundColor: '#E07A5F',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 20
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
  },
});

export default App;
