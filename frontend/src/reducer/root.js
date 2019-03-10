import {
  FETCH_GEOCODER_DATA, FETCH_GEOCODER_DATA_SUCCESS, FETCH_GEOCODER_DATA_FAIL, DELETE_GEOCODER_DATA,
  EDIT_GEOCODER_DATA, EDIT_GEOCODER_DATA_SUCCESS, SET_GEOCODER_DATA,
} from 'constant';

const initialState = {
  initial: true,
  data: [],
  error: false,
  isLoading: false,
  isEdit: false,
};

const fetchGeocoderData = (state, action) => ({
  ...state, ...action, isLoading: true, initial: false,
});

const fetchGeocoderDataSuccess = (state, action) => ({
  ...state,
  type: action.type,
  data: [...action.data],
  isLoading: false,
});

const fetchGeocoderDataFail = (state, action) => ({
  ...state, ...action, isLoading: false,
});

const deleteGeocoderData = (state, action) => ({
  ...state,
  type: action.type,
  data: state.data.filter(item => item.key !== action.data.key),
});

const editGeocoderData = (state, action) => ({
  ...state, type: action.type, isEdit: action.data,
});

const setGeoderData = (state, action) => ({
  ...state,
  type: action.type,
  data: [...action.data],
});

const editGeocoderDataSuccess = (state, action) => {
  const { newData, oldData } = action.data;
  return newData ? {
    ...state,
    type: action.type,
    data: state.data.map((item) => {
      if (item.key === oldData.key) return newData;
      return item;
    }),
    isEdit: false,
    isLoading: false,
  } : {
    ...state,
    type: action.type,
    isLoading: false,
  };
};

export default function root(state = initialState, action) {
  switch (action.type) {
    case FETCH_GEOCODER_DATA: return fetchGeocoderData(state, action);
    case FETCH_GEOCODER_DATA_SUCCESS: return fetchGeocoderDataSuccess(state, action);
    case FETCH_GEOCODER_DATA_FAIL: return fetchGeocoderDataFail(state, action);
    case DELETE_GEOCODER_DATA: return deleteGeocoderData(state, action);
    case EDIT_GEOCODER_DATA: return editGeocoderData(state, action);
    case EDIT_GEOCODER_DATA_SUCCESS: return editGeocoderDataSuccess(state, action);
    case SET_GEOCODER_DATA: return setGeoderData(state, action);
    default:
      return state;
  }
}
