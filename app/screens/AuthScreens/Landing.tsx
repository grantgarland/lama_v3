import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import {
  View,
  TouchableHighlight,
  Image,
  Dimensions,
  ScrollView,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native"
import { Text } from "../../components"
import { AppStackScreenProps } from "../../navigators"
import { colors } from "../../theme"

const { width, height } = Dimensions.get("window")
const SCREEN_WIDTH = width < height ? width : height

const logo = require("../../../assets/icon.png")
interface LandingScreenProps extends AppStackScreenProps<"Landing"> {} // @demo remove-current-line

export const LandingScreen: FC<LandingScreenProps> = observer(function LandingScreen(_props) {
  const { navigation } = _props

  const onPressGetStarted = () => {
    navigation.navigate("Demo", { screen: "DemoShowroom" })
    // navigation.navigate("Email")
  }

  const onPressLogin = () => {
    navigation.navigate("Demo", { screen: "DemoShowroom" })
    // navigation.navigate("SignIn")
  }

  return (
    <ScrollView style={$screenContentContainer}>
      <View style={$header}>
        <Image style={$logo} source={logo} />
      </View>
      <View style={$infoContainer}>
        <Text style={$title}>Welcome to Lama</Text>
        <Text style={$description}>Your Language Learning Memory Assistant</Text>
      </View>

      <View style={$logContainer}>
        <TouchableHighlight
          underlayColor="rgba(73,182,77,1,0.9)"
          style={$btnContainer}
          onPress={() => onPressGetStarted()}
        >
          <Text style={$btnText}>Get Started</Text>
        </TouchableHighlight>

        <View style={$bottomRowContainer}>
          <Text style={$text}>Already have an account?</Text>
          <TouchableHighlight underlayColor="rgba(73,182,77,1,0.9)" onPress={() => onPressLogin()}>
            <Text style={$signText}>Sign in</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  )
})

const $screenContentContainer: TextStyle = {
  flex: 1,
  backgroundColor: "#F4F6FA",
}

const $header: TextStyle = {
  height: 50,
  marginTop: 80,
  marginBottom: 25,
  justifyContent: "flex-start",
  alignItems: "center",
}

const $logo: ImageStyle = {
  alignSelf: "center",
  width: 60,
  height: 60,
}

const $infoContainer: ViewStyle = {
  alignItems: "center",
  margin: 20,
}

const $title: TextStyle = {
  margin: 10,
  fontSize: 24,
  color: "#2d3142",
  fontWeight: "bold",
  textAlign: "center",
}

const $description: TextStyle = {
  fontSize: 16,
  color: "#9c9eb9",
  textAlign: "center",
  height: 55,
}

const $logContainer: TextStyle = {
  justifyContent: "flex-end",
  marginBottom: 20,
  alignItems: "center",
  alignSelf: "center",
}

const $btnContainer: TextStyle = {
  marginTop: 30,
  borderRadius: 60,
  width: SCREEN_WIDTH - 100,
  height: 50,
  borderWidth: 1,
  alignItems: "center",
  padding: 12,
  backgroundColor: colors.palette.ebbBlue,
  borderColor: colors.palette.ebbBlue,
}

const $btnText: TextStyle = {
  color: "white",
  fontSize: 17,
  fontWeight: "bold",
}

const $bottomRowContainer: TextStyle = {
  margin: 5,
  flexDirection: "row",
  width: SCREEN_WIDTH - 100,
  justifyContent: "center",
  alignItems: "stretch",
}

const $text: TextStyle = {
  margin: 10,
  fontSize: 17,
  color: "#9c9eb9",
}

const $signText: TextStyle = {
  margin: 10,
  marginLeft: 0,
  color: "#7265E3",
  fontWeight: "bold",
  fontSize: 17,
}
