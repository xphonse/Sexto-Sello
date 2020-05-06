import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MainFrame from '../components/MainFrame'

import { CantosData } from '../data/Cantos'

const Contenido = props => {

    let newText = props.datos.texto.split('/n').map(text => {
        return (<View style={styles.parrafoView}>

            <Text style={styles.linea}>
                {text}
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

const Canto = props => {

    const idOracion = props.route.params.id;
    const { titulo } = props.route.params;
    const aFiltrar2 = CantosData.filter(Canto => Canto.id == idOracion)
    const aFiltrar3= aFiltrar2[0].contenido

    const listaParrafos = aFiltrar3.map((oracion) =>
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

export const cantoScreenOptions = navData => {
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
    title: {
        fontSize: 20,
        textAlign: 'center'
    },
    parrafo: {
        fontSize: 16,
        textAlign: 'justify',
        lineHeight: 16,
    },
    linea: {
        fontSize: 16,
        textAlign: 'justify',
        lineHeight: 16,
    },
    parrafoView: {
        paddingVertical: 2,
        width: '100%',
    }

});

export default Canto