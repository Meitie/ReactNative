import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Avatar(props) {
	const size = props.size
	return (
			<View style={styles.contianer}>
				<Image style={{
					width: size, 
					height: size, 
					borderRadius: size/2 
				}} source={require('../../assets/icon-m.png')} />	
			</View>
	);
}

const styles = StyleSheet.create({
	contianer: {
		flex: 1,
		alignItems: "center"
	},
});
