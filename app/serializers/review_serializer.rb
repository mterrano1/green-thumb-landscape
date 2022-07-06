class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :like, :plant_id, :user_id
end
