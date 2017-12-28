import React from 'react';
import { Text, View, ScrollView } from 'react-native';

const CurrencyDetailContainer = (props) => {
  const { currencyDetailContainerStyle } = styles;
  return (
    <ScrollView style={currencyDetailContainerStyle}>
      {props.children}
    </ScrollView>
  )
}

const styles = {
  currencyDetailContainerStyle: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
}

export default CurrencyDetailContainer;