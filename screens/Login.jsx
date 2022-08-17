
import { View, Text } from "react-native";
import { loginStyles } from "./../assets/styles";
import { Input } from 'react-native-elements'


function Login() {
  return (
    <View style={loginStyles.headerBar}>
      <Text style={loginStyles.headerText}> BocaGram</Text>

    </View>
  );
}

export default Login;
