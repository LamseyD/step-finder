import React from 'react'
// import {connect} from 'react-redux'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { View, Dimensions, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import { Button } from 'react-native-elements'

class MapScreen extends React.Component{
    static navigationOptions = {

    }

    state = {
        current_location: null
    }

    getLocationAsync = async () => {
        const {status} = await Permissions.askAsync(Permissions.LOCATION)
        // let current_location = null
        if (status === 'granted'){
            const current_location = await Location.getCurrentPositionAsync({enableHighAccuracy: true})
            this.setState({current_location})
            console.log(current_location)
        } else {
            throw new Error('Location permission not granted')
        }
      }
    
    componentDidMount(){
        // this.getLocationAsync()
        try {
          this.getLocationAsync()
        } catch (e){
          console.log(e.toString())
        }
    }

    render() {
        if (!this.state.current_location) {
            return (<View>
                <MapView 
                    style = {styles.mapStyle} 
                    provider={PROVIDER_GOOGLE}
                />
            </View>)
        }
        return (
            <View style = {styles.container}>
                <View style = {{position:"absolute", alignItems: "center"}}>
                    <MapView 
                        onPress = {Keyboard.dismiss}
                        style = {styles.mapStyle} 
                        provider={PROVIDER_GOOGLE}
                        showsUserLocation = {true}
                        initialRegion={{latitude: this.state.current_location.coords.latitude, longitude: this.state.current_location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}
                    />
                </View>
                
                <View style = {styles.search_bar}>
                
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

                        <TextInput style = {styles.text_input}
                            placeholder = "Enter number of steps"
                            keyboardType = {'numeric'}
                        />
                    </TouchableWithoutFeedback>
                    <View style = {styles.search_button}>
                        <Button style = {{width: 75}} 
                            title = "Go"
                            onPress= {() => {}}
                        />
                    </View>
                   
                </View>
                
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
  
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    text_input: {
        height: 40, 
        width: 200,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: "center",
        borderRadius: 4
    },
    search_bar: {
        flexDirection:"row",
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        bottom: 30,
        
    },
    search_button:{
        paddingStart: 10,


    }
  });
  
export default MapScreen