import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SelectCountry from './src/SelectCountry/SelectCountry';
import SelectCity from './src/SelectCity/SelectCity';
import {ObjectRecord} from '../../../../../../types/common';

function StartNewLife() {
  const [availableCities, setAvailableCities] = useState<ObjectRecord<string>>({});

  return (
    <View>
      <View style={styles.country}>
        <SelectCountry setAvailableCities={setAvailableCities} />
      </View>
      <View style={styles.city}>
        <SelectCity availableCities={availableCities} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  country: {
    padding: 10,
    zIndex: 2,
  },
  city: {
    padding: 10,
    zIndex: 1,
  },
});

export default StartNewLife;
