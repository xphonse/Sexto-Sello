import React from 'react';
import { View, StyleSheet, ScrollView, StatusBar } from 'react-native';

let statusBarHeight = StatusBar.currentHeight;


const MainScreen = props => {


    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.screen}>
                {props.children}
            </View>
       </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#fff',
    }
});

export default MainScreen;