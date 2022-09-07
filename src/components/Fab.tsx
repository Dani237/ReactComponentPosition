import React from "react"
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native"

interface Props {
    title: string,
    position?: 'br' | 'bl',
    onPress: () => void,
}

export const Fab = ( { title, onPress, position = 'br' }: Props ) => {

    const ios = () => {
        return (
            <TouchableOpacity
                style={ [styles.botonPosition, (position === 'br') ? styles.botonPositionRight : styles.botonPositionLeft] }
                onPress={ onPress }
            >
                <View style={ styles.boton }>
                    <Text style={ styles.botonText }> { title } </Text>
                </View>
            </TouchableOpacity>
        )
        
    }

    const android = () => {
        return (
            <View
                style={ [styles.botonPosition, (position === 'br') ? styles.botonPositionRight : styles.botonPositionLeft] }
            >
                <TouchableNativeFeedback
                     onPress={ onPress }
                     background={ TouchableNativeFeedback.Ripple('black', false, 30) }
                >
                <View style={ styles.boton }>
                    <Text style={ styles.botonText }> { title } </Text>
                </View>
                </TouchableNativeFeedback>
            </View>
            
        )
    }

    return Platform.OS === 'ios' ? ios() : android()
}

const styles = StyleSheet.create ({
    botonPosition: {
        position: "absolute",
        bottom: 25,
    },
    botonPositionLeft: {
        left: 25
    },
    botonPositionRight: {
        right: 25
    },
    boton: {
        backgroundColor: 'gray',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    botonText: {
        color: 'white',
        fontSize: 25,
        alignSelf: 'center'
    }
})