import {View, Button, Text} from 'react-native';
import React from "react";


function MyDemo(props  : {
    stdName : string
}) {
    return (
        <View>
            <Text
            style ={{
                fontSize : 23
            }}
            >Student : {props.stdName}</Text>
        </View>
    );
}

export default MyDemo;

