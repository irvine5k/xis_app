import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'


export default class App extends Component {
    render() {
        const comments = [{
            nickname: 'vikvik98',
            comment: 'Que vontade de pastar nesse lugar'
        }, {
            nickname: 'messiasdaniel',
            comment: 'Parece a secura do vinão'
        }]
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <Header />
                <Post image={require('./assets/imgs/fence.jpg')} 
                    comments={comments}/>
            </View>

        )
    }
}


