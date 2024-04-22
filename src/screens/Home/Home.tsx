import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './Home.style';
import {fetchData} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import RaceItem from '../../components/RaceItem/RaceItem';
import {AppStrings, ConstantText} from '../../utils/constants';
import useSortedData from './Hooks/useSortedData';
import {RootState} from '../../redux/reducers';
import {Race} from '../../models/race';

const Home: FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.appData.isFetching);
  const raceData = useSelector((state: RootState) => state.appData.raceData);

  const [raceArray, setRaceArray] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const {sortedData} = useSortedData(raceArray);

  useEffect(() => {
    const interval = setInterval(() => {
      setRaceArray(prevData => {
        if (prevData.length > 1) {
          return prevData.slice(1);
        } else {
          return [];
        }
      });
    }, 6000); // 6 seconds for time being
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (raceData?.status === 200) {
      const newArr = Object.values(raceData?.data?.race_summaries);
      setRaceArray(newArr);
    }
  }, [raceData]);

  // expand the flatlist item
  const renderAccordian = useCallback(
    (items: Race) => {
      if (selectedIndex === items.race_id) {
        setSelectedIndex(null);
      } else {
        setSelectedIndex(items.race_id);
      }
    },
    [selectedIndex],
  );

  // child render item
  const renderItem = ({item, index}) => (
    <RaceItem
      item={item}
      index={index}
      onPress={renderAccordian}
      selectedIndex={selectedIndex}
    />
  );

  // child KeyExtractor
  const keyExtractor = (item: number) => String(item.race_id);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(fetchData())}>
          <Text style={styles.buttonText}>{AppStrings.raceStartButton}</Text>
        </TouchableOpacity>
        <View style={styles.flatListView}>
          {isLoading && <ActivityIndicator size={ConstantText.loader_large} />}
          <FlatList
            data={sortedData.slice(0, 5)}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
