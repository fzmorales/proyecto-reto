import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import FormRegister from '../components/FormRegister';

const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>REGISTRARME</Text>
                </View>
                <View style={styles.form}>
                    <FormRegister navigation={navigation} />
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.linkContainer}>
                        <Text style={styles.linkText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.24)',
        paddingHorizontal: 18
    },
    headerContainer: {
        backgroundColor: '#29367C'
    },
    title: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 55
    },
    formContainer: {
        backgroundColor: '#FAFAFA',
        paddingBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 6
        },
        shadowOpacity: 0.1,
        shadowRadius: 6
    },
    form: {
        paddingHorizontal: 28,
        paddingTop: 18,
        backgroundColor: '#FFF',
        paddingBottom: 50
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    linkContainer: {
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#1469BE',
        paddingHorizontal: 14
    },
    linkText: {
        textAlign: 'center',
        color: '#1469BE',
        fontSize: 12,
        fontWeight: '700'
    }
})