import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const getPartners = (range: number | number[] | undefined) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_PARTNERS,
    });
    try {
      const { data } = await axios.get(
        `http://localhost:4000/partners/${range}`
      );
      dispatch({
        type: ActionType.GET_PARTNERS_SUCCESS,
        payload: data.data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_PARTNERS_ERROR,
        payload: err.message,
      });
    }
  };
};
