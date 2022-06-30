class QuizzesController < ApplicationController
  before_action :authenticate_user!
  before_action :admin?, only: [:admin_quizzes, :update, :destroy]
  before_action :set_quiz, only: [:update, :destroy]

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
 
  def update
    if @quiz.update(quiz_params)
      render json: @quiz
    else
      render nothing: true, status: :unprocessable_entity 
    end
  end

  def destroy
     if @quiz.destroy
      render json: {
        status: {code: 200,  message: "Quiz successfully deleted"}
      }
     else
      render nothing: true, status: :unprocessable_entity 
     end
  end

  private

  def admin? 
    if !current_user.is_admin
      render status: 401, message: "Unauthorized"
    end
  end

  def quiz_params
     params.require(:quiz).permit(:title, :description, :id)
  end

  def set_quiz
     @quiz = Quiz.find(params[:id]) 
  end
  
end
