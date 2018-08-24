import { PERSON_SELECT, DEFAULT_PERSON } from '../actions/index';

export default function personSelectReducer (state = {}, action) {
    switch (action.type) {
        case PERSON_SELECT:
            return action.payload;
        case DEFAULT_PERSON:
            return action.payload;
    }
    return state;
}