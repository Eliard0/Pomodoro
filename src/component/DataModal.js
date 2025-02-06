import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View
} from 'react-native';

function DataModal({ isVisible, onClose, onRegister }) {
  const [workTime, setWorkTime] = useState('');
  const [breakTime, setBreakTime] = useState('');

  const handleRegister = () => {
    if (!workTime || !breakTime) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    onRegister(workTime, breakTime);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback onPress={() => { }} >
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Definir Tempos</Text>

                <Text style={styles.inputLabel}>Tempo de Trabalho (min):</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={workTime}
                  onChangeText={setWorkTime}
                />

                <Text style={styles.inputLabel}>Tempo de Descanso (min):</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={breakTime}
                  onChangeText={setBreakTime}
                />

                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={handleRegister}
                >
                  <Text style={styles.registerButtonText}>Registrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.closeModalButton}
                  onPress={onClose}
                >
                  <Text style={styles.closeModalButtonText}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B263B'
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#28A745',
    padding: 15,
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  registerButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  closeModalButton: {
    backgroundColor: '#FF5C5C',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
  },
  closeModalButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default DataModal;
