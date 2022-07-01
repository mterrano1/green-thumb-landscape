class ReviewsController < ApplicationController

    def index
        if params[:plant_id]
            plant = find_plant
            reviews = plant.reviews
        else
            reviews = Review.all
        end
        render json: reviews, include: :plant
    end

    #POST /plants/:plant_id/reviews
    # def create
    #     plant = find_plant
    #     review = plant.reviews.create(review_paramsr)
    #     render json: review, status: :created 
    # end

    private
    
    def find_plant
        Plant.find(params[:id])
    end

    def review_params
        params.permit( :comment, :like, :plant_id, :user_id)
    end
    
end

# reviews
# t.integer "green_thumb"
# t.integer "black_thumb"
# t.string "comment"
# t.boolean "like"
# t.boolean "planted"
# t.integer "plant_id"
# t.integer "user_id"
