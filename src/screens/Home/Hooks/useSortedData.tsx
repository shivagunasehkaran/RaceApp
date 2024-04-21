import {useMemo} from 'react';

const useSortedData = raceArray => {
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

  return {
    sortedData,
  };
};

export default useSortedData;
