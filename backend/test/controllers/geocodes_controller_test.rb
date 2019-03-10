require 'test_helper'

class GeocodesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @geocode = geocodes(:one)
  end

  test "should get index" do
    get geocodes_url, as: :json
    assert_response :success
  end

  test "should create geocode" do
    assert_difference('Geocode.count') do
      post geocodes_url, params: { geocode: { key: @geocode.key, lat: @geocode.lat, lng: @geocode.lng, text: @geocode.text, title: @geocode.title } }, as: :json
    end

    assert_response 201
  end

  test "should show geocode" do
    get geocode_url(@geocode), as: :json
    assert_response :success
  end

  test "should update geocode" do
    patch geocode_url(@geocode), params: { geocode: { key: @geocode.key, lat: @geocode.lat, lng: @geocode.lng, text: @geocode.text, title: @geocode.title } }, as: :json
    assert_response 200
  end

  test "should destroy geocode" do
    assert_difference('Geocode.count', -1) do
      delete geocode_url(@geocode), as: :json
    end

    assert_response 204
  end
end
