import React from 'react'
// import {connect} from 'react-redux'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { View, Dimensions, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback} from 'react-native'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import { Button } from 'react-native-elements'

class MapScreen extends React.Component{

    static navigationOptions = {

    }

    state = {
        custom_location: false,
        steps: 0, 
        current_location: null,
        initialRegion: null,
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
    
    toggleSwitch = () => {
        this.setState({custom_location: !this.state.custom_location})
    }

    componentDidMount(){
        // this.getLocationAsync()
        try {
          this.getLocationAsync()
        } catch (e){
          console.log(e.toString())
        }
    }

    componentWillUnmount(){

    }

    processSteps = () => {
        let dist_km = this.state.steps * 0.7143
        let dist_mi = this.state.steps * 0.7143 / 1.60934
        this.props.navigation.push('Result', {steps: this.state.steps, dist_km, dist_mi, current_location: this.state.current_location})
    }

    render() {
        return (
            <View style = {styles.container} >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style = {{position:"absolute", alignItems: "center"}}>
                            {(!this.state.current_location) && <MapView style = {styles.mapStyle} provider={PROVIDER_GOOGLE}/> 
                            || <MapView 
                                style = {styles.mapStyle} 
                                provider={PROVIDER_GOOGLE}
                                onPress= {this.onMapPress}
                                showsUserLocation
                                showsMyLocationButton
                                initialRegion={{latitude: this.state.current_location.coords.latitude, longitude: this.state.current_location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}
                            />
                            }    
                    </View>
                </TouchableWithoutFeedback>
                    
                    <View style = {this.state.custom_location && ({...styles.search_box, height: 135}) || (styles.search_box)}>
                        <View style = {{...styles.search_bar}}>
                            
                            <View>
                                <TextInput style = {styles.text_input}
                                    placeholder = "Enter number of steps"
                                    keyboardType = {'numeric'}
                                    onChangeText = {(text) => {this.setState({steps: Number(text)})}}
                                />
                            </View>
                            <View style = {styles.search_button}>
                                <Button style = {{width: 75}} 
                                    title = "Go"
                                    onPress= {this.processSteps}
                                />
                            </View>
                        
                        </View>

                        <View style = {{paddingTop: 10}}>
                            {(this.state.custom_location) && <TextInput 
                                style = {{...styles.text_input, right: 42}}
                                placeholder = "Custom Location"
                            />}
                        </View>
                    </View>

                    <View style = {{alignItems: 'flex-end', top: 10, left: 75}}>
                        <Button
                            title = "Toggle Custom Location"
                            onPress={this.toggleSwitch}
                        />
                    </View>
                    
                
                
            </View>


            )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    //   justifyContent: 'flex-end',
  
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      bottom: 48,
    },
    text_input: {
        height: 42, 
        width: 250,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: "center",
        borderRadius: 4
    },
    search_box: {
        backgroundColor: "#f7f7f7", 
        width: Dimensions.get('window').width, 
        height: 85, 
        alignItems:"center", 
        padding: 10, 
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    search_bar: {
        flexDirection:"row",
        paddingTop: 20,
        // position: "absolute"
    },
    search_button:{
        paddingStart: 10,


    }
  });
  
export default MapScreen