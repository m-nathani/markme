import { geodCoderService, checkDuplicatePlace } from 'service';
import {
  FETCH_GEOCODER_DATA, FETCH_GEOCODER_DATA_SUCCESS, FETCH_GEOCODER_DATA_FAIL, DELETE_GEOCODER_DATA,
  EDIT_GEOCODER_DATA, EDIT_GEOCODER_DATA_SUCCESS,
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
  // make a request only if search term has been entered
  if (searchQuery) {
    dispatch({ type: FETCH_GEOCODER_DATA, error: false });
    try {
      let result = geodCoderService.formatResult(await geodCoderService.fromAddress(searchQuery));
      if (state.isEdit) {
        dispatch(editGeocoderDataSuccess(result, state.isEdit));
      } else {
        if (checkDuplicatePlace(result, state.data)) {
          result = false;
        }
        dispatch(fetchGeocoderDataSuccess(result, state.data));
      }
    } catch (error) {
      dispatch(fetchGeocoderDataFail(error.message));
    }
  }
};

export const deleteGeocoderData = place => ({
  type: DELETE_GEOCODER_DATA,
  data: place,
});

export const editGeocoderData = place => ({
  type: EDIT_GEOCODER_DATA,
  data: place,
});
