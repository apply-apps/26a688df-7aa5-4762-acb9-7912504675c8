// Filename: index.js
// Combined code from all files
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View, FlatList, TouchableOpacity, TextInput } from 'react-native';

const mockData = [
    { id: '1', caseNumber: '001', status: 'In Progress', description: 'Routine Checkup', details: 'Details about Routine Checkup' },
    { id: '2', caseNumber: '002', status: 'Completed', description: 'Dental Cleaning', details: 'Details about Dental Cleaning' },
    { id: '3', caseNumber: '003', status: 'Pending', description: 'Orthodontic Consultation', details: 'Details about Orthodontic Consultation' },
    { id: '4', caseNumber: '004', status: 'In Progress', description: 'Dermatology Consultation', details: 'Details about Dermatology Consultation' },
    { id: '5', caseNumber: '005', status: 'Completed', description: 'Eye Exam', details: 'Details about Eye Exam' },
];

export default function App() {
    const [caseData, setCaseData] = useState(mockData);
    const [selectedCase, setSelectedCase] = useState(null);
    const [addingCase, setAddingCase] = useState(false);

    const addNewCase = (newCase) => {
        setCaseData([...caseData, newCase]);
        setAddingCase(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            {!selectedCase && !addingCase && (
                <>
                    <Text style={styles.title}>Clinic Case Tracker</Text>
                    <CaseList caseData={caseData} onCaseSelect={setSelectedCase} />
                    <Button title="Add New Case" onPress={() => setAddingCase(true)} />
                </>
            )}
            {selectedCase && !addingCase && (
                <CaseDetail case={selectedCase} onBack={() => setSelectedCase(null)} />
            )}
            {addingCase && (
                <AddCaseForm onCancel={() => setAddingCase(false)} onSubmit={addNewCase} />
            )}
        </SafeAreaView>
    );
}

const CaseList = ({ caseData, onCaseSelect }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => onCaseSelect(item)}>
            <View style={styles.caseContainer}>
                <Text style={styles.caseNumber}>Case Number: {item.caseNumber}</Text>
                <Text style={styles.caseStatus}>Status: {item.status}</Text>
                <Text style={styles.caseDescription}>Description: {item.description}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={caseData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
        />
    );
};

const CaseDetail = ({ case: selectedCase, onBack }) => {
    return (
        <View style={styles.detailContainer}>
            <Text style={styles.detailTitle}>Case Number: {selectedCase.caseNumber}</Text>
            <Text style={styles.detailStatus}>Status: {selectedCase.status}</Text>
            <Text style={styles.detailDescription}>{selectedCase.description}</Text>
            <Text style={styles.detailDetails}>{selectedCase.details}</Text>
            <Button title="Back to Overview" onPress={onBack} />
        </View>
    );
};

const AddCaseForm = ({ onCancel, onSubmit }) => {
    const [caseNumber, setCaseNumber] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = () => {
        const newCase = {
            id: Math.random().toString(36).substr(2, 9),
            caseNumber,
            status,
            description,
            details,
        };
        onSubmit(newCase);
    };

    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Add New Case</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Case Number" 
                value={caseNumber}
                onChangeText={setCaseNumber}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Status" 
                value={status}
                onChangeText={setStatus}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Description" 
                value={description}
                onChangeText={setDescription}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Details" 
                value={details}
                onChangeText={setDetails}
            />
            <View style={styles.buttonContainer}>
                <Button title="Cancel" onPress={onCancel} />
                <Button title="Submit" onPress={handleSubmit} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    list: {
        flexGrow: 1,
        paddingHorizontal: 20,
    },
    caseContainer: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    caseNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    caseStatus: {
        fontSize: 14,
        color: '#4CAF50',
        marginBottom: 10,
    },
    caseDescription: {
        fontSize: 14,
        color: '#777',
    },
    detailContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    detailTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    detailStatus: {
        fontSize: 16,
        color: '#4CAF50',
        marginBottom: 10,
    },
    detailDescription: {
        fontSize: 16,
        marginBottom: 20,
    },
    detailDetails: {
        fontSize: 14,
        color: '#777',
        marginBottom: 20,
    },
    formContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    formTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});