
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import {SignUp} from "@components/SignUp";

export default function TabOneScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                Main Page
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
