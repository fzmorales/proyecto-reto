import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import FormLogin from '../components/FormLogin'

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
            <View style={{backgroundColor:'#29367C'}}>
             <Text style={styles.title}>INICIAR SESIÓN</Text>
            </View>
            <View style={{paddingHorizontal:19, paddingTop: 18}}>
                <FormLogin/>
                
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() =>navigation.navigate("SignUp")} style={{marginTop:50, borderBottomWidth:1, borderBottomColor: '#1469BE', paddingHorizontal: 4}}>
                    <Text style={{textAlign: 'center', color: '#1469BE', fontSize: 12, fontWeight: '700'}}>Registrarme</Text>
                </TouchableOpacity>
                </View>
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
    formContainer: {
        backgroundColor: '#FFF',
        paddingBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 6
          },
        shadowOpacity: 0.1,
        shadowRadius: 6
    },
    title: {
        color: '#FFF', 
        textAlign: 'center', 
        fontSize: 24, 
        fontWeight:'700', 
        lineHeight: 55
    }
})