import React from 'react';
import {
    Modal, Text, TouchableOpacity, View
} from 'react-native';
import { styleModal } from './styleModal';

function ModalBreakTime({ visible, onStartBreak }) {
    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
            <View style={styleModal.modalOverlay}>
                <View style={styleModal.modalContainer}>
                    <Text style={styleModal.modalTitle}>Tempo de trabalho finalizado!</Text>
                    <Text style={styleModal.modalMessage}>Deseja iniciar o tempo de descanso?</Text>
                    <TouchableOpacity style={styleModal.modalButton} onPress={onStartBreak}>
                        <Text style={styleModal.modalButtonText}>Iniciar Descanso</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default ModalBreakTime;
