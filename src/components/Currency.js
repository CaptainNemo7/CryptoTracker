import React from 'react';
import { View, Text } from 'react-native';

const Currency = (props) => {
	return (
		<View>
			<Text>{props.currency.name}</Text>
		</View>
	)
}

export default Currency;