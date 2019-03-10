import markMeService from 'service/api';
import { geodCoderService, checkDuplicatePlace } from 'service';
import {
  FETCH_GEOCODER_DATA, FETCH_GEOCODER_DATA_SUCCESS, FETCH_GEOCODER_DATA_FAIL, DELETE_GEOCODER_DATA,
  EDIT_GEOCODER_DATA, EDIT_GEOCODER_DATA_SUCCESS, SET_GEOCODER_DATA,
} from 'constant';

export const fetchGeocoderDataFail = err => ({
  type: FETCH_GEOCODER_DATA_FAIL,
  error: true,
  message: err,
});

export const fetchGeocoderDataSuccess = (data, stateData = []) => ({
  type: FETCH_GEOCODER_DATA_SUCCESS,
  data: data ? [...stateData, data] : [...stateData],
});

export const editGeocoderDataSuccess = (newData, oldData) => ({
  type: EDIT_GEOCODER_DATA_SUCCESS,
  data: { newData, oldData },
});


export const fetchGeocoderData = searchQuery => async (dispatch, getState) => {
  const state = getState().root;
  const { data, isEdit } = state;
  // make a request only if search term has been entered
  if (searchQuery) {
    dispatch({ type: FETCH_GEOCODER_DATA, error: false });
    try {
      let response = {};
      let result = geodCoderService.formatResult(await geodCoderService.fromAddress(searchQuery));
      if (isEdit) {
        response = await markMeService.updateGeocode(result, isEdit.id);
        dispatch(editGeocoderDataSuccess(response.data, isEdit));
      } else {
        if (checkDuplicatePlace(result, data)) {
          result = false;
        }
        if (result) {
          response = await markMeService.createGeocode(result);
        }
        dispatch(fetchGeocoderDataSuccess(response.data, data));
      }
    } catch (error) {
      dispatch(fetchGeocoderDataFail(error.message || error || 'Error on add/edit markme service'));
    }
  }
};

export const deleteGeocoderData = data => async (dispatch) => {
  try {
    await markMeService.deleteGeocode(data.id);
    dispatch({ type: DELETE_GEOCODER_DATA, data });
  } catch (error) {
    dispatch(fetchGeocoderDataFail(error.message || error || 'Error on delete markme service'));
  }
};

export const editGeocoderData = place => ({
  type: EDIT_GEOCODER_DATA,
  data: place,
});

export const setGeoderData = data => ({
  type: SET_GEOCODER_DATA,
  data,
});
