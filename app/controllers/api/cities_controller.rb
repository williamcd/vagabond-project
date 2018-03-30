class Api::CitiesController < ApplicationController
    def index
        @cities = City.all
        render json: {
            cities: @cities
        }
    end
    def show
        @city = City.find(params[:id])
        render json: {
            city: @city
        }
    end
    def update
        @updated_city = City.find(params[:id])
        @updated_city.update!(city_params)
        render json: {
            city: @updated_city
        }
    end
    def create
        @new_city = City.create(city_params)
        render json: {
            city: @new_city
        }
    end
    def destroy
        City.find(params[:id]).destroy
        render json: {
            message: "City destroyed"
        }
    end

    private

    def city_params
        params.require(:city).permit(:name, :photo_url, :description)
    end
end
