import React from 'react';
import {
    View,
    Text,
    StyleSheet, SectionList
} from "react-native";

const FOODS = [
    {'title': 'Healthy', data: ['Apple', 'Mango']},
    {'title': 'Not Healthy', data: ['Cookie', 'Chips']}
]

const Food = (props) => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    );
}

const FetchMap = () => {
    return (
        <SectionList
            sections={FOODS}
            renderItem={data => <Food name={data.item} />}
            renderSectionHeader={({ section }) => (
                <Text style={styles.heading}>{section.title}</Text>
            )}
        />
    );
};

const styles = StyleSheet.create({
    heading: {
        backgroundColor: 'white',
        height: 40,
        paddingHorizontal: 5,
        fontSize: 24,
        color: 'black'
    },
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


export default FetchMap;