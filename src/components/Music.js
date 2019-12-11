import React, { Component } from "react";
import { View, StyleSheet, ScrollView, FlatList, SafeAreaView, Text, TextInput,TouchableOpacity } from "react-native";
import {music} from '../data/MusicData'
import Song from './Song'

class Music extends Component {
	constructor(props){
    	super(props) 
    	this.state = {
      		filterText: ''
    	}
    	this.filterSongs = this.filterSongs.bind(this)
    	this.userValue = this.userValue.bind(this)
	}

	filterSongs(){
		let filteredSongs = []
		const filterText = this.state.filterText
		
		if (filterText) {
  	
  			filteredSongs = music.filter( el => {
				if (el.title.toLowerCase().includes(filterText.toLowerCase()) || el.artist.toLowerCase().includes(filterText.toLowerCase())){
					return el
				}
  			})

		} else {
			filteredSongs = music
		}

		return filteredSongs
	}

	userValue(text){
		this.setState({
			filterText: text
		})
	}

	render() {
		const filteredArray = this.filterSongs()
		const placeholder = `Enter song name here`
		return (
			<SafeAreaView style={styles.contianer}>
				<View style={styles.FilterBar}>
					<Text style={styles.filterLabel}>Filter:</Text>
					<TextInput style={styles.filterInput}
	      				maxLength={100}
	      				multiline={false}
	      				onChangeText={(text) => this.userValue(text)}
	        			placeholder={placeholder}
	    			/>
				</View>

				<FlatList 
					data={filteredArray} 
					renderItem={({ item }) => <Song song={item} />}
	        		keyExtractor={item => item.title}
	      		/>
			</SafeAreaView>
		);
	}

}

export default Music

const styles = StyleSheet.create({
	contianer: {
		flex: 1,
		alignItems: "center",
		paddingBottom: 20,
	},
	FilterBar: {
		flexDirection: 'row',
		height: 50, 
		marginTop: 30,
				alignItems: 'center',
	},
	filterInput: {
		borderBottomColor: '#000', 
		borderBottomWidth: 2,  
		paddingTop: 20,
		paddingRight: 40,
		paddingLeft: 40,
		paddingBottom: 20,
		flexDirection: 'row', 
		marginLeft: 20,
	},
	filterLabel: {
		fontSize:20,
	}
});
