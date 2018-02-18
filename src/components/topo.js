import React, { Component } from 'react';
import { View, Image } from 'react-native';

const jokenpoImagem = require('../../images/jokenpo.png');

class Topo extends Component {
  render() {
    return (
      <View><Image source={jokenpoImagem} /></View>
    );
  }
}

export default Topo;
