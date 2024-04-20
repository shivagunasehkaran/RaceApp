// react library imports
import type {Node} from 'react';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
// style imports
import {styles} from './NestedChildCoffeeExtras.style';
import {Images} from '../../assets/Images';

type NestedChildCoffeeExtrasProp = {
  item: Object;
  index: number;
  onPress: Function;
  selectedIndex: number;
};

// flatlist render item
const NestedChildCoffeeExtras = (props: NestedChildCoffeeExtrasProp): Node => {
  // getting data from parent
  let items = props.item ? props.item : null;
  let name = items ? items.name : '';

  return (
    <View style={styles.container}>
      <View style={styles.nameView}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

export default NestedChildCoffeeExtras;
