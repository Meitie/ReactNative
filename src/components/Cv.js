import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";

class Cv extends Component {
	constructor(props){
    	super(props) 
    	this.state = {
      		cvItems: []
    	}
	}

	


	render() {
		let cvItems = this.state.cvItems;
		console.log(cvItems);

		return (
		<View style={styles.contianer}>
			<Text>hello</Text>
			
		</View>
	);
	}
}

export default Cv;

const styles = StyleSheet.create({
	contianer: {
		flex: 1,
		alignItems: "center"
	}
});
