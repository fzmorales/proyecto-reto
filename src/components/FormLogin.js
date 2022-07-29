import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const FormLogin = () => {
  return (
    <View>
        <View style={{flexDirection:'row', borderBottomWidth: 1, borderBottomColor:'#000', paddingVertical: 5, marginVertical:10}}>
            <Icon name="person" size={25} color="#6F6F6F" />
            <TextInput autoCapitalize='none' placeholderTextColor={'rgba(0,0,0,0.5)'} placeholder={'Usuario'} style={styles.inputText}/>
        </View>
        <View style={{flexDirection:'row', borderBottomWidth: 1, borderBottomColor:'#000', paddingVertical: 5, marginVertical:10}}>
            <Icon name="lock" size={25} color="#6F6F6F"/>
            <TextInput placeholderTextColor={'rgba(0,0,0,0.5)'} placeholder={'Contraseña'} style={styles.inputText} secureTextEntry={true}/>
        </View>

        <View style={{marginTop: 70, flexDirection:'row', justifyContent: 'center'}}>
            <TouchableOpacity style={{backgroundColor:'#5CB85C', paddingHorizontal: 34, paddingVertical: 12}}>
                <Text style={{fontSize: 12, fontWeight: '700', color:'#FFF'}}>INGRESAR</Text>
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
    }
})