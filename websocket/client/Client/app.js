import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const io = require('socket.io-client');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    }
  }

  componentDidMount(){
    var socket = io('http://10.0.2.2:3000');

    socket.on('connect', function(){
     socket.emit('chat', 'message from react native');
    });
  }
  

  render() {
    return (
      <View style={styles.container}>
          <Text style={{ fontSize: 30 }}>just reload it, then message will print on server terminal</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
