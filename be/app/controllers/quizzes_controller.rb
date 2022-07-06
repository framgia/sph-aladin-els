class QuizzesController < ApplicationController
  before_action :authenticate_user!
  before_action :admin?, only: [:admin_quizzes, :create]
  
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

  def create
    quiz = Quiz.new(quiz_params)
    if quiz.save
      render json: {
        status: {code: 200, message: 'Quiz created'},
        data: quiz
      }, status: :ok
    end
  end

  private

   def admin? 
    if !current_user.is_admin
      render json: {
        status: {code: 401, message: 'Unauthorized'}
      }
    end
  end

  def quiz_params
    params.require(:quiz).permit(:title, :description)
  end
  
end
