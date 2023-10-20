import React, {useCallback} from "react";
import {useFonts} from "expo-font";
import {
    Text,
    View,
    Image, StyleSheet
} from "react-native";

const SplashScreen = () => {
    let [fontsLoaded] = useFonts({
        Teko_Light: require("../../../assets/fonts/Teko-Light.ttf"),
        Teko_Bold: require("../../../assets/fonts/Teko-Bold.ttf")
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../../assets/Logo.png")}
            />
            <Text style={styles.title}> AUTO AXIS</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1E1F22"
    },
    logo: {
        width: 208,
        height: 128
    },
    title: {
        fontFamily: "Teko_Bold",
        color: "white",
        fontSize: 40,
        letterSpacing: 4
    }
});

export default SplashScreen;
