import App from "./App"
import { Navigation } from "react-native-navigation"

Navigation.registerComponent("App", () => App)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    statusBar: {
      drawBehind: true,
      backgroundColor: "transparent"
    },
    topBar: {
      visible: false
    },
    navigationBar: {
      visible: false,
    }
  })
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "App"
            }
          }
        ]
      }
    }
  })
})