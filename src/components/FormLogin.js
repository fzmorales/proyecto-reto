import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import { useLogin } from '../context/LoginProvider';

const FormLogin = () => {
    const { setIsLoggedIn, setIsNewUser } = useLogin();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async () => {
        setIsNewUser(false);
        setErrorMsg("");
        try {
            const usuarios = await firestore().collection('users').doc(username).get();
            if (usuarios.data()) {
                if(password === usuarios.data().password){
                    console.log('Inicio Sesión');
                    setIsLoggedIn(true);
                } else {
                    setErrorMsg('Contraseña incorrecta');
                }
            } else {
                setErrorMsg('Usuario no encontrado');
            }
        } catch (e) {
            console.log(e)
        }
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
            {errorMsg && (
                <View>
                    <Text style={styles.errorText}>{errorMsg}</Text>
                </View>
            )}
            <View style={{ marginTop: 70, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={()=>handleSubmit()}
                    style={{ backgroundColor: '#5CB85C', paddingHorizontal: 34, paddingVertical: 12 }}>
                    <Text style={{ fontSize: 12, fontWeight: '700', color: '#FFF' }}>INGRESAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FormLogin

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