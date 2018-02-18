import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const pedraImagem = require('../../images/pedra.png');
const papelImagem = require('../../images/papel.png');
const tesouraImagem = require('../../images/tesoura.png');

class Icone extends Component {
  render() {
    if (this.props.escolha === 'pedra') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={pedraImagem} />
        </View>
      );
    } else if (this.props.escolha === 'papel') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={papelImagem} />
        </View>
      );
    } else if (this.props.escolha === 'tesoura') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={tesouraImagem} />
        </View>
      );
    }

    return false;
  }
}

const styles = StyleSheet.create({

  icone: {
    alignItems: 'center',
    marginBottom: 10,
  },
  txtJogador: {
    fontSize: 18
  }
});

export default Icone;
