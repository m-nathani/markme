require 'rails_helper'

RSpec.describe "Geocodes", type: :request do
  describe "GET /geocodes" do
    it "works! (now write some real specs)" do
      get geocodes_path
      expect(response).to have_http_status(200)
    end
  end
end
