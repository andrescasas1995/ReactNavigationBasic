import React, { Component } from "react";

import { View, Text, StyleSheet, Button } from "react-native";

class Profile extends Component {
  handlePress = () => {
    console.log(this.props.navigation);
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button title="Ir al Home" onPress={this.handlePress} />
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
