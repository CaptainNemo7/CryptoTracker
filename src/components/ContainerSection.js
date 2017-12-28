import React from 'react';
import { View } from 'react-native';

const ContainerSection = (props) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}

export default ContainerSection;