import * as actions from '../../action/root';
import * as types from '../../constant';

describe('actions', () => {
  it('should fail fetch geocode data', () => {

    const data = {
      error: true,
      message: err,
    }
    const expectedAction = {
      type: types.FETCH_GEOCODER_DATA_FAIL,
      error: true,
      message: err,
    }
    expect(actions.fetchGeocoderDataFail(data)).toEqual(expectedAction)
  })
})