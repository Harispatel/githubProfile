/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity} from 'react-native';

export default function GpButton(props) {
  const {children, type} = props;
  return (
    <TouchableOpacity {...props} style={[props.style]}>
      {children}
    </TouchableOpacity>
  );
}
