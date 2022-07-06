class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  def password_token_valid?
    (self.reset_password_sent_at + 1.hour) > Time.zone.now
  end

  def send_password_reset
    self.reset_password_token = generate_token
    self.reset_password_sent_at = Time.zone.now
    save!
    UserMailer.password_reset(self).deliver_now
  end

  def reset_password(password)
    self.reset_password_token = nil
    self.password = password
  end

  private
  def generate_token
    token = SecureRandom.urlsafe_base64
  end

end
