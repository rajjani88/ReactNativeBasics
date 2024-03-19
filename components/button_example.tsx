import { Button, Pressable, Text, View } from "react-native";

export default function MyButtonExamlpe(){
  return (
    <View>
      <Text style = {{fontSize : 30}}> Button Example </Text>
      <View style = {{ padding : 14}}>
      <Button 
      title="Click Me" 
      color='red'
      onPress={
        ()=>{
        console.log("Button 1 Clicked"); 
      }
    }
      /> 
      </View>
      <View style = {{ padding : 14}}>
      <Button title="Click 2" onPress={()=>{
        console.log("Button 2 Clicked"); 

      }}

      /> 
      </View>
      <Pressable onPress={()=>{
          console.log("Button 3 Clicked"); 
      }}>
      <View style = {{
        margin : 16,
        padding : 16,
        height : 100,
        width : 100,
        backgroundColor : 'orange'
      }}>
        <Text style= {{color : 'white', fontSize :18 }}>
          Click To Upload
        </Text>
      </View>
      </Pressable>
    </View>
  );
}