import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import Contacts from './ContactField';



export default function Contact() {
	const placeholder = `Enter your name here`
	return (
		<ScrollView style={styles.scrollView}>
		
			 <Contacts 
        multiline
        numberOfLines={4}
        placeholder={placeholder}
      />
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
});
