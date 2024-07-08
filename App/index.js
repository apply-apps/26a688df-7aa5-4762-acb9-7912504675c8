// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';

const mockData = [
    { id: '1', caseNumber: '001', status: 'In Progress', description: 'Routine Checkup', details: 'Details about Routine Checkup' },
    { id: '2', caseNumber: '002', status: 'Completed', description: 'Dental Cleaning', details: 'Details about Dental Cleaning' },
    { id: '3', caseNumber: '003', status: 'Pending', description: 'Orthodontic Consultation', details: 'Details about Orthodontic Consultation' },
    { id: '4', caseNumber: '004', status: 'In Progress', description: 'Dermatology Consultation', details: 'Details about Dermatology Consultation' },
    { id: '5', caseNumber: '005', status: 'Completed', description: 'Eye Exam', details: 'Details about Eye Exam' },
];

const App = () => {
    const [selectedCase, setSelectedCase] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            {!selectedCase ? (
                <>
                    <Text style={styles.title}>Clinic Case Tracker</Text>
                    <CaseList caseData={mockData} onCaseSelect={setSelectedCase} />
                </>
            ) : (
                <CaseDetail case={selectedCase} onBack={() => setSelectedCase(null)} />
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
});

export default App;