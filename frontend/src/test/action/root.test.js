import * as actions from '../../action/root';
import * as types from '../../constant';

describe('actions', () => {
  it('should fail fetch geocode data', () => {
    const data = {
      message: 'err',
    };
    const expectedAction = {
      type: types.FETCH_GEOCODER_DATA_FAIL,
      ...data,
    };
    expect(actions.fetchGeocoderDataFail(data.message)).toEqual(expectedAction);
  });


  it('should success on fetch geocode data', () => {
    const data = {}; const
      stateData = [];
    const expectedAction = {
      type: types.FETCH_GEOCODER_DATA_SUCCESS,
      data: [...stateData, data],
    };
    expect(actions.fetchGeocoderDataSuccess(data, stateData)).toEqual(expectedAction);
  });

  it('should edit on fetch geocode data', () => {
    const newData = {}; const
      oldData = {};
    const expectedAction = {
      type: types.EDIT_GEOCODER_DATA_SUCCESS,
      data: { newData, oldData },
    };
    expect(actions.editGeocoderDataSuccess(newData, oldData)).toEqual(expectedAction);
  });

  it('should edit geocode data', () => {
    const place = [];
    const expectedAction = {
      type: types.EDIT_GEOCODER_DATA,
      data: place,
    };
    expect(actions.editGeocoderData(place)).toEqual(expectedAction);
  });

  it('should edit geocode data', () => {
    const data = {};
    const expectedAction = {
      type: types.LOAD_GEOCODER_DATA,
      data,
    };
    expect(actions.loadGeoderData(data)).toEqual(expectedAction);
  });
});
