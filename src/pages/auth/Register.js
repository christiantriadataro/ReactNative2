import React, {useState, useEffect} from "react";
import {useFonts} from "expo-font";
import {
    View,
    Image, StyleSheet, ImageBackground,
} from "react-native";
import {
    Button, Text, TextInput
} from "react-native-paper";
import backgroundImage from "../../../assets/background.png";
import {post} from "axios";
import LatestId from "../../functional/LatestId";

const baseUrl = "http://127.0.0.1:8000";

const Register = () => {
    let [fontsLoaded] = useFonts({
        Teko_Light: require("../../../assets/fonts/Teko-Light.ttf"),
        Teko_Bold: require("../../../assets/fonts/Teko-Bold.ttf"),
        Poppins_Black: require("../../../assets/fonts/Poppins-Black.ttf"),
        Poppins_Bold: require("../../../assets/fonts/Poppins-Bold.ttf")
    });
        const [emailText, setEmailText] = React.useState("");
        const [firstNameText, setFirstNameText] = React.useState("");
        const [lastNameText, setLastNameText] = React.useState("");
        const [passwordText, setPasswordText] = React.useState("");
        const [confirmPasswordText, setconfirmPasswordText] = React.useState("");

        const [latestId, setLatestId] = useState(null);
        const onChangeEmailHandler = (emailText) => {
            setEmailText(emailText);
        };
        const onChangeLastNameHandler = (lastNameText) => {
            setLastNameText(lastNameText);
        };
        const onChangeFirstNameHandler = (firstNameText) => {
            setFirstNameText(firstNameText);
        };
        const onChangePasswordHandler = (passwordText) => {
            setPasswordText(passwordText);
        };
        const onChangeConfirmPasswordHandler = (confirmPasswordText) => {
            setconfirmPasswordText(confirmPasswordText);
        };

    const fetchData = async () => {
        const maxId = await LatestId();
        setLatestId(maxId);
    };

        // useEffect(() => {
        //     const fetchData = async () => {
        //         const maxId = await LatestId();
        //         setLatestId(maxId);
        //     };
        //
        //     fetchData();
        // }, []);


        if (!fontsLoaded) {
            return null;
        }



        const onRegisterHandler = async (event) => {
            alert(fetchData());
            // if (passwordText !== confirmPasswordText) {
            //     alert("Password is not equal to Confirm Password");
            //     return;
            // }
            // alert("Registered Complete!")
            //
            //
            // try {
            //     const response = await axios.post(`${baseUrl}/api/customers`, {
            //         "password": passwordText,
            //         "last_login": null,
            //         "is_superuser": false,
            //         "email": emailText,
            //         "first_name": firstNameText,
            //         "last_name": lastNameText,
            //         "phone": null,
            //         "address": "",
            //         "is_active": true,
            //         "is_staff": false,
            //         "customuser_ptr": null,
            //         "groups": [],
            //         "user_permissions": []
            //     });
            //
            //     if (response.status === 201) {
            //         alert(` You have created: ${JSON.stringify(response.data)}`);
            //         setIsLoading(false);
            //         setFullName("");
            //         setEmail("");
            //     } else {
            //         throw new Error("An error has occurred");
            //     }
            // } catch (error) {
            //     alert("An error has occurred");
            //     setIsLoading(false);
            // }
        };

        return (
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={backgroundImage}>
                    <View style={styles.logoWhole}>
                        <Image
                            style={styles.logo}
                            source={require("../../../assets/Logo.png")}
                        />
                        <Text style={styles.title}>{latestId}</Text>
                        <View style={{width: "80%", gap: 12, marginBottom: 150}}>
                            <Text style={styles.heading2}>Sign in</Text>
                            <TextInput
                                placeholder="First Name"
                                value={firstNameText}
                                mode="outlined"
                                onChangeText={onChangeFirstNameHandler}
                                textColor="rgba(0, 0, 0, 0.8)" style={{
                                borderRadius: 5,
                                backgroundColor: "#B5BAC1",
                                height: 40
                            }}
                            />
                            <TextInput
                                placeholder="Last Name"
                                value={lastNameText}
                                mode="outlined"
                                onChangeText={onChangeLastNameHandler}
                                textColor="rgba(0, 0, 0, 0.8)" style={{
                                borderRadius: 5,
                                backgroundColor: "#B5BAC1",
                                height: 40
                            }}
                            />
                            <TextInput
                                placeholder="Email"
                                value={emailText}
                                mode="outlined"
                                onChangeText={onChangeEmailHandler}
                                textColor="rgba(0, 0, 0, 0.8)" style={{
                                borderRadius: 5,
                                backgroundColor: "#B5BAC1",
                                height: 40
                            }}
                            />
                            <TextInput
                                placeholder="Password"
                                value={passwordText}
                                mode="outlined"
                                onChangeText={onChangePasswordHandler}
                                textColor="rgba(0, 0, 0, 0.8)" style={{
                                borderRadius: 5,
                                backgroundColor: "#B5BAC1",
                                height: 40,
                            }}
                            />
                            <TextInput
                                placeholder="Confirm Password"
                                value={confirmPasswordText}
                                mode="outlined"
                                onChangeText={onChangeConfirmPasswordHandler}
                                textColor="rgba(0, 0, 0, 0.8)" style={{
                                borderRadius: 5,
                                backgroundColor: "#B5BAC1",
                                height: 40,
                            }}
                            />
                            <Button
                                mode="contained"
                                textColor="rgba(0, 0, 0, 0.8)" style={{
                                borderRadius: 5,
                                backgroundColor: "#D4AF37",
                                height: 40,
                            }}
                                onPress={onRegisterHandler}>
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
    }
;

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
    },
    title: {
        fontFamily: "Teko_Bold",
        color: "white",
        fontSize: 40,
        letterSpacing: 4,
    },
    heading2: {
        fontFamily: "Poppins_Bold",
        color: "white",
        fontSize: 22,
        letterSpacing: 2,
        alignSelf: 'center'
    }
});

export default Register;
