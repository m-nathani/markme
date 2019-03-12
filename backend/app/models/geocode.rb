class Geocode < ApplicationRecord

  validates :key, :text, :title, :lat, :lng, presence: true
  validates :lat, :lng, numericality: true
end
