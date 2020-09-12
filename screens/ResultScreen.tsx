import React from 'react'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { View, Dimensions, StyleSheet, Text } from 'react-native'
import * as Location from 'expo-location'

class ResultScreen extends React.Component{
    state = {
        steps: 0,
        dist_km: 0,
        dist_mi: 0,
        current_location: null
    }

    getNavigationPackage = () => {
        let navigation_package = this.props.route.params
        console.log("We got your navigation package!")
        console.log(navigation_package)
        this.setState({steps: navigation_package.steps, dist_km: navigation_package.dist_km, dist_mi: navigation_package.dist_mi, current_location: navigation_package.current_location})
    }

    componentDidMount(){
        this.getNavigationPackage
    }

    componentWillUnmount(){

    }

    render(){
        return (
            <View>
                <Text>
                    {this.state.steps}
                </Text>
                <MapView 
                    style = {styles.mapStyle} 
                    provider={PROVIDER_GOOGLE}
                    loadingEnabled
                    showsUserLocation
                    // initialRegion={{latitude: this.state.current_location.coords.latitude, longitude: this.state.current_location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})

export default ResultScreen