import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableHighlight } from 'react-native'

const appStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		marginBottom: 40,
		alignItems: 'center',
		backgroundColor: '#2196F3',
		width: 260
	},
	buttonText: {
		padding: 20,
		color: 'white'
	}
})

export default class App extends Component {
	_onPress() {
		alert('you pressed a button')
	}
	_onLongPress() {
		alert('you long pressed a button')
	}
	render() {
		return (
			<SafeAreaView style={appStyle.container}>
				<TouchableHighlight onPress={this._onPress} onLongPress={this._onLongPress} underlayColor="white">
					<View style={appStyle.button}>
						<Text style={appStyle.buttonText}>TouchableHighlight</Text>
					</View>
				</TouchableHighlight>
			</SafeAreaView>
		)
	}
}
