import React from "react";
import {View, Text, StyleSheet} from "react-native";


const Map = (props) => {
    const colorStyle = {
        backgroundColor: props.hexCode
    }
    return (
        <View style={[styles.box, colorStyle]}>
            <Text style={styles.text}>
                {props.colorName} - {props.hexCode}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default Map;