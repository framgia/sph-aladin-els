class Quiz < ApplicationRecord
    has_many :quiz_logs
    has_many :users, through: :quiz_logs
    has_many :words
end
