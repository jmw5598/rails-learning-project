class User < ApplicationRecord
  require "securerandom"

  has_secure_password

  validates :name, presence: false
  validates :email, presence: true
  validates :password, presence: true
  validates :username, presence: true, uniqueness: true

  has_many :refresh_tokens, class_name: 'RefreshToken', foreign_key: 'users_id'
end
