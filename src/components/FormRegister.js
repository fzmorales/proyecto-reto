import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import { useLogin } from '../context/LoginProvider';

// Expresión regular para validar el password:
// Al menos 1 Minúscula, 1 Mayúscula, 1 Número, y 8 caracteres de longitud.
const PASWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/

const FormRegister = (props) => {
    const { setIsNewUser } = useLogin();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async () => {
        if (validate()) {
            try {
                const usuarios = await firestore().collection('users').doc(username).get();
                if (!usuarios.data()) {
                    addNewUser();
                } else {
                    setErrorMsg('Usuario ya existe')
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    const validate = () => {
        if (password !== confirmPassword) {
            setErrorMsg('Las contraseñas deben coincidir')
        } else if (!PASWORD_REGEX.test(password)) {
            setErrorMsg('La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula y un número')
        } else {
            setErrorMsg('')
        }
        isValidated = password === confirmPassword && PASWORD_REGEX.test(password)
        return isValidated;
    }

    const addNewUser = () => {
        firestore()
            .collection('users')
            .doc(username)
            .set({
                password,
            })
            .then(() => {
                setIsNewUser(true);
                props.navigation.goBack();
            });
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#000', paddingVertical: 5, marginVertical: 10 }}>
                <Icon name="person" size={25} color="#6F6F6F" />
                <TextInput
                    onChangeText={username => setUsername(username.toLowerCase())}
                    autoCapitalize='none'
                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                    placeholder={'Usuario'}
                    style={styles.inputText}
                >
                    {username}
                </TextInput>
            </View>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#000', paddingVertical: 5, marginVertical: 10 }}>
                <Icon name="lock" size={25} color="#6F6F6F" />
                <TextInput
                    onChangeText={password => setPassword(password)}
                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                    placeholder={'Contraseña'}
                    style={styles.inputText}
                    secureTextEntry={true}
                >
                    {password}
                </TextInput>
            </View>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#000', paddingVertical: 5, marginVertical: 10 }}>
                <Icon name="lock" size={25} color="#6F6F6F" />
                <TextInput
                    onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                    placeholder={'Confirmar contraseña'}
                    style={styles.inputText}
                    secureTextEntry={true}
                >
                    {confirmPassword}
                </TextInput>
            </View>
            {errorMsg && (
                <View>
                    <Text style={styles.errorText}>{errorMsg}</Text>
                </View>
            )}
            <View style={{ marginTop: 70, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => handleSubmit()} style={{ backgroundColor: '#5CB85C', paddingHorizontal: 34, paddingVertical: 12 }}>
                    <Text style={{ fontSize: 12, fontWeight: '700', color: '#FFF' }}>REGISTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FormRegister

const styles = StyleSheet.create({
    inputText: {
        marginLeft: 10,
        width: '100%'
    },
    errorText: {
        fontSize: 13,
        fontWeight: '300',
        color: '#F00'
    }
})