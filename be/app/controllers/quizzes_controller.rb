class QuizzesController < ApplicationController
  before_action :authenticate_user!
  before_action :admin?, only: [:admin_quizzes]
  def index
    quizzes = Quiz.all
    render json: {
        status: {code: 200, message: 'Quizzes'},
        data: quizzes
      }, status: :ok
  end
 
  def admin_quizzes
    quizzes = Quiz.all
    render json: {
        status: {code: 200, message: 'Admin Quizzes'},
        data: quizzes
      }, status: :ok
  end

  

  private

  def admin? 
    if !current_user.is_admin
      render status: 401, message: "Unauthorized"
    end
  end
  
end
