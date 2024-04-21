import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './Home.style';
import ChildCoffeeExtras from '../../components/ChildCoffeeExtras';
import {fetchData} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import {ConstantText} from '../../utils/ConstantText';

const Home = () => {
  const [raceArray, setRaceArray] = useState([]);
  const [formatedRaceArray, setFormatedRaceArray] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.appData.isFetching);
  const data = useSelector(state => state.appData.data);

  // sort data based on start time
  const sortedData = useMemo(() => {
    if (!raceArray) {
      return [];
    }
    return raceArray?.sort((a, b) => {
      if (a?.advertised_start?.seconds && b?.advertised_start?.seconds) {
        return a.advertised_start?.seconds > b.advertised_start?.seconds
          ? 1
          : -1;
      }
      return 0;
    });
  }, [raceArray]);

  const prepareRaceData = () => {};

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
  const childListRenderItem = ({item, index}) => (
    <ChildCoffeeExtras
      item={item}
      index={index}
      onPress={renderAccordian}
      selectedIndex={selectedIndex}
    />
  );

  // child KeyExtractor
  const keyExtractor = (index: any) => String(index);

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
            data={sortedData}
            renderItem={childListRenderItem}
            keyExtractor={keyExtractor}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
