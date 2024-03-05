import { Text, View } from "react-native";
import Greet from "./components/greet";

export default function App(){
  return (
    <View>
      <Text> Hello world BOC</Text>
      <Greet name = "Raj"/>
    </View>
  );
}