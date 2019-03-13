import * as types from '../../constant';

describe('constant', () => {
  it('should match fetch constants', () => {
    expect(types.FETCH_GEOCODER_DATA).toEqual('FETCH_GEOCODER_DATA');
    expect(types.FETCH_GEOCODER_DATA_FAIL).toEqual('FETCH_GEOCODER_DATA_FAIL');
    expect(types.FETCH_GEOCODER_DATA_SUCCESS).toEqual('FETCH_GEOCODER_DATA_SUCCESS');
  });

  it('should match delete constants', () => {
    expect(types.DELETE_GEOCODER_DATA).toEqual('DELETE_GEOCODER_DATA');
  });

  it('should match edit constants', () => {
    expect(types.EDIT_GEOCODER_DATA).toEqual('EDIT_GEOCODER_DATA');
    expect(types.EDIT_GEOCODER_DATA_SUCCESS).toEqual('EDIT_GEOCODER_DATA_SUCCESS');
  });

  it('should match load constants', () => {
    expect(types.LOAD_GEOCODER_DATA).toEqual('LOAD_GEOCODER_DATA');
  });
});
