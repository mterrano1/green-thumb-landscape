class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :zone_low, :zone_high, :sun_exposure, :water_category, :image, :summary
  has_many :reviews

end
