class User < ApplicationRecord
  has_many :follows, :as => :followable
  has_many :followings, through: :follows, source: :user
  has_many :followable_followers, class_name: "Follow", :foreign_key => "user_id"
  has_many :followers, through: :followable_followers, source: :followable, source_type: "User"

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def follow!(user)
    self.follows.create(user: user)
  end

  def unfollow!(user)
   self.followings.delete(user)
  end

end
