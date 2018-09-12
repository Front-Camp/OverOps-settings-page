import {fetchServicesLists} from '../api';
import {showLoader, hideLoader} from './loader';

export const TOGGLE_SHOW_KEY_ID = 'TOGGLE_SHOW_KEY_ID';
export const FETCH_ALL_SERVICES_REQUEST = 'FETCH_ALL_SERVICES_REQUEST';
export const FETCH_ALL_SERVICES_SUCCESS = 'FETCH_ALL_SERVICES_SUCCESS';
export const FETCH_ALL_SERVICES_FAILURE = 'FETCH_ALL_SERVICES_FAILURE';

export const toggleShowKeyId = keyname => {
  return {
    type: TOGGLE_SHOW_KEY_ID,
    payload: {keyname}
  };
};

export const fetchAllServicesRequest = date => ({
  type: FETCH_ALL_SERVICES_REQUEST,
  date
});

export const fetchAllServicesSuccess = data => ({
  type: FETCH_ALL_SERVICES_SUCCESS,
  data
});

export const fetchAllServicesFailure = error => ({
  type: FETCH_ALL_SERVICES_FAILURE,
  error
});

export const fetchAllServices = () => dispatch => {
  dispatch(fetchAllServicesRequest());
  dispatch(showLoader());

  return fetchServicesLists()
    .then(
      data => {
        dispatch(hideLoader());
        return dispatch(fetchAllServicesSuccess(data));
      },
      err => {
        dispatch(hideLoader());
        return dispatch(fetchAllServicesFailure(err));
      });
};

