class PlantsController < ApplicationController
    # before_action :authorize, only: :show
    skip_before_action :authorize, only: :index
    
    #GET /plants
    def index
        plants = Plant.all
        render json: plants
    end

    #GET /plants/:id
    def show
        plant = Plant.find_by(id: params[:id])
        render json: plant
    end

    # private

    # def authorize
    #     return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    # end

end
