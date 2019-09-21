import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button';

//! presentaional component, 데이터를 showing 보여주는 것을 관리함.
class Timer extends Component {
  render() {
    const { isPlaying, elapsedTime, timeDuration, startTimer, restartTimer } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.text}>23:00</Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying && <Button iconName="play-circle" onPress={startTimer}/>}
          {isPlaying && <Button iconName="stop-circle" onPress={restartTimer}/>}
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