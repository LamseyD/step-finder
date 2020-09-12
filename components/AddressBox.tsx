import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    container: {
        width: 340,
        height: 150,
        borderRadius: 10,
        backgroundColor: 'rgba(249,249,249,0.96)',
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row'
    }
})

const AddressBox = props => (
    <View style = {styles.container}>
        <View style = {{flexDirection:'row'}}>
            <View>
                <Text style = {{fontWeight:"bold", fontSize:20}}>
                    Hello World
                    {/*place holder for address */}
                </Text>
                <Text>

                    {props.address.coords.latitude}

                </Text>
            </View>
            <View style = {{paddingStart: 40}}>
                <Image style = {{height: 50, width: 50}} source = {require("../assets/images/default.jpg")}/>

                <View>
                    {/* <Button style = {{width: 75}} title="Go"/> */}

                </View>
            </View>
        </View>
        <View style = {{borderBottomColor: "grey", borderBottomWidth: 1, width: styles.container.width, paddingTop: 20}}> 

        </View>
        <TouchableOpacity style = {{paddingTop: 20}}>
            <Text style = {{color:"blue", fontSize: 16}}>
                Select This Address
            </Text>
        </TouchableOpacity>

    </View>
)

export default AddressBox