import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function Button({ iconName, onPress }) {
  return (
    <TouchableOpacity onPressOut={onPress}> 
      <FontAwesome name={iconName} size={80} color="white" />
    </TouchableOpacity>      
  )
}

//!아이폰에서는 터치에서 손 뗄때 실행되어야 하므로 onpressOut써야함

Button.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}
export default Button;