import React from 'react';
import {
    View,
    Text,
    StyleSheet, FlatList
} from "react-native";


const Foods = [
    'Apples',
    'Broccoli',
    'Cookies',
    'Doritos',
    'Eclairs'
]

const Food = (props) => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    )
}

const FoodList = () => {
    return (
        <FlatList
            data={Foods}
            renderItem={({item}) => <Food name={item}/>}
        />
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'teal',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        flex: 1
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
})


export default FoodList;