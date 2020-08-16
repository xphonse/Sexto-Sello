import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FooterArrows from '../components/FooterArrows'

import { CantosData } from '../data/Cantos'
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';

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
    const aFiltrar2 = CantosData.filter(Canto => Canto.id == idOracion)
    const aFiltrar3 = aFiltrar2[0].contenido
    const noData=CantosData.length;

    const listaParrafos = aFiltrar3.map((oracion) =>
        <View key={Math.random()} >
            <Contenido datos={oracion} key={Math.random()} />
        </View>
    );
    return (
        <View style={{ flex: 1 }}>
            <ScrollView 
            contentContainerStyle={{flexGrow: 1,padding:10,backgroundColor:'white'}}>
                <View style={styles.container}>
                    <Text style={styles.title}>{aFiltrar2[0].pag} - {aFiltrar2[0].titulo}</Text>
                    {listaParrafos}
                </View>
            </ScrollView>
            <FooterArrows sendTo='Canto' id={props.route.params.id} navigation={props.navigation} noData={noData} />
        </View>

    );
}

export const cantoScreenOptions = navData => {
    return {
        title: "CANTOS"
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
        textAlign: 'center',
        width:'100%'
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
    },


});

export default Canto