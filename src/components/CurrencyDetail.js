import React from 'react';
import { View, Text } from 'react-native';
import Container from './Container'


const CurrencyDetail = ({ details }) => {
console.log(details)
	return (
		<Container>
		<View>
			<Text>{details.currency.name}</Text>
			<Text>{details.currency.id}</Text>
			<Text>Available: {details.currency.available_supply}</Text>
			<Text>Max: {details.currency.max_supply}</Text>
			<Text>{details.currency.percent_change_7d}</Text>
		</View>
		</Container>
	)
};

export default CurrencyDetail;