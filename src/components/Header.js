import React, { Component } from 'react'
import {
  StyleSheet,
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
          <Image
            source={icon}
            style={styles.image}
          />
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
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    alignItems: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    backgroundColor: 'transparent'
  }
})

export default Header