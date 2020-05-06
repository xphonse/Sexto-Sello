import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import MainFrame from '../components/MainFrame'

import { OracionesData } from '../data/Oraciones'

const Contenido = props => {

    const style = props.datos.estilo
    console.log(style)

    let newText = props.datos.texto.split('/n').map(text => {
        return (<View style={styles.parrafoView}>

            <Text style={styles.parrafo}>{text}
            </Text>
        </View>)
    })


    return (

        <View style={styles.parrafoView}>
            <Text style={styles.parrafo}></Text>
            {newText}
        </View>
    )
}

const Oracion = props => {

    const idOracion = props.route.params.id;
    const { titulo } = props.route.params;
    const aFiltrar = OracionesData[idOracion - 1].contenido

    const listaParrafos = aFiltrar.map((oracion) =>
        <View>
            <Contenido datos={oracion} key={Math.random()} />
        </View>
    );

    return (
        <MainFrame><ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>{titulo}</Text>
                {listaParrafos}
            </View>
        </ScrollView>
        </MainFrame>

    );
}

export const oracionScreenOptions = navData => {
    const { titulo } = navData.route.params;
    return {
        title: titulo
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10,
    },
    item: {
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 4,
        marginHorizontal: 16,
        width: '90%',
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    },
    parrafo: {
        fontSize: 16,
        textAlign: 'justify',
        lineHeight: 24,

    },
    parrafoView: {
        paddingVertical: 6,
        width: '100%',
    }

});

export default Oracion