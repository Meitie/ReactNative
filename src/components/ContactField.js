import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput  } from "react-native";


export default function Contacts(props) {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={100}
    />
  );
}