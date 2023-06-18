class RefreshToken < ApplicationRecord
  belongs_to :user, class_name: 'User'
end
