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

    # POST /plants/:plant_id/reviews
    def create
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created 
    end

    private
    
    def find_plant
        Plant.find(params[:plant_id])
    end

    def review_params
        params.permit( :comment, :like, :plant_id)
    end
    
end
