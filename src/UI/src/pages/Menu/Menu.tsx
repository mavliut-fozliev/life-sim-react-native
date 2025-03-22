import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button/Button';
import useZustand, {Pages} from '../../../../storage/zustand';

type NewLifeProps = {
  name: string;
  surname: string;
  gender: string;
  country: string;
  city: string;
};

const defaultNewLifeProps = {
  name: '',
  surname: '',
  gender: '',
  country: '',
  city: '',
};

function Menu() {
  const [newLifeProps, setNewLifeProps] = useState<NewLifeProps>(defaultNewLifeProps);
  const {setCurrentPage} = useZustand();

  const handleStart = () => {
    setCurrentPage(Pages.HOME);
  };

  return (
    <View style={styles.box}>
      <Button label="Start New Life!" onPress={handleStart} />
      {Object.values(newLifeProps).map((p, i) => (
        <Text key={i}>{p}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'gray',
    height: 660,
  },
});

export default Menu;
