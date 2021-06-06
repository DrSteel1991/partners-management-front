import { ActionType } from '../action-types';
import { Action, Partner } from '../actions';

interface PartnersState {
  loading: boolean;
  error: [] | null;
  data: Partner[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: PartnersState = initialState,
  action: Action
): PartnersState => {
  switch (action.type) {
    case ActionType.GET_PARTNERS:
      return { loading: true, error: null, data: [] };
    case ActionType.GET_PARTNERS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.GET_PARTNERS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
