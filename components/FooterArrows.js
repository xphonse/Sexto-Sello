import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const FooterArrows = props => {
    let id = parseInt(props.id);
    let leftDisabled, rightDisabled, iconColor

    {props.id == 0 ? leftDisabled = true : leftDisabled = false}
    { props.id == (parseInt(props.noData) - 1) ? rightDisabled = true : rightDisabled = false }





    return (
        <View style={styles.footerArrows}>

            <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} disabled={leftDisabled}
                onPress={() => props.navigation.navigate(props.sendTo,
                    {
                        id: id - 1,
                        titulo: "asdf"
                    }
                )}
                style={styles.icons}>
                <Ionicons name="md-arrow-back" size={32} color='black' />
            </TouchableOpacity>
            <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} disabled={rightDisabled}
                onPress={() =>
                    props.navigation.navigate(props.sendTo,
                        {
                            id: id + 1,
                            titulo: "asdf"
                        }
                    )}

                style={styles.icons}>
                <Ionicons name="md-arrow-forward" size={32} color='black' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footerArrows: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
})


export default FooterArrows