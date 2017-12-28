import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IntlProvider, FormattedNumber} from 'react-intl';
import { StackNavigator } from 'react-navigation';
import Header from './src/components/Header'
import CurrencyList from './src/components/CurrencyList'
import CurrencyDetail from './src/components/CurrencyDetail'

// <Header />

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Currency List'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <CurrencyList navigate={navigate}/>
      </View>
    )
  }
}

class CurrencyScreen extends Component {
  static navigationOptions = ({ navigation }) =>({
    title: `${navigation.state.params.currency.currency.name}`,
  });
  render() {
    const { currency } = this.props.navigation.state.params;  
    return <CurrencyDetail details={currency}/>
  }
}

const CryptoTracker = StackNavigator({
  Home: { screen: HomeScreen },
  ChosenCurrency: { screen: CurrencyScreen }
})

export default class App extends Component {
  render() {
    return (
      <CryptoTracker />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center'
  }
})
