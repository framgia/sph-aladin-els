class Quiz < ApplicationRecord
    has_many :quiz_logs
    has_many :users, through: :quiz_logs
    validates :title, presence: true, length: {minimum:7, maximum:20}
    validates :description, presence: true, length: {minimum:20}

end
