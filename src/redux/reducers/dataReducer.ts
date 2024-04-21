import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from '../../utils/constants';

const initialState = {
  raceData: [],
  isFetching: false,
  error: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        raceData: [],
        isFetching: true,
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        raceData: action.raceData,
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default dataReducer;
