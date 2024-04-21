import React, {useCallback, useEffect, useState} from 'react';
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
import {ConstantText} from '../../utils/constants';
import useSortedData from './Hooks/useSortedData';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.appData.isFetching);
  const data = useSelector(state => state.appData.data);

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
    }, 60000); // 60 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (data.status === 200) {
      const newArr = Object.values(data.data.race_summaries);
      setRaceArray(newArr);
    }
  }, [data]);

  // expand the flatlist item
  const renderAccordian = useCallback(
    items => {
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
  const keyExtractor = (item: any) => String(item.race_id);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(fetchData())}>
          <Text style={styles.buttonText}>
            {'Click to see Next To Go races'}
          </Text>
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
