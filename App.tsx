import {  Button, ScrollView, Text, View } from "react-native";
import StudentName from './components/student_name';
import Register from "./components/register_form";

export default function App(){
  return (
    <View>
      <Text>
        Custom View
      </Text>
      <Register/>
      <StudentName name = "JAY" />
      <StudentName name = "VIkas" />

    </View>
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