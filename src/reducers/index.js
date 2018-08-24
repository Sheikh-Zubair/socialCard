import { combineReducers } from 'redux';
import SelectPersonReducer from './reducer_person_select';

const rootReducer = combineReducers({
  selectedPerson: SelectPersonReducer
});

export default rootReducer;
