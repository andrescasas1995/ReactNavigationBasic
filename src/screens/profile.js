import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Name from "../profile/components/name";

class Profile extends Component {

    handlePress = () => {
        this.props.navigation.navigate("Home");
    }

    setParams = () => {
        this.props.navigation.setParams({
            name: "Andy"
        })
    }

    static navigationOptions = ({navigation})=>{
        return{
            title: `${navigation.getParam("name")} ${navigation.getParam("edad",27)}`
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Profile</Text>
                <Button 
                    title="Ir al home"
                    onPress={this.handlePress}/>
                <Button 
                    title="Cambiar Nombre"
                    onPress={this.setParams}/>
                <Name />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Profile;