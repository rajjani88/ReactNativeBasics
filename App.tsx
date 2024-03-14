import {  Button, ScrollView, Text, View } from "react-native";
import StudentName from './components/student_name';
import Register from "./components/register_form";
import MyImage from "./components/my_image";

export default function App(){
  return (
   <MyImage/>
  );
}


// Basic Text Eample
/*
  <View>
      <Text style = {{fontSize : 30}}> 1. 
      <Text style = {{color : 'red',}}> Hello world BOC</Text>
      </Text>
    </View>

*/