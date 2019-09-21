import { connect } from 'react-redux';
import Timer from './presenter';
import { bindActionCreators } from 'redux';
import { actionCreators as mumuAction } from '../../reducer';

//! state는 provider store에서 자동으로 state를 복사하기때문에 거기서 가져온거임.

function mapStateToProp(state){
  const { isPlaying, elapsedTime, timerDuration} = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  }
}


//! dispatch는 액션을 리듀서로 보내는 function.
function mapDispatchToProps(dispatch){
  return {
    startTimer: bindActionCreators(mumuAction.startTimer, dispatch),
    restartTimer: bindActionCreators(mumuAction.restartTimer, dispatch),
    addSecond: bindActionCreators(mumuAction.addSecond, dispatch)
  }
}




export default connect(mapStateToProp, mapDispatchToProps)(Timer);

//! index에서는 state에서 데이터 가져오는 것 관리함