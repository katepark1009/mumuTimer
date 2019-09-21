import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button';

//! presentaional component, 데이터를 showing 보여주는 것을 관리함.


function formatTime(time){
  let minutes = Math.floor(time/60);
  time -= minutes * 60
  let seconds = parseInt(time% 60, 10);
  return `${minutes < 10 ? `0${minutes}`: minutes}:${seconds<10? `0${seconds}`: seconds}`;
}

class Timer extends Component {

  componentWillReceiveProps(nextProps){
    const currentProps = this.props;
    console.log("current isplaying: " , currentProps.isPlaying, 'seconds', currentProps.elapsedTime, 'and next isplaying: ', nextProps.isPlaying);
    if(!currentProps.isPlaying && nextProps.isPlaying){
      //start interval
      const timerInterval = setInterval(()=> {
        currentProps.addSecond();
      }, 1000)
      this.setState({
        timerInterval
      })
    } else if( currentProps.isPlaying && !nextProps.isPlaying){
      //strop interval
      clearInterval(this.state.timerInterval);
    }
  }

  render() {
    console.log('why nan?:', this.props)
    const { 
      isPlaying, 
      elapsedTime, 
      timerDuration,
      startTimer, 
      restartTimer, 
      addSecond 
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.text}>{formatTime(timerDuration-elapsedTime)}</Text>
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