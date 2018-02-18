import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, StyleSheet } from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';

const styles = StyleSheet.create({
  btnEscolha: {

  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  palco: {
    alignItems: 'center',
    marginTop: 10,
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
  },
});

class jokenpogame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: '',
    };
  }

  jokenpo(escolhaUsuario) {
    const numeroAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = '';
    switch (numeroAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      default: escolhaComputador = '';
    }

    let resultado = '';

    if (escolhaComputador === escolhaUsuario) {
      resultado = 'empate';
    } else {
      if (escolhaComputador === 'pedra') {
        if (escolhaUsuario === 'papel') {
          resultado = 'Você ganhou';
        } else {
          resultado = 'Você perdeu';
        }
      }

      if (escolhaComputador === 'papel') {
        if (escolhaUsuario === 'tesoura') {
          resultado = 'Você ganhou';
        } else {
          resultado = 'Você perdeu';
        }
      }

      if (escolhaComputador === 'tesoura') {
        if (escolhaUsuario === 'pedra') {
          resultado = 'Você ganhou';
        } else {
          resultado = 'Você perdeu';
        }
      }
    }

    this.setState({
      escolhaUsuario,
      escolhaComputador,
      resultado,
    });
  }

  render() {
    return (
      <View>
        <Topo />
        <View style={styles.painelAcoes}>
          <View>
            <Button
              title="pedra"
              style={styles.btnEscolha}
              onPress={() => { this.jokenpo('pedra'); }}
            />
          </View>
          <View>
            <Button
              title="papel"
              style={styles.btnEscolha}
              onPress={() => { this.jokenpo('papel'); }}
            />
          </View>
          <View>
            <Button
              title="tesoura"
              style={styles.btnEscolha}
              onPress={() => { this.jokenpo('tesoura'); }}
            />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaUsuario} jogador="Você" />
          <Icone escolha={this.state.escolhaComputador} jogador="Computador" />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('jokenpogame', () => jokenpogame);
