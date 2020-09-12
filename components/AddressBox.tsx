import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    container: {
        width: 340,
        height: 150,
        borderRadius: 10,
        backgroundColor: 'rgba(249,249,249,0.97)',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const AddressBox = props => (
    <View style = {styles.container}>
        <View>
            <Image style = {{height: 50, width: 50}} source = "../assets/images/default.jpeg"/>
        </View>
        <View style = {{flexDirection: 'row'}}>
            <View>
                <Text>
                    {/* Hello World */}
                    {props.address.coords.latitude}

                </Text>
            </View>
            <View>
                <Button style = {{width: 64}} title="Go"/>

            </View>
        </View>

    </View>
)

export default AddressBox