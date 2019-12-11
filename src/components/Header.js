import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Avatar from './Avatar'

export default function Header({screen, avatarToAbout}) {
  return (
  	<View style={styles.contianer}>
  		<Text style={styles.pagetitle}>{screen}</Text>
  		<TouchableOpacity onPress={avatarToAbout} style={styles.avatar}>
  			<Avatar size={40} />
  		</TouchableOpacity>
  	</View>
  );
}

const styles = StyleSheet.create({
	contianer: {
		height: 60,
		backgroundColor: '#fff',
		flexDirection: 'row',
		borderBottomColor: '#000',
		borderBottomWidth: 1,
		shadowColor: 'green',
		shadowOpacity: 0.3,
		shadowRadius: 10,
		shadowOffset: {
			width: 0,
			height: 5,
		}
	},
	pagetitle: {
		flex: 1,
		textAlign: 'center',
		justifyContent: 'center',
	},
	avatar: {
		margin: 10,
	},

});