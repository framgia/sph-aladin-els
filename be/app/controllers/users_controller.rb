class UsersController < ApplicationController
    before_action :authenticate_user!

    def edit 
      if current_user.update(lastname: params[:lastname], firstname: params[:firstname])
        render json: {
            status: 200,
            message: "Info updated",
          }, status: :ok
      else
        render json: {
            status: {message: "User couldn't be updated successfully. #{user.errors.full_messages.to_sentence}"}
          }, status: :unprocessable_entity
      end
    end

    def show
        render json: {
            status: 200,
            data: current_user
          }
    end
    
    private

    def user_params
        params.require(:user).permit(:lastname, :firstname, :email)
    end
end
