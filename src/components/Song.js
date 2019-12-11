import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";

export default function Song({song}) {
	return (
		<TouchableOpacity onPress={ () => {Linking.openURL(song.link)}}>
			<View style={styles.container}>
				<Text style={styles.songTitle}>{song.title}</Text>
				<Text style={styles.songArtist}>{song.artist}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		paddingRight: 25,
		paddingLeft: 25,
		paddingBottom: 20,
		alignItems: "center",
		borderWidth: 1,
		borderColor: '#000000',
		borderStyle: 'solid',
		marginTop: 30,
	},
	songTitle: {
		textAlign: 'left', 
	},
	songArtist: {
		textAlign: 'left', 
	},
});

