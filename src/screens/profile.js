import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Name from "../profile/components/name";

class Profile extends Component {
  handlePress = () => {
    this.props.navigation.navigate("Home");
  };

  setParams = () => {
    this.props.navigation.setParams({
      name: "Walter",
      age: Math.floor(Math.random() * 100)
    });
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam("name")} ${navigation.getParam(
        "age",
        Math.floor(Math.random() * 100)
      )}`
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button title="Ir al Home" onPress={this.handlePress} />
        <Button title="Cambiar nombre" onPress={this.setParams} />
        <Name />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Profile;
