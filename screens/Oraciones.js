import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import MainFrame from '../components/MainFrame'

import { OracionesData } from '../data/Oraciones'

const Oraciones = props => {

    const listOraciones = OracionesData.map((oracion) =>
        <Boton key={oracion.id} debug={oracion} navigation={props.navigation} list={oracion.id} titulo={oracion.titulo} >{oracion.titulo}</Boton>
    );

    return (
        <MainFrame>
            <View style={styles.container}>
                {listOraciones}
            </View>
        </MainFrame>

    );
}

const Boton = props => {
    //console.log(props.debug)
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Oracion', {
            id: props.list,
            titulo: props.titulo,
            param: 'asdf'
        })}>
            <View style={styles.item}>
                <Text numberOfLines={1} style={styles.title}>{props.list}.- {props.titulo}</Text>
            </View>
        </TouchableOpacity>
    )
}

export const oracionesScreenOptions = navData => {
    return {
        headerShown: true
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    item: {
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 4,
        borderColor: '#ccc',
        borderWidth: 1,
        width: 300,
        maxWidth: '95%',
        borderRadius: 80
    },
    title: {
        fontSize: 20,
    },

});

export default Oraciones