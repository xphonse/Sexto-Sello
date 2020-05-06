import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const TitleButton = props => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate(props.goTo)} >
            <View style={props.styles.Button}>
                <Text>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}



export default TitleButton