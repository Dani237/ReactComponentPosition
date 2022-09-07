import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Fab } from "../components/Fab";

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Contador : { contador }</Text>
            
            <Fab
                title="+1"
                onPress={ () => setContador(contador + 1) }
            />

            <Fab
                title="-1"
                position="bl"
                onPress={ () => setContador(contador - 1) }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 45,
        color: 'cyan',
        textAlign: 'center',
        top: -15
    },
    
})