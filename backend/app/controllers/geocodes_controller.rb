class GeocodesController < ApplicationController
  before_action :set_geocode, only: [:show, :update, :destroy]

  # GET /geocodes
  def index
    @geocodes = Geocode.all

    render json: @geocodes
  end

  # GET /geocodes/1
  def show
    render json: @geocode
  end

  # POST /geocodes
  def create
    @geocode = Geocode.new(geocode_params)

    if @geocode.save
      render json: @geocode, status: :created, location: @geocode
    else
      render json: @geocode.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /geocodes/1
  def update
    if @geocode.update(geocode_params)
      render json: @geocode
    else
      render json: @geocode.errors, status: :unprocessable_entity
    end
  end

  # DELETE /geocodes/1
  def destroy
    @geocode.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_geocode
      @geocode = Geocode.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def geocode_params
      params.require(:geocode).permit(:key, :text, :title, :lat, :lng)
    end
end
