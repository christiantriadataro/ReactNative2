import React from "react";
import { Text, StyleSheet} from "react-native";
import { PaperProvider } from 'react-native-paper';
import Authen from "./src/pages/auth/Authen";
import Login from "./src/pages/auth/Login";
import Register from "./src/pages/auth/Register";
import {useFonts} from "expo-font";
import SplashScreen from "./src/pages/auth/SplashScreen";
const App = () => {
    // let [fontsLoaded] = useFonts({
    //     Teko_Light: require("./assets/fonts/Teko-Light.ttf"),
    //     Teko_Bold: require("./assets/fonts/Teko-Bold.ttf"),
    //     Poppins_Black: require("./assets/fonts/Poppins-Black.ttf"),
    //     Poppins_Bold: require("./assets/fonts/Poppins-Bold.ttf")
    // });
    return (
        <PaperProvider>
           <Register/>
        </PaperProvider>
    );
};

const style = StyleSheet.create({

})


export default App;


// const Stack = createStackNavigator();
// const App = () => {
//     return (
//         <NavigationContainer>
//             {/*<SplashScreen />*/}
//             <Authen />
//             {/*<Stack.Navigator>*/}
//             {/*<Stack.Screen name="Authen" component={Authen} />*/}
//             {/*<Stack.Screen name="ColorPalette" component={ColorPalette} />*/}
//             {/*</Stack.Navigator>*/}
//
//         </NavigationContainer>
//     );
// };