import React from "react"
import { StyleSheet, Text, View } from "react-native"

export const TareaScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.cajaMorada }>Caja 1</Text>
            <Text style={ styles.cajaNaranja }>Caja 1</Text>
            <Text style={ styles.cajaAzul }>Caja 1</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth:10, 
        borderColor: 'white',
        backgroundColor: 'purple',
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth:10, 
        borderColor: 'white',
        backgroundColor: 'orange',
        top: 50
    },
    cajaAzul: {
        width: 100,
        height: 100,
        borderWidth:10, 
        borderColor: 'white',
        backgroundColor: 'blue',
    }
})