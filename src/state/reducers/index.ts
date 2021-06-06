import { combineReducers } from 'redux';
import partnersReducer from './partnersReducer';

const reducers = combineReducers({
  partners: partnersReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
