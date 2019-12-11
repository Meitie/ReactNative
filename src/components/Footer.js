import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tab from "./Tab";

export default function Footer({ screens, changeScreen, selectedScreenIndex}) {
	return (
		<View style={styles.contianer}>
			{screens.map((screen, key) => {
				return <Tab changeScreen={() => changeScreen(key)} isSelected={selectedScreenIndex === key} key={key} title={screen} />;
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	contianer: {
		height: 100,
		backgroundColor: "#fff",
		flexDirection: "row",
		borderTopColor: "#000",
		borderTopWidth: 0.3,
		shadowColor: "green",
		shadowOpacity: 0.3,
		shadowRadius: 20,
		shadowOffset: {
			width: 0,
			height: 0
		}
	}
});
