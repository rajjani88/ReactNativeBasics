import React from "react";
import { Text, View } from "react-native";



const Greet = (props : {name : string}) => {
    return (
        <View>
            
            <Text> Hello, {props.name} </Text>
        </View>
    );
}

export default Greet