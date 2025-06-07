import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type StatTemplateProps = {
  color: string;
  value: number | string;
  icon: React.JSX.Element;
};

function StatTemplate({color, value, icon}: StatTemplateProps) {
  return (
    <View style={styles.box}>
      <View style={[styles.scale, {backgroundColor: color}]}>
        <Text style={styles.text}>{value}</Text>
      </View>
      <View style={styles.icon}>{icon}</View>
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
    width: 70,
    height: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#606060',
    borderRadius: 10,
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

export default StatTemplate;
