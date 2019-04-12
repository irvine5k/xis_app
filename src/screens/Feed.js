import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
  state = {
    posts: [{
      id: Math.random(),
      nickname: 'irvine5k',
      email: 'kelvengalvao@gmail.com',
      image: require('../../assets/imgs/fence.jpg'),
      comments: [{
        nickname: 'vinao',
        comment: 'Topzera.',
      }, {
        nickname: 'danael',
        comment: 'segue laaan',
      }]
    }, {
      id: Math.random(),
      nickname: 'vinao',
      email: 'vinao@gmail.com',
      image: require('../../assets/imgs/gate.jpg'),
      comments: [{
        nickname: 'irvine5k',
        comment: 'daoraaaaaan',
      }, {
        nickname: 'danael',
        comment: 'tuinteeeeeer',
      }]
    }, {
      id: Math.random(),
      nickname: 'danael',
      email: 'danael@gmail.com',
      image: require('../../assets/imgs/bw.jpg'),
      comments: [{
        nickname: 'irvine5k',
        comment: 'daoraaaaaan',
      }, {
        nickname: 'danael',
        comment: 'tuinteeeeeer',
      }]
    }]
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) =>
            <Post key={item.id} {...item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

export default Feed

