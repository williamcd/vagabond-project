class Api::CommentsController < ApplicationController
    def index
        @city = City.find(params[:city_id])
        @comments = @city.comments
        render json: {
            comments: @comments
        }
    end
    def show
        @comment = Comment.find(params[:id])
        render json: {
            comment: @comment
        }
    end
    def create
        @city = City.find(params[:city_id])
        @comment = @city.comments.create(comment_params)
        render json: {
            comment: @comment
        }
    end
    def update
        @city = City.find(params[:city_id])
        @comment = @city.comments.find(params[:id])
        @comment.update!(comment_params)
        render json: {
            comment: @comment
        }
    end
    def destroy
        Comment.find(params[:id]).destroy
        render json: {
            message: "Destroyed"
        }
    end

    private

    def comment_params
        params.require(:comment).permit(:title, :content)
    end
end
