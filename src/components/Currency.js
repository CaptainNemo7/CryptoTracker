import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Numeral from 'numeral';
import Container from './Container'
import ContainerSection from './ContainerSection'
import { StackNavigator } from 'react-navigation';
const Currency = ({ currency, navigate }) => {
	const { 
		name, 
		symbol, 
		price_usd, 
		percent_change_1h,
		available_supply,
		max_supply,
	} = currency;

	const changeGreater = () => {
		return currency.percent_change_1h > 0 ? {color: 'green'} : {color: 'red'}
	}

	let price = Numeral(price_usd).format('0,0.00')

	const { headerStyle, headerText, priceDetail, change } = styles;
	return (

		<Container>
			<TouchableOpacity 
				onPress={()=> navigate.navigate('ChosenCurrency', {currency: {currency}})}
				title={name}
			>
			<ContainerSection>
				<View style={headerStyle}>
					<Text style={headerText}>{name}</Text>
					<Text>{symbol}</Text>
				</View>
			</ContainerSection>

			<ContainerSection>
				<View style={priceDetail}>
					<Text>Current Price: ${price}</Text>
					<Text style={changeGreater()}>{percent_change_1h}%</Text>
				</View>
			</ContainerSection>
			</TouchableOpacity>
		</Container>
	)
}

const styles = {
	headerStyle: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 25,
		fontWeight: 'bold'
	},
	priceDetail: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	}
}

export default Currency;