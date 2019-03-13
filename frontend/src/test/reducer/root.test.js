import reducer from '../../reducer/root';
import * as types from '../../constant';

describe('reducer', () => {
  const initialState = {
    initial: true,
    data: [],
    error: false,
    isLoading: false,
    isEdit: false,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should fetch geocode data', () => {
    const expectedState = {
      initial: false,
      data: [],
      isLoading: true,
      type: types.FETCH_GEOCODER_DATA,
    };
    expect(
      reducer([], {
        type: types.FETCH_GEOCODER_DATA,
        data: [],
      }),
    ).toEqual(expectedState);
  });

  it('should fetch geocode data with success', () => {
    const expectedState = {
      data: [],
      isLoading: false,
      type: types.FETCH_GEOCODER_DATA_SUCCESS,
    };
    expect(
      reducer([], {
        type: types.FETCH_GEOCODER_DATA_SUCCESS,
        data: [],
      }),
    ).toEqual(expectedState);
  });


  it('should fetch geocode data with fail', () => {
    const expectedState = {
      data: [{ key: 1 }],
      isLoading: false,
      error: true,
      type: types.FETCH_GEOCODER_DATA_FAIL,
    };
    expect(
      reducer([], {
        type: types.FETCH_GEOCODER_DATA_FAIL,
        data: [{ key: 1 }],
      }),
    ).toEqual(expectedState);
  });

  it('should delete geocode data', () => {
    const expectedState = {
      data: [],
      type: types.DELETE_GEOCODER_DATA,
    };
    expect(
      reducer({ data: [] }, {
        type: types.DELETE_GEOCODER_DATA,
        data: [{ key: 1 }],
      }),
    ).toEqual(expectedState);
  });

  it('should delete geocode data', () => {
    const expectedState = {
      data: [],
      type: types.EDIT_GEOCODER_DATA,
      isEdit: { key: 1 },
    };
    expect(
      reducer({ data: [] }, {
        type: types.EDIT_GEOCODER_DATA,
        data: { key: 1 },
      }),
    ).toEqual(expectedState);
  });

  it('should load geocode data', () => {
    const expectedState = {
      data: [{ b: { a: 1 } }],
      type: types.LOAD_GEOCODER_DATA,
    };
    expect(
      reducer({ data: [] }, {
        type: types.LOAD_GEOCODER_DATA,
        data: [{ b: { a: 1 } }],
      }),
    ).toEqual(expectedState);
  });
});
