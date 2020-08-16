import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import FooterArrows from '../components/FooterArrows'


import { OracionesData } from '../data/Oraciones'

const Contenido = props => {

    const style = props.datos.estilo

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
    const aFiltrar = OracionesData[idOracion].contenido
    const titulo = OracionesData[idOracion].titulo
    const noData=OracionesData.length;

    const listaParrafos = aFiltrar.map((oracion) =>
        <View>
            <Contenido datos={oracion} key={Math.random()} />
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10, backgroundColor: 'white' }}>
                <View style={styles.container}>
                <Text style={styles.title}>{OracionesData[idOracion].pag} - {titulo}</Text>
                {listaParrafos}
                </View>
            </ScrollView>
            <FooterArrows sendTo="Oracion" id={props.route.params.id} navigation={props.navigation} noData={noData} />
        </View>

    );
}

export const oracionScreenOptions = navData => {
    return {
        title: "ORACIONES"
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
        textAlign: 'center',
        width:'100%'
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