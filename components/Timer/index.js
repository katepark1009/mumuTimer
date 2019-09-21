import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button';
class Timer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.text}>23:00</Text>
        </View>
        <View style={styles.lower}>
          <Button iconName="play-circle" onPress={()=>alert("work")}/>
          <Button iconName="stop-circle" onPress={()=>alert("work")}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff1a75"
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  text : {
    fontSize: 120,
    fontWeight: "100",
    color: "white"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Timer;