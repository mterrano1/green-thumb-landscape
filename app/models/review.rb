class Review < ApplicationRecord
    belongs_to :user
    belongs_to :plant

    validates :comment, presence: true
end
