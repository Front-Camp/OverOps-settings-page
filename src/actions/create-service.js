import {hideLoader, showLoader} from './loader';
import {createService} from '../api';

export const FETCH_CREATE_SERVICE_REQUEST = 'FETCH_CREATE_SERVICE_REQUEST';
export const FETCH_CREATE_SERVICE_SUCCESS = 'FETCH_CREATE_SERVICE_SUCCESS';
export const FETCH_CREATE_SERVICE_FAILURE = 'FETCH_CREATE_SERVICE_FAILURE';

export const fetchCreateServicesRequest = () => ({
  type: FETCH_CREATE_SERVICE_REQUEST
});

export const fetchCreateServicesSuccess = data => ({
  type: FETCH_CREATE_SERVICE_SUCCESS,
  data
});

export const fetchCreateServicesFailure = error => ({
  type: FETCH_CREATE_SERVICE_FAILURE,
  error
});

export const fetchCreateService = data => dispatch => {
  dispatch(fetchCreateServicesRequest());
  dispatch(showLoader());

  return createService(data)
    .then(
      data => {
        dispatch(hideLoader());
        return dispatch(fetchCreateServicesSuccess(data));
      },
      err => {
        dispatch(hideLoader());
        return dispatch(fetchCreateServicesFailure(err));
      });
};
