import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    }
  }
  

  getImage(){
    fetch('http://10.0.2.2:4000/graphql?query={get_image}')
    .then(res => JSON.parse(res._bodyText))
    .then(json => this.setState({ image: json.data.get_image, loading: false }))
    .catch(err => console.log('error', err));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 9, justifyContent: 'center', alignItems: 'center' }}>
          {this.state.image ? (
            <Image source={{ uri: this.state.image }} style={{ height: 300, width: 300, resizeMode: 'cover' }} />
          ) : null }
        </View>
        <TouchableOpacity onPress={() => this.getImage()} style={{ padding: 10, margin: 10, flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'  }}>
          <Text style={{ color: '#fff', fontSize: 30 }}>Get Image</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
