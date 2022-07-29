import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import FormRegister from '../components/FormRegister'

const SignUpScreen = ({ navigation }) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={{backgroundColor:'#29367C'}}>
                 <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 24, fontWeight:'700', lineHeight: 55}}>REGISTRARME</Text>
                </View>
                <View style={{paddingHorizontal:19, paddingTop: 18}}>
                    <FormRegister/>
                    
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() =>navigation.goBack()} style={{marginTop:50, borderBottomWidth:1, borderBottomColor: '#1469BE', paddingHorizontal: 14}}>
                        <Text style={{textAlign: 'center', color: '#1469BE', fontSize: 12, fontWeight: '700'}}>Cancelar</Text>
                    </TouchableOpacity>
                    </View>
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
    }
})