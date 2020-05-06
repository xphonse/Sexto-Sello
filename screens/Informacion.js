import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Share } from 'react-native';
import MainFrame from '../components/MainFrame'

const onShare = async () => {
    try {
        const result = await Share.share({
            message: 'Descargar aplicación en Play Store: \n  https://play.google.com/store/apps/details?id=com.sextosello.cantos_y_coros'
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        alert(error.message);
    }
}

const Informacion = props => {
    return (
        <MainFrame>
            <View style={styles.container}>
                <View style={styles.h1View}>
                    <Text style={styles.h1} >Información</Text>

                </View>
                <View style={styles.informacionContainer} >
                    <Text style={styles.informacionText}>Las oraciones se encuentran en el mismo orden que en el "Libro de Oraciones dadas al Sexto Sello del Temlo del Medio Dia"</Text>
                </View>
                <View style={styles.informacionContainer} >
                    <Text style={styles.informacionText}>El numero que aparece junto a los canticos es el del numero de hoja en el que aparecen en el "Libro de Coros del Templo del Medio Dia" </Text>
                </View>
                <View style={styles.informacionContainer} >
                    <Text style={styles.informacionText}>Para cualquier duda, aclaración, sugerencia, corrección de errores o aporte: Por favor comunicarse al correo: </Text>
                </View>
                <View style={styles.correoContainer} >
                    <Text style={styles.informacionText}>christian.ramirez.gutierrez.92@gmail.com </Text>
                </View>
                <View style={{height:30}}></View>
                <TouchableOpacity onPress={onShare} >
                    <View style={styles.Button}>
                        <Text>Compartir aplicación</Text>
                    </View>
                </TouchableOpacity>

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
        justifyContent: 'flex-start',
        
    },
    h1: {
        fontSize: 24
    },
    h1View: {
        paddingVertical: 20,
        alignItems: 'center'
    },
    informacionText: {
        fontSize: 18,
        textAlign:'justify'
    },
    informacionContainer:{
        padding:10,
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

export default Informacion;