import React from 'react';
import { View, Text } from 'react-native';
import Container from './Container'
import ContainerSection from './ContainerSection'
const Currency = ({ currency }) => {
	const { 
		name, 
		symbol, 
		price_usd, 
		percent_change_1h,
		available_supply,
		max_supply,
	} = currency;

	const { headerStyle, headerText, priceDetail } = styles;
	return (
		<Container>
			<ContainerSection>
				<View style={headerStyle}>
					<Text style={headerText}>{name}</Text>
					<Text>{symbol}</Text>
				</View>
				<View style={priceDetail}>
					<Text>${price_usd}</Text>
					<Text>Last Hour Change: {percent_change_1h}</Text>
				</View>
			</ContainerSection>
			<ContainerSection>
				<View>
					<Text>Current Supply: {available_supply}</Text>
					<Text>Max Supply: {max_supply}</Text>
				</View>
			</ContainerSection>
		</Container>
	)
}

const styles = {
	headerStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerText: {
		fontSize: 20,
	},
	priceDetail: {
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginLeft: 20,
	}
}

export default Currency;