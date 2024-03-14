import { Image, Text, View, StyleSheet } from "react-native";

const MyImage = () => {
 return (
    <View>
        <View style = {mystyle.row}>
        <Image
        style = {mystyle.profile}
        source={ require ('../assets/profile.png')} 
        />
       <Text
       style = {mystyle.title}
       >My Image View</Text> 
       </View>
       <Image
       style = {mystyle.containerLogo}
       source={{uri : 'https://images.unsplash.com/photo-1710237103624-77e1c5b612a8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
       />
    </View>
 );
}

const mystyle = StyleSheet.create(
    {
        row : {
            alignItems : "center",
            maxHeight : 100,
            margin : 16,
            flexDirection : "row"
        },
        profile : {
            margin : 14,
            height : 56,
            width : 56,
        },
        title : {
            fontSize : 32,
            textAlign : "center",
            fontWeight : "400"
        },
        containerLogo : {
            margin : 16,
            height : 400,
            borderRadius : 12
        }
    }
);

export default MyImage;