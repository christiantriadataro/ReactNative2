import React from "react";
import {useFonts} from "expo-font";
import {
    View,
    Image, StyleSheet, ImageBackground,
} from "react-native";
import {
    Button, Text
} from "react-native-paper";
import backgroundImage from "../../../assets/background.png";

const Authen = () => {
    let [fontsLoaded] = useFonts({
        Teko_Light: require("../../../assets/fonts/Teko-Light.ttf"),
        Teko_Bold: require("../../../assets/fonts/Teko-Bold.ttf")
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={backgroundImage}>
                <View style={styles.logoWhole}>
                    <Image
                        style={styles.logo}
                        source={require("../../../assets/Logo.png")}
                    />
                    {/*<Text style={styles.title}> AUTO AXIS</Text>*/}
                    <View style={{
                        width: "80%",
                        gap: 26
                    }}>
                        <Button
                            mode="contained"
                            textColor="rgba(0, 0, 0, 0.8)" style={{
                            borderRadius: 5,
                            backgroundColor: "gray"
                        }}
                            onPress={() => console.log("Pressed")}>
                            <Text style={{
                                letterSpacing: 3,
                                fontWeight: "700",
                                fontSize: 16
                            }}>Login</Text>
                        </Button>
                        <Button
                            mode="contained"
                            textColor="rgba(0, 0, 0, 0.8)" style={{
                            borderRadius: 5,
                            backgroundColor: "#D4AF37"
                        }}
                            onPress={() => console.log("Pressed")}>
                            <Text style={{
                                letterSpacing: 3,
                                fontWeight: "700",
                                fontSize: 16,
                                color: "#78060C"
                            }}>Register</Text>
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        backgroundColor: "#1E1F22"
    },
    image: {
        marginTop: 150,
        height: "100%",
        resizeMode: "cover",
        width: "100%"
    },
    logoWhole: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 208,
        height: 128,
        marginBottom: 150
    },
    title: {
        fontFamily: "Teko_Bold",
        color: "white",
        fontSize: 40,
        letterSpacing: 4
    }
});

export default Authen;
