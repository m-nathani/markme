require "rails_helper"

RSpec.describe GeocodesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(:get => "/geocodes").to route_to("geocodes#index")
    end

    it "routes to #show" do
      expect(:get => "/geocodes/1").to route_to("geocodes#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/geocodes").to route_to("geocodes#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/geocodes/1").to route_to("geocodes#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/geocodes/1").to route_to("geocodes#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/geocodes/1").to route_to("geocodes#destroy", :id => "1")
    end
  end
end
