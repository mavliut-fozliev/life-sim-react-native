import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

type ResourceProps = {name: string; value: number};

function Resource({name, value}: ResourceProps) {
  return (
    <View style={styles.box}>
      <View style={styles.scale}>
        <Text style={styles.text}>{value}</Text>
      </View>
      <Icon name="heart-fill" size={26} color="#FF0909" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 30,
    width: 90,
    justifyContent: 'center',
  },
  scale: {
    width: 80,
    height: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#606060',
    borderRadius: 10,
    backgroundColor: '#FF3D3D',
    alignItems: 'center',
    left: 8,
  },
  text: {
    color: 'white',
    bottom: 1,
  },
  icon: {
    position: 'absolute',
  },
});

export default Resource;
