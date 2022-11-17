// This is the entry point if you run `yarn expo:start`
// If you run `yarn ios` or `yarn android`, it'll use ./index.js instead.
import "expo-asset"
import App from "./app/app.tsx"
import React from "react"
import { registerRootComponent } from "expo"
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

function Lama() {
  return <App hideSplashScreen={SplashScreen.hideAsync} />
}

registerRootComponent(Lama)
export default Lama
