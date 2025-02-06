import { StyleSheet } from "react-native";

export const styleModal = StyleSheet.create({
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

    modalMessage: {
        fontSize: 16,
        marginBottom: 20
    },
    modalButton: {
        backgroundColor: '#28A745',
        padding: 15,
        width: '100%',
        alignItems: 'center',
        borderRadius: 8
    },
    modalButtonText: {
        color: '#FFF',
        fontSize: 18
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
})
