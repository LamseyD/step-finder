import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create ({
    container: {
        width: 340,
        height: 160,
        borderRadius: 10,
        backgroundColor: 'rgba(249,249,249,0.96)',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
    }
})

const UpdateBox = props => (
    <View style = {styles.container}>
        <View style = {{left: 20, top: 30, position: "absolute"}}>
            <Text style = {{fontWeight: "bold", fontSize: 30}}> {props.title}</Text>
            <Text> Hello World</Text>
        </View>
        <View style = {{right: 20, position: "absolute"}}>
            <Image style = {{width: 95, height: 95}} source = {require('../assets/images/default.jpg')}/>
            {/*set icons according to props here */}

        </View>
    </View>
)

export default UpdateBox