// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';

const mockData = [
    { id: '1', caseNumber: '001', status: 'In Progress', description: 'Routine Checkup' },
    { id: '2', caseNumber: '002', status: 'Completed', description: 'Dental Cleaning' },
    { id: '3', caseNumber: '003', status: 'Pending', description: 'Orthodontic Consultation' },
    { id: '4', caseNumber: '004', status: 'In Progress', description: 'Dermatology Consultation' },
    { id: '5', caseNumber: '005', status: 'Completed', description: 'Eye Exam' },
];

const CaseList = ({ caseData }) => {
    const renderItem = ({ item }) => (
        <View style={styles.caseContainer}>
            <Text style={styles.caseNumber}>Case Number: {item.caseNumber}</Text>
            <Text style={styles.caseStatus}>Status: {item.status}</Text>
            <Text style={styles.caseDescription}>Description: {item.description}</Text>
        </View>
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

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Clinic Case Tracker</Text>
            <CaseList caseData={mockData} />
        </SafeAreaView>
    );
}

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
    }
});