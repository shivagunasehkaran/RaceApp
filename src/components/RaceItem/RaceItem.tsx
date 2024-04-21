import React, {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './RaceItem.style';
import CountdownTimer from '../../utils/countdownTimer';

type RaceItemProp = {
  item: Object;
  index: number;
  onPress: Function;
  selectedIndex: number;
};

const categoryData = [
  '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
  '161d9be2-e909-4326-8c2c-35ed71fb460b',
  '4a2788f8-e825-4d36-9894-efd4baf1cfae',
];

const categoryDescriptionData = {
  '9daef0d7-bf3c-4f50-921d-8e818c60fe61': 'Greyhound racing',
  '161d9be2-e909-4326-8c2c-35ed71fb460b': 'Harness racing',
  '4a2788f8-e825-4d36-9894-efd4baf1cfae': 'Horse racing',
};

// child flatlist render item
const RaceItem = (props: RaceItemProp) => {
  // getting data from parent
  let items = props?.item;
  let itemIndex = props?.index;
  let selectedItemIndex = props?.selectedIndex;
  let meetingName = items?.meeting_name;
  let raceNumber = items?.race_number;
  let startingTime = items?.advertised_start?.seconds;

  const isEnabled = useMemo(() => {
    return categoryData.includes(items.category_id);
  }, [items]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={!isEnabled}
        onPress={() => {
          props.onPress(items, itemIndex);
        }}>
        <View style={styles.item}>
          <View style={styles.meeting}>
            <View style={styles.meetingName}>
              <Text style={styles.meetingNameText}>{meetingName}</Text>
            </View>
            <View style={styles.raceNumber}>
              <Text
                style={
                  styles.raceNumberText
                }>{`Race number : ${raceNumber}`}</Text>
            </View>
          </View>
          <View style={styles.timer}>
            <Text style={styles.timerText}>{`Race starts in : ${CountdownTimer(
              startingTime,
            )}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {selectedItemIndex === items.race_id && (
        <View style={styles.expandContainer}>
          <View style={styles.parentLine}>
            <Text style={styles.line} />
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>
              {categoryDescriptionData[items.category_id]}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default RaceItem;
