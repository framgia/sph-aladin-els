class WordsController < ApplicationController
    before_action :authenticate_user!
    before_action :admin?, only: [:add_word]
    before_action :set_quiz, only: [:add_word]


    def add_word
    # create the word
     word = @quiz.words.create(question: set_word[:question])
       if word.choices.create(set_word[:choices_attributes])
        render json: {
            status: {code: 200, message: 'Word added', data: set_word}
          }
        else
           render json: {
            status: :unprocessable_entity
           }
     end
    end

    private

    def admin? 
      if !current_user.is_admin
        render status: 401, message: "Unauthorized"
      end
    end

    def set_quiz
      @quiz = Quiz.find(params[:id])
    end

    def set_word
      word_params = params.require(:word).permit(:question, { choices_attributes: [:choice, :is_correct] })
    end

end
