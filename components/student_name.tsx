import React from "react";
import { Text, View } from "react-native";



const StudentName = (props : {name : string}) => {
    return (
        <View>
        <Text style ={{
          fontSize : 22,
          color : 'red'
        }}> Student of BCA 
        <Text
        style = {{
          color : 'black',
          fontWeight : "bold"
        }}
        > {props.name}</Text>
        </Text>
      </View>
    );
}

export default StudentName