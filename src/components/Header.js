import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'

import icon from '../../assets/imgs/icon.png'

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        backgroundColor: '#3c3f44',
        borderColor: '#3c3f44',
        alignItems: 'center'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        borderRadius: 50
    }
})

export default Header