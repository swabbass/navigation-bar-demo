import React from "react"
import { StyleSheet, View } from "react-native"

function App(props) {
  return (
    <View style={styles.background} />
  )
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "blue"
  }
})

export default App