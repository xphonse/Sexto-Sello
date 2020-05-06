import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainFrame from '../components/MainFrame'
import TitleButton from '../components/TitleButton';



const Home = props => {
    return (
        <MainFrame>
            <View style={styles.container}>
                <View style={styles.h1View}>
                    <Text style={styles.h1} >Oraciones y Coros dados al</Text>
                    <Text style={styles.h2}>Sexto Sello</Text>
                </View>
                <TitleButton navigation={props.navigation} styles={styles} goTo='Oraciones' >Oraciones</TitleButton>
                <TitleButton navigation={props.navigation} styles={styles} goTo='Cantos'>Canticos</TitleButton>
                <TitleButton navigation={props.navigation} styles={styles} goTo='Informacion'>Información</TitleButton>

            </View>
        </MainFrame>
    );
}

export const homeScreenOptions = navData => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        fontSize: 24
    },
    h1View: {
        padding: 20,
        alignItems: 'center'
    },
    h2: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    Button: {
        borderColor: '#ccc',
        borderWidth: 1,
        margin: 5,
        padding: 20,
        width: 180,
        alignItems: 'center',
        borderRadius: 80
    }
});

export default Home;
