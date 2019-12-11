import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Tab({title, changeScreen, isSelected}) {
	return (
		<TouchableOpacity onPress={changeScreen} style={styles.contianer}>
			<View>
				<Text style={isSelected ? styles.selectedText: styles.unselectedText}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	contianer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	unselectedText: {
		color: 'black'
	},
	selectedText: {
		color:'blue'
	},
});
