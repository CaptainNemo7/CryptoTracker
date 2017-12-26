import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import Currency from './Currency';

class CurrencyList extends Component {
	state = {
		currencies: []
	};

	componentWillMount() {
		axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=20')
		.then((currencyList) => {
			this.setState({
				currencies: currencyList.data
			});
		})
		.catch((error) => {
			console.log(error)
		})
	}

	displayCurrencies() {
		return this.state.currencies.map((currency) => {
			return <Currency key={currency.id} currency={currency} />
		})
	}

	render() {
		console.log(this.state.currencies)
		return (
			<ScrollView>
				{this.displayCurrencies()}
			</ScrollView>
		)
	}
};


export default CurrencyList;