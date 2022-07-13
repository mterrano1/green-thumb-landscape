class ReviewSerializer < ActiveModel::Serializer
  # attributes :id, :comment, :like, :plant_id, :user_id
  attributes :id, :username, :comment, :like, :plant_id, :user_id

  def username
    user_id = self.object.user_id
    user = User.find_by(id: user_id)
    username = user.username
  end

  belongs_to :user
  belongs_to :plant
end
