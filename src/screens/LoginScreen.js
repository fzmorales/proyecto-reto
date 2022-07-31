import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import FormLogin from '../components/FormLogin';
import { useLogin } from '../context/LoginProvider';

const LoginScreen = ({ navigation }) => {
    const { isNewUser } = useLogin();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>INICIAR SESIÓN</Text>
                </View>
                <View style={styles.form}>
                    {isNewUser && (
                        <View style={styles.successMessage}>
                            <Text style={styles.successText}>Usuario creado correctamente</Text>
                        </View>
                    )}
                    <FormLogin />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignUp")}
                        style={styles.linkContainer}>
                        <Text style={styles.linkText}>Registrarme</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#F5F5F5',
        marginHorizontal: 18,
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
    successMessage: {
        backgroundColor: '#DCF1E1',
        paddingHorizontal: 10,
        paddingVertical: 14
    },
    successText: {
        color: '#518F60'
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
        paddingBottom: 20,
        backgroundColor: '#FFF'
    },
    linkContainer: {
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#1469BE',
        paddingHorizontal: 4
    },
    linkText: {
        textAlign: 'center',
        color: '#1469BE',
        fontSize: 12,
        fontWeight: '700'
    }
})