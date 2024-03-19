import {  Button, ScrollView, Text, View } from "react-native";
import StudentName from './components/student_name';
import Register from "./components/register_form";
import MyImage from "./components/my_image";
import MyScrollView from "./components/scroll_view_example";
import MyButtonExamlpe from "./components/button_example";
import MyDemo from "./components/my_demo";

export default function App(){
  return (
    <View>
     <MyImage/>
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