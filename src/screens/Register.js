import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native'

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Nome'
          style={styles.input}
          value={this.state.name}
          onChangeText={() => this.setState({ name })}
        />
        <TextInput
          placeholder='Email'
          style={styles.input}
          value={this.state.email}
          onChangeText={() => this.setState({ email })}
        />
        <TextInput
          placeholder='Senha'
          style={styles.input}
          value={this.state.password}
          onChangeText={() => this.setState({ password })}
        />
        <TouchableOpacity
          onPress={() => { }}
          style={styles.buttom}
        >
          <Text style={styles.buttomText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
    borderRadius: 10
  },
  buttomText: {
    fontSize: 20,
    color: '#FFF'
  },
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#EEE',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10
  }
})

export default Register