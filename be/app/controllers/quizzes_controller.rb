class QuizzesController < ApplicationController
  before_action :authenticate_user!
  def index
    quizzes = Quiz.all
    render json: {
        status: {code: 200, message: 'Quizzes'},
        data: quizzes
      }, status: :ok
  end
  
end
