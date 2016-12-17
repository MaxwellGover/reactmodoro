// Adding the ios to the file name allows for the importing of the different footer tabs depending on what device you're on. 
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

FooterTabs.propTypes = {

}

export default function FooterTabs (props) {
	console.log('Here', props)
	return (
		<View>
			<Text>
				FooterTabs
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({

})