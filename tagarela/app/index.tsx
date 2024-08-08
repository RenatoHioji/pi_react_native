import { ImageBackground, Text, View } from "react-native";
import Header from "@/components/header/Header";


export default function Home() {
  return (
    <ImageBackground source={require('../assets/images/background-main.png')}
    style={{flex: 1}}>
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Header page_name="ÍNICIO"/>
    </View>
    </ImageBackground>
  );
}
