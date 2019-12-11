import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import Avatar from './Avatar'
import {title, description} from '../data/AboutData'

export default function About() {
	return (
		<ScrollView style={styles.scrollView}>
			<View style={styles.contianer}>
				
				<Text style={styles.header}>{title}</Text>
				<Avatar size={100} style={styles.img}/>
				<Text style={styles.description}>{description}</Text>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	contianer: {
		flex: 1,
		alignItems: "center"
	},
	header: {
		color: "#678890",
		fontSize: 30,
		textAlign: "center",
		margin: 50
	},
	description: {
		marginTop: 40,
	},
});
