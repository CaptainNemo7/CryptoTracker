import React from 'react';
import { View, Text } from 'react-native';
import Numeral from 'numeral';
import CurrencyDetailContainer from './CurrencyDetailContainer'

const CurrencyDetail = ({ details }) => {

	const changeGreater = (percent) => {
		return percent > 0 ? {color: 'green', fontWeight: 'bold'} : {color: 'red', fontWeight: 'bold'}
	}

	const checkMax = () => {
		if ( details.currency.max_supply !== null ) {
			return <Text style={detail}>{'  ' + maxSupply}</Text>			
		} else {
			return <Text style={detail}> No Limit</Text>	
		}
	}

	const { detail, headerStyle, headerText, priceDetail, textDetail } = styles;
	let price = Numeral(details.currency.price_usd).format('0,0.00')
	let avaSupply = Numeral(details.currency.available_supply).format('0,0')
	let maxSupply = Numeral(details.currency.max_supply).format('0,0')
	return (
		<CurrencyDetailContainer>
		<View style={priceDetail}>
			
			<Text style={textDetail}>Symbol:
				<Text style={detail}>
					{'  ' + details.currency.symbol}
				</Text>
			</Text>

			<Text style={textDetail}>Rank:
				<Text style={detail}>
					  {'  ' + details.currency.rank}
				</Text>
			</Text>

			<Text style={textDetail}>Current Price:
				<Text style={detail}>
					  {'  $' + price}
				</Text>
			</Text>

			<Text style={textDetail}>In Circulation:
				<Text style={detail}>
					  {'  ' + avaSupply}
				</Text>
			</Text>

			<Text style={textDetail}>Total Coins:
				{checkMax()}	
			</Text>

			<Text style={textDetail}>1 Hour Change:
				<Text style={changeGreater(details.currency.percent_change_1h)}>
					  {'  ' + details.currency.percent_change_1h}%
				</Text>
			</Text>

			<Text style={textDetail}>24 Hour Change:
				<Text style={changeGreater(details.currency.percent_change_24h)}>
					  {'  ' + details.currency.percent_change_24h}%
				</Text>
			</Text>

			<Text style={textDetail}>7 Day Change:
				<Text style={changeGreater(details.currency.percent_change_7d)}>
					  {'  ' + details.currency.percent_change_7d}%
				</Text>
			</Text>
		</View>
		</CurrencyDetailContainer>
	)
};

const styles = {
	priceDetail: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textDetail: {
		fontSize: 20,
		marginTop: 20,
		marginBottom: 20
	},
	detail: {
		fontWeight: 'bold',
		marginLeft: 5,
	}
}

export default CurrencyDetail;