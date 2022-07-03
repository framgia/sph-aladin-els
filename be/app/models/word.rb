class Word < ApplicationRecord
    belongs_to :quiz
    has_many :choices
    accepts_nested_attributes_for :choices, reject_if: :all_blank, allow_destroy: true
end
