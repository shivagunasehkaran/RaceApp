import React, {useMemo, memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './RaceItem.style';
import {
  AppStrings,
  CategoryData,
  CategoryDescriptionData,
} from '../../utils/constants';
import useCountdownTimer from '../../utils/useCountdownTimer';

type RaceItemProp = {
  item: Object;
  index: number;
  onPress: Function;
  selectedIndex: number;
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
    return CategoryData.includes(items?.category_id);
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
              <Text style={styles.raceNumberText}>
                {AppStrings.raceNumber} {raceNumber}
              </Text>
            </View>
          </View>
          <View style={styles.timer}>
            <Text style={styles.timerText}>
              {AppStrings.raceStartsIn}
              {useCountdownTimer(startingTime)}
            </Text>
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
              {CategoryDescriptionData[items.category_id]}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default memo(RaceItem);
