import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//! store를 복사해서 child component에 넣어주는 역할
let store = createStore(reducer);

console.log(store.getState());

export default function App() {
  return (
    <Provider store={store}> 
      <Timer />
    </Provider>
  );
}


//! Store
// { isCounting: t/f,
// countingDuration: 1500,
// elapsedTime: 0
// }

//! Reducer
// 데이터를 변경하려고 할꺼임.

//! Action 
// 액션(시작 또는 멈춤)을 reducer한테 보내고, reducer는 이를 살펴보는 역할.