import React, { useState } from 'react';
import {
  Alert, KeyboardAvoidingView, Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View
} from 'react-native';
import { styleModal } from './styleModal';

function DataModal({ isVisible, onClose, onRegister }) {
  const [workTime, setWorkTime] = useState('');
  const [breakTime, setBreakTime] = useState('');

  const handleRegister = () => {
    if (!workTime || !breakTime) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (isNaN(Number(workTime)) || isNaN(Number(breakTime))) {
      Alert.alert('Erro', 'Por favor, digite somente números.');
      return;
    }

    onRegister(Number(workTime), Number(breakTime));
    setWorkTime('');
    setBreakTime('');
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styleModal.modalOverlay}>
          <TouchableWithoutFeedback onPress={() => { }} >
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
              <View style={styleModal.modalContainer}>
                <Text style={styleModal.modalTitle}>Definir Tempos</Text>

                <Text style={styleModal.inputLabel}>Tempo de Trabalho (min):</Text>
                <TextInput
                  style={styleModal.input}
                  keyboardType="numeric"
                  value={workTime}
                  onChangeText={setWorkTime}
                />

                <Text style={styleModal.inputLabel}>Tempo de Descanso (min):</Text>
                <TextInput
                  style={styleModal.input}
                  keyboardType="numeric"
                  value={breakTime}
                  onChangeText={setBreakTime}
                />

                <TouchableOpacity
                  style={styleModal.registerButton}
                  onPress={handleRegister}
                >
                  <Text style={styleModal.registerButtonText}>Registrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styleModal.closeModalButton}
                  onPress={onClose}
                >
                  <Text style={styleModal.closeModalButtonText}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default DataModal;
