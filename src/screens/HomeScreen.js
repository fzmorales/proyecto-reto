import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { useLogin } from '../context/LoginProvider';
import AccordionListItem from '../components/AccordionListItem';

const HomeScreen = () => {
    const { setIsLoggedIn } = useLogin();
    const logout = () => {
        setIsLoggedIn(false);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ padding: 10 }}>
                <View style={styles.header}>
                    <Text style={styles.optionTitle}>Opciones</Text>
                    <TouchableOpacity onPress={() => logout()}>
                        <Text>Cerrar sesión</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.optionsRow}>
                    <TouchableOpacity style={styles.optionItem}>
                        <Image source={require('../assets/carrito.png')}></Image>
                        <Text style={styles.optionText}>Carrito</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionItem}>
                        <Image source={require('../assets/bolsa.png')}></Image>
                        <Text style={styles.optionText}>Compras</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionItem}>
                        <Image source={require('../assets/mascarilla.png')}></Image>
                        <Text style={styles.optionText}>Salud</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.optionsRow}>
                    <TouchableOpacity style={styles.optionItem}>
                        <Image source={require('../assets/globo.png')}></Image>
                        <Text style={styles.optionText}>Aniversario</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionItem}>
                        <Image source={require('../assets/atencion.png')}></Image>
                        <Text style={styles.optionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionItem}>
                        <Image source={require('../assets/paquete.png')}></Image>
                        <Text style={styles.optionText}>Envío</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <AccordionListItem title={'Descubre'} bgColor={'#9FCBF7'}>
                    <Text style={styles.accordionText}>
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                        cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó
                        una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                        No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos
                        electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
                        creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente
                        con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                    </Text>
                </AccordionListItem>
                <AccordionListItem title={'Descubre'}>
                    <Text style={styles.accordionText}>
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                        cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó
                        una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                        No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos
                        electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
                        creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente
                        con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                    </Text>
                </AccordionListItem>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    optionText: {
        fontWeight: '100',
        color: '#4F4F4F',
        fontSize: 12
    },
    optionTitle: {
        color: '#4F4F4F'
    },
    optionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20
    },
    optionItem: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    accordionText: {
        fontWeight: '700',
        fontSize: 13,
        lineHeight: 15,
        textAlign: 'justify'
    }
})