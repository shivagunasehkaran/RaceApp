import {combineReducers} from 'redux';
import appData from './dataReducer';

const rootReducer = combineReducers({
  appData,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
